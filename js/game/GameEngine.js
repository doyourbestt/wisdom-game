/**
 * 游戏核心引擎
 */
class GameEngine {
    constructor() {
        this.player = null;
        this.currentScreen = 'loading';
        this.currentBook = null;
        this.currentLevel = null;
        this.battle = null;
        this.rewardSystem = null;

        // DOM元素缓存
        this.screens = {};
        this.elements = {};

        // 初始化
        this.init();
    }

    /**
     * 初始化游戏
     */
    init() {
        this.cacheElements();
        this.bindEvents();
        this.startLoading();
    }

    /**
     * 缓存DOM元素
     */
    cacheElements() {
        // 屏幕
        this.screens = {
            loading: document.getElementById('loading-screen'),
            login: document.getElementById('login-screen'),
            mainMenu: document.getElementById('main-menu'),
            levelSelect: document.getElementById('level-select'),
            battle: document.getElementById('battle-screen'),
            result: document.getElementById('result-screen'),
            achievement: document.getElementById('achievement-screen'),
            inventory: document.getElementById('inventory-screen'),
            leaderboard: document.getElementById('leaderboard-screen')
        };

        // 其他元素
        this.elements = {
            // 登录
            nicknameInput: document.getElementById('nickname-input'),
            startBtn: document.getElementById('start-btn'),

            // 主菜单
            playerAvatar: document.getElementById('player-avatar'),
            playerTitle: document.getElementById('player-title'),
            playerName: document.getElementById('player-name'),
            playerLevel: document.getElementById('player-level'),
            expProgress: document.getElementById('exp-progress'),
            expText: document.getElementById('exp-text'),
            wisdomCount: document.getElementById('wisdom-count'),
            goldCount: document.getElementById('gold-count'),

            // 书籍卡片
            bookCards: document.querySelectorAll('.book-card'),

            // 菜单按钮
            dailyBtn: document.getElementById('daily-btn'),
            achievementBtn: document.getElementById('achievement-btn'),
            inventoryBtn: document.getElementById('inventory-btn'),
            leaderboardBtn: document.getElementById('leaderboard-btn'),

            // 每日签到
            dailyLoginPopup: document.getElementById('daily-login-popup'),
            streakDays: document.getElementById('streak-days'),
            dailyRewardItems: document.getElementById('daily-reward-items'),
            claimDailyBtn: document.getElementById('claim-daily-btn'),

            // 关卡选择
            backToMenu: document.getElementById('back-to-menu'),
            currentBookTitle: document.getElementById('current-book-title'),
            bookProgressText: document.getElementById('book-progress-text'),
            levelMap: document.getElementById('level-map'),

            // 战斗
            stageName: document.getElementById('stage-name'),
            stageSubtitle: document.getElementById('stage-subtitle'),
            battlePlayerName: document.getElementById('battle-player-name'),
            playerHpFill: document.getElementById('player-hp-fill'),
            playerHpText: document.getElementById('player-hp-text'),
            playerSprite: document.getElementById('player-sprite'),
            playerDamage: document.getElementById('player-damage'),
            enemySprite: document.getElementById('enemy-sprite'),
            enemyDamage: document.getElementById('enemy-damage'),
            battleEnemyName: document.getElementById('battle-enemy-name'),
            enemyHpFill: document.getElementById('enemy-hp-fill'),
            enemyHpText: document.getElementById('enemy-hp-text'),
            timerBar: document.getElementById('timer-bar'),
            questionText: document.getElementById('question-text'),
            answerOptions: document.getElementById('answer-options'),
            skillButtons: document.getElementById('skill-buttons'),
            comboDisplay: document.getElementById('combo-display'),
            comboCount: document.getElementById('combo-count'),

            // 结果
            resultTitle: document.getElementById('result-title'),
            resultCharacter: document.getElementById('result-character'),
            rewardList: document.getElementById('reward-list'),
            expGained: document.getElementById('exp-gained'),
            levelUpNotice: document.getElementById('level-up-notice'),
            newLevel: document.getElementById('new-level'),
            dropItems: document.getElementById('drop-items'),
            dropList: document.getElementById('drop-list'),
            backToLevels: document.getElementById('back-to-levels'),
            nextLevel: document.getElementById('next-level'),

            // 成就
            backFromAchievement: document.getElementById('back-from-achievement'),
            achievementGrid: document.getElementById('achievement-grid'),

            // 背包
            backFromInventory: document.getElementById('back-from-inventory'),
            inventoryGrid: document.getElementById('inventory-grid'),

            // 排行榜
            backFromLeaderboard: document.getElementById('back-from-leaderboard'),
            leaderboardList: document.getElementById('leaderboard-list'),

            // 通知
            notification: document.getElementById('notification')
        };
    }

    /**
     * 绑定事件
     */
    bindEvents() {
        // 登录
        this.elements.startBtn.addEventListener('click', () => this.handleLogin());
        this.elements.nicknameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleLogin();
        });

        // 书籍选择
        this.elements.bookCards.forEach(card => {
            card.addEventListener('click', () => {
                const bookId = card.dataset.book;
                this.selectBook(bookId);
            });
        });

        // 菜单按钮
        this.elements.dailyBtn.addEventListener('click', () => this.showDailyChallenge());
        this.elements.achievementBtn.addEventListener('click', () => this.showScreen('achievement'));
        this.elements.inventoryBtn.addEventListener('click', () => this.showScreen('inventory'));
        this.elements.leaderboardBtn.addEventListener('click', () => this.showScreen('leaderboard'));

        // 每日签到
        this.elements.claimDailyBtn.addEventListener('click', () => this.claimDailyReward());

        // 返回按钮
        this.elements.backToMenu.addEventListener('click', () => this.showScreen('mainMenu'));
        this.elements.backFromAchievement.addEventListener('click', () => this.showScreen('mainMenu'));
        this.elements.backFromInventory.addEventListener('click', () => this.showScreen('mainMenu'));
        this.elements.backFromLeaderboard.addEventListener('click', () => this.showScreen('mainMenu'));

        // 结果界面
        this.elements.backToLevels.addEventListener('click', () => this.showScreen('levelSelect'));
        this.elements.nextLevel.addEventListener('click', () => this.startNextLevel());

        // 背包标签
        document.querySelectorAll('.inventory-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchInventoryTab(btn.dataset.tab));
        });

        // 排行榜标签
        document.querySelectorAll('.leaderboard-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchLeaderboardTab(btn.dataset.tab));
        });
    }

    /**
     * 开始加载
     */
    startLoading() {
        const loadingProgress = document.querySelector('.loading-progress');
        loadingProgress.classList.add('animate');

        setTimeout(() => {
            this.checkExistingPlayer();
        }, 2000);
    }

    /**
     * 检查现有玩家
     */
    checkExistingPlayer() {
        const savedPlayer = Character.load();

        if (savedPlayer) {
            this.player = savedPlayer;
            this.rewardSystem = new RewardSystem(this.player);
            this.showScreen('mainMenu');
            this.updatePlayerUI();
            this.checkDailyLogin();
        } else {
            this.showScreen('login');
        }
    }

    /**
     * 处理登录
     */
    handleLogin() {
        const nickname = this.elements.nicknameInput.value.trim();

        if (nickname.length < 2) {
            this.showNotification('名号至少需要2个字符', 'error');
            return;
        }

        // 创建新角色
        this.player = new Character();
        this.player.name = nickname;
        this.player.save();

        this.rewardSystem = new RewardSystem(this.player);

        this.showScreen('mainMenu');
        this.updatePlayerUI();
        this.showDailyLoginPopup(1);
    }

    /**
     * 显示屏幕
     */
    showScreen(screenName) {
        // 隐藏所有屏幕
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });

        // 显示目标屏幕
        this.screens[screenName].classList.add('active');
        this.currentScreen = screenName;

        // 更新屏幕内容
        switch (screenName) {
            case 'mainMenu':
                this.updatePlayerUI();
                this.updateBookProgress();
                break;
            case 'levelSelect':
                this.renderLevelMap();
                break;
            case 'achievement':
                this.renderAchievements();
                break;
            case 'inventory':
                this.renderInventory();
                break;
            case 'leaderboard':
                this.renderLeaderboard();
                break;
        }
    }

    /**
     * 更新玩家UI
     */
    updatePlayerUI() {
        if (!this.player) return;

        const book = this.currentBook ? getBook(this.currentBook) : null;

        this.elements.playerAvatar.textContent = book ? book.character.avatar : '📚';
        this.elements.playerTitle.textContent = this.player.title;
        this.elements.playerName.textContent = this.player.name;
        this.elements.playerLevel.textContent = `Lv.${this.player.level}`;

        const expPercentage = (this.player.exp / this.player.expToNextLevel) * 100;
        this.elements.expProgress.style.width = `${expPercentage}%`;
        this.elements.expText.textContent = `${this.player.exp}/${this.player.expToNextLevel}`;

        this.elements.wisdomCount.textContent = this.player.wisdom;
        this.elements.goldCount.textContent = this.player.gold;
    }

    /**
     * 更新书籍进度
     */
    updateBookProgress() {
        this.elements.bookCards.forEach(card => {
            const bookId = card.dataset.book;
            const progress = this.player.bookProgress[bookId] || 0;
            const progressFill = card.querySelector('.progress-fill');
            const progressText = card.querySelector('.progress-text');

            progressFill.style.width = `${progress * 10}%`;
            progressText.textContent = `${progress}/10关`;
        });
    }

    /**
     * 选择书籍
     */
    selectBook(bookId) {
        this.currentBook = bookId;
        this.player.currentBook = bookId;

        const book = getBook(bookId);
        this.elements.currentBookTitle.textContent = book.name;
        this.elements.bookProgressText.textContent = `进度: ${this.player.bookProgress[bookId] || 0}/10`;

        this.showScreen('levelSelect');
    }

    /**
     * 渲染关卡地图
     */
    renderLevelMap() {
        const book = getBook(this.currentBook);
        const progress = this.player.bookProgress[this.currentBook] || 0;

        this.elements.levelMap.innerHTML = '';

        book.levels.forEach((level, index) => {
            const node = document.createElement('div');
            node.className = 'level-node';

            const isCompleted = level.id <= progress;
            const isCurrent = level.id === progress + 1;
            const isLocked = level.id > progress + 1;

            let statusClass = isCompleted ? 'completed' : (isCurrent ? 'current' : 'locked');

            node.innerHTML = `
                <div class="level-circle ${statusClass}" data-level="${level.id}">
                    ${isCompleted ? '✓' : level.id}
                </div>
                <div class="level-info-box">
                    <h4>${level.name}</h4>
                    <p>${level.subtitle}</p>
                    ${level.bossLevel ? '<span class="boss-tag">BOSS</span>' : ''}
                    <div class="level-stars">
                        ${isCompleted ? '⭐⭐⭐' : '☆☆☆'}
                    </div>
                </div>
            `;

            // 点击事件
            const circle = node.querySelector('.level-circle');
            if (!isLocked) {
                circle.addEventListener('click', () => this.startLevel(level.id));
            }

            this.elements.levelMap.appendChild(node);

            // 添加动画类
            setTimeout(() => {
                node.classList.add('show');
            }, index * 100);
        });
    }

    /**
     * 开始关卡
     */
    startLevel(levelId) {
        this.currentLevel = levelId;
        const book = getBook(this.currentBook);
        const level = book.levels.find(l => l.id === levelId);

        // 获取题目
        const questions = getRandomQuestions(this.currentBook, levelId, level.questionsCount);

        if (questions.length === 0) {
            this.showNotification('题目加载失败', 'error');
            return;
        }

        // 获取敌人
        const enemy = getEnemyForLevel(this.currentBook, levelId, level.bossLevel);
        const scaledEnemy = scaleEnemyByLevel(enemy, this.player.level);

        // 恢复玩家生命
        this.player.fullHeal();

        // 创建战斗
        this.battle = new Battle(this.player, scaledEnemy, questions, this.currentBook);

        // 设置回调
        this.battle.onQuestionUpdate = (question) => this.updateQuestion(question);
        this.battle.onDamageDealt = (damage, combo) => this.showDamage('enemy', damage, combo);
        this.battle.onPlayerDamage = (damage) => this.showDamage('player', damage);
        this.battle.onComboUpdate = (combo) => this.updateCombo(combo);
        this.battle.onBattleEnd = (result, rewards) => this.handleBattleEnd(result, rewards);
        this.battle.onTimerUpdate = (remaining, total) => this.updateTimer(remaining, total);

        // 更新战斗UI
        this.updateBattleUI(level, scaledEnemy);

        // 显示战斗屏幕
        this.showScreen('battle');

        // 开始战斗
        setTimeout(() => {
            this.battle.start();
        }, 500);
    }

    /**
     * 更新战斗UI
     */
    updateBattleUI(level, enemy) {
        const book = getBook(this.currentBook);

        this.elements.stageName.textContent = `第${level.id}关`;
        this.elements.stageSubtitle.textContent = level.name;

        this.elements.battlePlayerName.textContent = book.character.name;
        this.elements.playerSprite.textContent = book.character.avatar;
        this.updateHpBar('player');

        this.elements.battleEnemyName.textContent = enemy.name;
        this.elements.enemySprite.textContent = enemy.avatar;
        this.updateHpBar('enemy');

        // 渲染技能按钮
        this.renderSkillButtons();
    }

    /**
     * 渲染技能按钮
     */
    renderSkillButtons() {
        const book = getBook(this.currentBook);

        this.elements.skillButtons.innerHTML = '';

        book.skills.forEach(skill => {
            const btn = document.createElement('button');
            btn.className = 'skill-btn';
            btn.dataset.skillId = skill.id;

            const cooldown = this.player.skillCooldowns[skill.id] || 0;
            btn.disabled = cooldown > 0;

            btn.innerHTML = `
                <span>${skill.name}</span>
                ${cooldown > 0 ? `<span class="skill-cooldown">(${cooldown})</span>` : ''}
            `;

            btn.title = skill.description;

            btn.addEventListener('click', () => this.useSkill(skill.id));

            this.elements.skillButtons.appendChild(btn);
        });
    }

    /**
     * 使用技能
     */
    useSkill(skillId) {
        if (!this.battle) return;

        const result = this.battle.useSkill(skillId);

        if (result.success) {
            this.showNotification(result.message, 'success');

            // 更新UI
            this.updateHpBar('player');
            this.updateHpBar('enemy');
            this.renderSkillButtons();

            // 技能特效
            if (result.effect?.type === 'damage') {
                this.showDamage('enemy', result.effect.value);
            } else if (result.effect?.type === 'heal') {
                this.showDamage('player', result.effect.value, 0, true);
            }
        } else {
            this.showNotification(result.message, 'error');
        }
    }

    /**
     * 更新问题
     */
    updateQuestion(question) {
        this.elements.questionText.textContent = question.question;

        // 清空选项
        this.elements.answerOptions.innerHTML = '';

        // 创建选项按钮
        const labels = ['A', 'B', 'C', 'D'];
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.textContent = `${labels[index]}. ${option}`;
            btn.dataset.index = index;

            btn.addEventListener('click', () => this.handleAnswerClick(index));

            this.elements.answerOptions.appendChild(btn);

            // 添加入场动画
            setTimeout(() => {
                btn.classList.add('show');
            }, index * 50);
        });
    }

    /**
     * 处理答案点击
     */
    handleAnswerClick(selectedIndex) {
        if (!this.battle || this.battle.isFinished) return;

        // 禁用所有按钮
        const buttons = this.elements.answerOptions.querySelectorAll('.answer-btn');
        buttons.forEach(btn => btn.disabled = true);

        // 处理答案
        const result = this.battle.handleAnswer(selectedIndex);

        // 显示正确/错误
        buttons.forEach((btn, index) => {
            if (index === result.correctIndex) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !result.isCorrect) {
                btn.classList.add('wrong');
            }
        });

        // 更新HP条
        this.updateHpBar('player');
        this.updateHpBar('enemy');

        // 更新技能冷却
        this.battle.reduceSkillCooldowns();
        this.renderSkillButtons();
    }

    /**
     * 更新HP条
     */
    updateHpBar(target) {
        if (target === 'player') {
            const percentage = (this.player.currentHp / this.player.maxHp) * 100;
            this.elements.playerHpFill.style.width = `${percentage}%`;
            this.elements.playerHpText.textContent = `${this.player.currentHp}/${this.player.maxHp}`;
        } else if (target === 'enemy' && this.battle) {
            const percentage = (this.battle.enemy.currentHp / this.battle.enemy.hp) * 100;
            this.elements.enemyHpFill.style.width = `${percentage}%`;
            this.elements.enemyHpText.textContent = `${this.battle.enemy.currentHp}/${this.battle.enemy.hp}`;
        }
    }

    /**
     * 更新计时器
     */
    updateTimer(remaining, total) {
        const percentage = (remaining / total) * 100;
        this.elements.timerBar.style.width = `${percentage}%`;

        // 紧急状态
        if (remaining <= 5) {
            this.elements.timerBar.parentElement.classList.add('timer-urgent');
        } else {
            this.elements.timerBar.parentElement.classList.remove('timer-urgent');
        }
    }

    /**
     * 显示伤害数字
     */
    showDamage(target, amount, combo = 0, isHeal = false) {
        const element = target === 'player' ? this.elements.playerDamage : this.elements.enemyDamage;
        const sprite = target === 'player' ? this.elements.playerSprite : this.elements.enemySprite;

        element.textContent = isHeal ? `+${amount}` : `-${amount}`;
        element.className = 'damage-number damage-show';

        if (isHeal) {
            element.classList.add('heal');
        } else if (combo >= 5) {
            element.classList.add('critical');
        }

        // 抖动效果
        if (!isHeal) {
            sprite.classList.add('animate-shake');
            setTimeout(() => sprite.classList.remove('animate-shake'), 400);
        }

        // 重置动画
        setTimeout(() => {
            element.className = 'damage-number';
        }, 1000);
    }

    /**
     * 更新连击显示
     */
    updateCombo(combo) {
        if (combo >= 2) {
            this.elements.comboCount.textContent = combo;
            this.elements.comboDisplay.classList.remove('hidden');
            this.elements.comboDisplay.classList.add('animate-combo');

            setTimeout(() => {
                this.elements.comboDisplay.classList.remove('animate-combo');
            }, 500);

            setTimeout(() => {
                this.elements.comboDisplay.classList.add('hidden');
            }, 1500);
        } else {
            this.elements.comboDisplay.classList.add('hidden');
        }
    }

    /**
     * 处理战斗结束
     */
    handleBattleEnd(result, rewards) {
        setTimeout(() => {
            if (result === 'victory') {
                this.showVictory(rewards);
            } else {
                this.showDefeat();
            }
        }, 1000);
    }

    /**
     * 显示胜利界面
     */
    showVictory(rewards) {
        const book = getBook(this.currentBook);

        // 更新进度
        this.player.updateBookProgress(this.currentBook, this.currentLevel);

        // 应用奖励
        const levelUps = this.battle.applyRewards();

        // 保存
        this.player.save();

        // 更新排行榜
        Storage.updateLeaderboard(this.player);

        // 检查成就
        const newAchievements = this.rewardSystem.checkAllAchievements();
        this.player.save();

        // 显示结果
        this.elements.resultTitle.textContent = '胜利!';
        this.elements.resultTitle.className = 'result-title victory';
        this.elements.resultCharacter.textContent = book.character.avatar;
        this.elements.resultCharacter.classList.add('animate-victory');

        // 显示奖励
        this.elements.rewardList.innerHTML = `
            <div class="reward-item show">
                <span class="reward-icon">🪙</span>
                <span class="reward-value">+${rewards.gold}</span>
            </div>
            <div class="reward-item show">
                <span class="reward-icon">💡</span>
                <span class="reward-value">+${rewards.wisdom}</span>
            </div>
        `;

        this.elements.expGained.textContent = rewards.exp;

        // 升级提示
        if (levelUps.length > 0) {
            this.elements.levelUpNotice.classList.remove('hidden');
            this.elements.newLevel.textContent = `Lv.${this.player.level}`;
        } else {
            this.elements.levelUpNotice.classList.add('hidden');
        }

        // 掉落物品
        if (rewards.items.length > 0) {
            this.elements.dropItems.classList.remove('hidden');
            this.elements.dropList.innerHTML = rewards.items.map(item => `
                <div class="drop-item ${item.rarity} animate-drop">
                    <span>${item.icon}</span>
                    <span>${item.name}</span>
                </div>
            `).join('');
        } else {
            this.elements.dropItems.classList.add('hidden');
        }

        // 下一关按钮
        const hasNextLevel = this.currentLevel < 10;
        this.elements.nextLevel.style.display = hasNextLevel ? 'block' : 'none';

        this.showScreen('result');

        // 显示新成就通知
        newAchievements.forEach((achievement, index) => {
            setTimeout(() => {
                this.showNotification(`成就解锁: ${achievement.name}`, 'success');
            }, 1000 + index * 1500);
        });
    }

    /**
     * 显示失败界面
     */
    showDefeat() {
        const book = getBook(this.currentBook);

        this.player.save();

        this.elements.resultTitle.textContent = '失败...';
        this.elements.resultTitle.className = 'result-title defeat';
        this.elements.resultCharacter.textContent = book.character.avatar;
        this.elements.resultCharacter.classList.remove('animate-victory');
        this.elements.resultCharacter.classList.add('animate-defeat');

        this.elements.rewardList.innerHTML = '<p>再接再厉!</p>';
        this.elements.expGained.textContent = '0';
        this.elements.levelUpNotice.classList.add('hidden');
        this.elements.dropItems.classList.add('hidden');
        this.elements.nextLevel.style.display = 'none';

        this.showScreen('result');
    }

    /**
     * 开始下一关
     */
    startNextLevel() {
        this.startLevel(this.currentLevel + 1);
    }

    /**
     * 检查每日签到
     */
    checkDailyLogin() {
        if (!Storage.checkDailyLogin()) {
            const daily = Storage.recordDailyLogin();
            this.showDailyLoginPopup(daily.loginStreak);
        }
    }

    /**
     * 显示每日签到弹窗
     */
    showDailyLoginPopup(streakDays) {
        this.elements.streakDays.textContent = streakDays;
        this.elements.streakDays.classList.add('animate');

        const reward = this.rewardSystem.getDailyLoginReward(streakDays);
        this.elements.dailyRewardItems.innerHTML = `
            <div class="reward-item">
                <span class="reward-icon">🪙</span>
                <span class="reward-value">${reward.gold}</span>
            </div>
            <div class="reward-item">
                <span class="reward-icon">✨</span>
                <span class="reward-value">${reward.exp} EXP</span>
            </div>
        `;

        this.elements.dailyLoginPopup.classList.remove('hidden');

        // 存储奖励供领取
        this.pendingDailyReward = reward;
    }

    /**
     * 领取每日奖励
     */
    claimDailyReward() {
        if (this.pendingDailyReward) {
            this.rewardSystem.applyDailyLoginReward(this.pendingDailyReward);
            this.player.save();
            this.updatePlayerUI();
            this.pendingDailyReward = null;
        }

        this.elements.dailyLoginPopup.classList.add('hidden');
        this.showNotification('签到奖励已领取!', 'success');
    }

    /**
     * 显示每日挑战
     */
    showDailyChallenge() {
        this.showNotification('每日挑战功能开发中...', 'info');
    }

    /**
     * 渲染成就界面
     */
    renderAchievements() {
        const achievements = getVisibleAchievements();

        this.elements.achievementGrid.innerHTML = '';

        achievements.forEach((achievement, index) => {
            const isUnlocked = this.player.hasAchievement(achievement.id);

            const card = document.createElement('div');
            card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-info">
                    <h4>${achievement.name}</h4>
                    <p>${achievement.description}</p>
                </div>
            `;

            this.elements.achievementGrid.appendChild(card);

            setTimeout(() => {
                card.classList.add('show');
            }, index * 50);
        });
    }

    /**
     * 渲染背包界面
     */
    renderInventory() {
        // 渲染装备槽
        ['weapon', 'armor', 'accessory'].forEach(slot => {
            const slotElement = document.getElementById(`equipped-${slot}`);
            const itemId = this.player.equipment[slot];

            if (itemId) {
                const item = getItemById(itemId);
                slotElement.innerHTML = `<span title="${item.name}">${item.icon}</span>`;
                slotElement.classList.add('equipped');
                slotElement.style.borderColor = getRarityColor(item.rarity);
            } else {
                slotElement.innerHTML = '';
                slotElement.classList.remove('equipped');
                slotElement.style.borderColor = '';
            }
        });

        // 渲染背包物品
        this.elements.inventoryGrid.innerHTML = '';

        this.player.inventory.forEach(itemId => {
            const item = getItemById(itemId);
            if (!item) return;

            const itemElement = document.createElement('div');
            itemElement.className = 'inventory-item';
            itemElement.innerHTML = `<span>${item.icon}</span>`;
            itemElement.style.borderColor = getRarityColor(item.rarity);
            itemElement.title = `${item.name}\n${item.description}`;

            itemElement.addEventListener('click', () => this.handleInventoryItemClick(itemId));

            this.elements.inventoryGrid.appendChild(itemElement);
        });
    }

    /**
     * 处理背包物品点击
     */
    handleInventoryItemClick(itemId) {
        const item = getItemById(itemId);

        if (item.type === 'consumable') {
            const effect = this.player.useConsumable(itemId);
            if (effect) {
                if (effect.type === 'heal') {
                    this.player.heal(effect.value);
                } else if (effect.type === 'exp') {
                    this.player.addExp(effect.value);
                }
                this.player.save();
                this.showNotification(`使用了 ${item.name}`, 'success');
                this.renderInventory();
                this.updatePlayerUI();
            }
        } else {
            // 装备物品
            if (this.player.equipItem(itemId)) {
                this.player.save();
                this.showNotification(`装备了 ${item.name}`, 'success');
                this.renderInventory();
                this.updatePlayerUI();
            }
        }
    }

    /**
     * 切换背包标签
     */
    switchInventoryTab(tab) {
        document.querySelectorAll('.inventory-tabs .tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });
        // 实现不同标签的物品过滤...
    }

    /**
     * 渲染排行榜
     */
    renderLeaderboard() {
        const leaderboard = Storage.loadLeaderboard();

        this.elements.leaderboardList.innerHTML = '';

        if (leaderboard.length === 0) {
            this.elements.leaderboardList.innerHTML = '<p class="text-center">暂无数据</p>';
            return;
        }

        leaderboard.forEach((entry, index) => {
            const item = document.createElement('div');
            item.className = 'leaderboard-item';
            item.innerHTML = `
                <div class="rank-number">${index + 1}</div>
                <div class="player-rank-info">
                    <h4>${entry.name}</h4>
                    <span>Lv.${entry.level}</span>
                </div>
                <div class="rank-value">${entry.wisdom} 智慧</div>
            `;

            this.elements.leaderboardList.appendChild(item);
        });
    }

    /**
     * 切换排行榜标签
     */
    switchLeaderboardTab(tab) {
        document.querySelectorAll('.leaderboard-tabs .tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });
        this.renderLeaderboard();
    }

    /**
     * 显示通知
     */
    showNotification(message, type = 'info') {
        const notification = this.elements.notification;
        notification.querySelector('.notification-text').textContent = message;
        notification.className = `notification ${type}`;

        notification.classList.remove('hidden');

        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }
}

// 导出
window.GameEngine = GameEngine;
