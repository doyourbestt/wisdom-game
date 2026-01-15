/**
 * 战斗系统
 */
class Battle {
    constructor(player, enemy, questions, bookId) {
        this.player = player;
        this.enemy = { ...enemy, currentHp: enemy.hp };
        this.questions = questions;
        this.bookId = bookId;
        this.currentQuestionIndex = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.battleStartTime = Date.now();
        this.playerStartHp = player.currentHp;
        this.isFinished = false;
        this.result = null;
        this.rewards = { exp: 0, gold: 0, wisdom: 0, items: [] };
        this.buffs = { attack: 1, duration: 0 };
        this.timerInterval = null;
        this.timeLimit = 15; // 每题15秒
        this.timeRemaining = this.timeLimit;

        // 回调函数
        this.onQuestionUpdate = null;
        this.onDamageDealt = null;
        this.onPlayerDamage = null;
        this.onComboUpdate = null;
        this.onBattleEnd = null;
        this.onTimerUpdate = null;
    }

    /**
     * 获取当前问题
     */
    get currentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    /**
     * 开始战斗
     */
    start() {
        this.showQuestion();
        this.startTimer();
    }

    /**
     * 显示问题
     */
    showQuestion() {
        if (this.onQuestionUpdate) {
            this.onQuestionUpdate(this.currentQuestion);
        }
    }

    /**
     * 开始计时器
     */
    startTimer() {
        this.timeRemaining = this.timeLimit;
        this.stopTimer();

        this.timerInterval = setInterval(() => {
            this.timeRemaining -= 0.1;

            if (this.onTimerUpdate) {
                this.onTimerUpdate(this.timeRemaining, this.timeLimit);
            }

            if (this.timeRemaining <= 0) {
                this.handleTimeout();
            }
        }, 100);
    }

    /**
     * 停止计时器
     */
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    /**
     * 处理超时
     */
    handleTimeout() {
        this.stopTimer();
        this.handleAnswer(-1); // -1 表示超时
    }

    /**
     * 处理玩家答题
     */
    handleAnswer(selectedIndex) {
        try {
            this.stopTimer();

            const question = this.currentQuestion;
            if (!question) {
                console.error('No question available');
                this.endBattle(true);
                return { isCorrect: false, correctIndex: 0, explanation: '' };
            }

            const isCorrect = selectedIndex === question.correctIndex;

            // 记录答题
            this.player.recordAnswer(isCorrect);

            if (isCorrect) {
                this.handleCorrectAnswer();
            } else {
                this.handleWrongAnswer();
            }

            // 检查战斗是否结束
            const battleEnded = this.checkBattleEnd();

            if (!battleEnded) {
                // 继续下一题
                this.currentQuestionIndex++;
                if (this.currentQuestionIndex < this.questions.length) {
                    const self = this;
                    setTimeout(function() {
                        if (!self.isFinished) {
                            self.showQuestion();
                            self.startTimer();
                        }
                    }, 1500);
                } else {
                    // 问题用完，玩家胜利
                    this.endBattle(true);
                }
            }

            return {
                isCorrect,
                correctIndex: question.correctIndex,
                explanation: question.explanation
            };
        } catch (error) {
            console.error('Error in handleAnswer:', error);
            this.endBattle(true);
            return { isCorrect: false, correctIndex: 0, explanation: '' };
        }
    }

    /**
     * 处理正确答案
     */
    handleCorrectAnswer() {
        this.correctCount++;
        this.combo++;

        if (this.combo > this.maxCombo) {
            this.maxCombo = this.combo;
        }

        // 计算伤害
        let damage = this.calculateDamage();

        // 连击加成
        if (this.combo >= 3) {
            damage = Math.floor(damage * (1 + (this.combo - 2) * 0.2));
        }

        // 对敌人造成伤害
        this.enemy.currentHp = Math.max(0, this.enemy.currentHp - damage);

        // 获得智慧
        const wisdomGain = 10 + this.combo * 2;
        this.player.addWisdom(wisdomGain);

        if (this.onDamageDealt) {
            this.onDamageDealt(damage, this.combo);
        }

        if (this.onComboUpdate && this.combo >= 2) {
            this.onComboUpdate(this.combo);
        }

        // 减少buff持续时间
        if (this.buffs.duration > 0) {
            this.buffs.duration--;
            if (this.buffs.duration === 0) {
                this.buffs.attack = 1;
            }
        }
    }

    /**
     * 处理错误答案
     */
    handleWrongAnswer() {
        this.wrongCount++;
        this.combo = 0;

        // 敌人反击
        const enemyDamage = this.enemy.attack;
        const isDead = this.player.takeDamage(enemyDamage);

        if (this.onPlayerDamage) {
            this.onPlayerDamage(enemyDamage);
        }

        if (this.onComboUpdate) {
            this.onComboUpdate(0);
        }
    }

    /**
     * 计算伤害
     */
    calculateDamage() {
        let baseDamage = this.player.attack;

        // buff加成
        baseDamage = Math.floor(baseDamage * this.buffs.attack);

        // 智慧加成 (每10点智慧+1%伤害)
        const wisdomBonus = 1 + Math.floor(this.player.wisdom / 10) * 0.01;
        baseDamage = Math.floor(baseDamage * wisdomBonus);

        // 随机波动 (90%-110%)
        const variance = 0.9 + Math.random() * 0.2;
        baseDamage = Math.floor(baseDamage * variance);

        return Math.max(1, baseDamage);
    }

    /**
     * 使用技能
     */
    useSkill(skillId) {
        const book = getBook(this.bookId);
        const skill = book.skills.find(s => s.id === skillId);

        if (!skill) return { success: false, message: '技能不存在' };

        // 检查冷却
        const cooldown = this.player.skillCooldowns[skillId] || 0;
        if (cooldown > 0) {
            return { success: false, message: `技能冷却中 (${cooldown}回合)` };
        }

        // 设置冷却
        this.player.skillCooldowns[skillId] = skill.cooldown;

        // 执行技能效果
        let result = { success: true, message: '', effect: null };

        switch (skill.effect.type) {
            case 'heal':
                const healAmount = Math.floor(this.player.maxHp * skill.effect.value);
                this.player.heal(healAmount);
                result.message = `恢复了 ${healAmount} 点生命值`;
                result.effect = { type: 'heal', value: healAmount };
                break;

            case 'damage':
                this.enemy.currentHp = Math.max(0, this.enemy.currentHp - skill.effect.value);
                result.message = `对敌人造成 ${skill.effect.value} 点伤害`;
                result.effect = { type: 'damage', value: skill.effect.value };
                break;

            case 'buff':
                this.buffs.attack = skill.effect.value;
                this.buffs.duration = skill.effect.duration || 1;
                result.message = `攻击力提升 ${Math.floor((skill.effect.value - 1) * 100)}%`;
                result.effect = { type: 'buff', value: skill.effect.value };
                break;
        }

        // 检查战斗是否结束
        this.checkBattleEnd();

        return result;
    }

    /**
     * 减少所有技能冷却
     */
    reduceSkillCooldowns() {
        Object.keys(this.player.skillCooldowns).forEach(skillId => {
            if (this.player.skillCooldowns[skillId] > 0) {
                this.player.skillCooldowns[skillId]--;
            }
        });
    }

    /**
     * 检查战斗是否结束
     */
    checkBattleEnd() {
        if (this.isFinished) return true;

        if (this.enemy.currentHp <= 0) {
            this.endBattle(true);
            return true;
        }

        if (this.player.currentHp <= 0) {
            this.endBattle(false);
            return true;
        }

        return false;
    }

    /**
     * 结束战斗
     */
    endBattle(victory) {
        this.stopTimer();
        this.isFinished = true;
        this.result = victory ? 'victory' : 'defeat';

        // 记录连击
        this.player.recordCombo(this.maxCombo);

        if (victory) {
            // 计算奖励
            this.calculateRewards();

            // 记录胜利
            this.player.recordWin(this.enemy.hp >= 150); // HP>=150认为是BOSS

            // 检查完美战斗
            if (this.wrongCount === 0 && this.player.currentHp === this.playerStartHp) {
                this.player.recordPerfectBattle();
            }

            // 检查速度战斗
            const battleDuration = (Date.now() - this.battleStartTime) / 1000;
            this.player.recordFastBattle(battleDuration);
        } else {
            // 记录失败
            this.player.recordLoss();
        }

        if (this.onBattleEnd) {
            this.onBattleEnd(this.result, this.rewards);
        }
    }

    /**
     * 计算奖励
     */
    calculateRewards() {
        // 基础奖励
        this.rewards.exp = this.enemy.exp;
        this.rewards.gold = this.enemy.gold;
        this.rewards.wisdom = this.correctCount * 10;

        // 连击加成
        if (this.maxCombo >= 5) {
            this.rewards.exp = Math.floor(this.rewards.exp * 1.5);
            this.rewards.gold = Math.floor(this.rewards.gold * 1.5);
        } else if (this.maxCombo >= 3) {
            this.rewards.exp = Math.floor(this.rewards.exp * 1.2);
            this.rewards.gold = Math.floor(this.rewards.gold * 1.2);
        }

        // 全对加成
        if (this.wrongCount === 0) {
            this.rewards.exp = Math.floor(this.rewards.exp * 1.3);
            this.rewards.gold = Math.floor(this.rewards.gold * 1.3);
        }

        // 掉落物品
        const isBoss = this.enemy.hp >= 150;
        const dropItem = calculateDrop(isBoss);
        if (dropItem) {
            this.rewards.items.push(dropItem);
        }

        // BOSS额外掉落一次
        if (isBoss && Math.random() < 0.5) {
            const extraDrop = calculateDrop(true);
            if (extraDrop) {
                this.rewards.items.push(extraDrop);
            }
        }
    }

    /**
     * 应用奖励到玩家
     */
    applyRewards() {
        const levelUps = this.player.addExp(this.rewards.exp);
        this.player.addGold(this.rewards.gold);
        this.player.addWisdom(this.rewards.wisdom);

        // 添加掉落物品到背包
        this.rewards.items.forEach(item => {
            this.player.addItem(item.id);
        });

        return levelUps;
    }

    /**
     * 获取战斗统计
     */
    getStats() {
        return {
            correctCount: this.correctCount,
            wrongCount: this.wrongCount,
            maxCombo: this.maxCombo,
            duration: Math.floor((Date.now() - this.battleStartTime) / 1000),
            rewards: this.rewards
        };
    }
}

// 导出
window.Battle = Battle;
