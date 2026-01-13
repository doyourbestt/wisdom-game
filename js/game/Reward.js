/**
 * 奖励和成就系统
 */
class RewardSystem {
    constructor(player) {
        this.player = player;
        this.pendingRewards = [];
        this.newAchievements = [];
    }

    /**
     * 检查所有成就
     */
    checkAllAchievements() {
        this.newAchievements = [];
        const allAchievements = getAllAchievements();

        allAchievements.forEach(achievement => {
            if (!this.player.hasAchievement(achievement.id)) {
                if (checkAchievement(achievement, this.player.stats)) {
                    this.unlockAchievement(achievement);
                }
            }
        });

        return this.newAchievements;
    }

    /**
     * 解锁成就
     */
    unlockAchievement(achievement) {
        if (this.player.unlockAchievement(achievement.id)) {
            // 发放奖励
            if (achievement.reward.gold) {
                this.player.addGold(achievement.reward.gold);
            }
            if (achievement.reward.exp) {
                this.player.addExp(achievement.reward.exp);
            }

            this.newAchievements.push(achievement);
        }
    }

    /**
     * 获取每日签到奖励
     */
    getDailyLoginReward(streakDays) {
        const baseGold = 50;
        const baseExp = 20;

        // 连续签到加成
        const multiplier = Math.min(streakDays, 7); // 最多7倍

        return {
            gold: baseGold * multiplier,
            exp: baseExp * multiplier,
            streak: streakDays
        };
    }

    /**
     * 应用每日签到奖励
     */
    applyDailyLoginReward(reward) {
        this.player.addGold(reward.gold);
        this.player.addExp(reward.exp);

        // 更新最大签到天数
        if (reward.streak > this.player.stats.maxLoginStreak) {
            this.player.stats.maxLoginStreak = reward.streak;
        }
    }

    /**
     * 获取关卡首次通关奖励
     */
    getFirstClearReward(bookId, levelId) {
        const book = getBook(bookId);
        const level = book.levels.find(l => l.id === levelId);

        let reward = {
            gold: 100 * levelId,
            exp: 50 * levelId,
            wisdom: 20 * levelId
        };

        // BOSS关额外奖励
        if (level.bossLevel) {
            reward.gold *= 2;
            reward.exp *= 2;
            reward.wisdom *= 2;
        }

        return reward;
    }

    /**
     * 计算每日挑战奖励
     */
    getDailyChallengeReward(score, maxScore) {
        const percentage = score / maxScore;

        let reward = {
            gold: Math.floor(200 * percentage),
            exp: Math.floor(100 * percentage),
            wisdom: Math.floor(50 * percentage)
        };

        // 满分额外奖励
        if (percentage === 1) {
            reward.gold += 100;
            reward.exp += 50;
        }

        return reward;
    }

    /**
     * 获取成就进度
     */
    getAchievementProgress() {
        const all = getAllAchievements();
        const unlocked = this.player.unlockedAchievements.length;
        const total = all.length;

        return {
            unlocked,
            total,
            percentage: Math.floor((unlocked / total) * 100)
        };
    }

    /**
     * 获取书籍完成奖励
     */
    getBookCompletionReward(bookId) {
        return {
            gold: 2000,
            exp: 1000,
            wisdom: 500,
            title: this.getBookTitle(bookId)
        };
    }

    /**
     * 获取书籍称号
     */
    getBookTitle(bookId) {
        const titles = {
            chuanxilu: '心学传人',
            maoxuan: '革命先锋',
            zizhitongjian: '通鉴学者'
        };
        return titles[bookId] || '博学之士';
    }

    /**
     * 生成随机每日挑战题目
     */
    generateDailyChallenge() {
        const bookIds = ['chuanxilu', 'maoxuan', 'zizhitongjian'];
        const questions = [];

        // 从每本书随机抽取3题
        bookIds.forEach(bookId => {
            const bookQuestions = getQuestionsByBook(bookId);
            const shuffled = shuffleArray(bookQuestions);
            questions.push(...shuffled.slice(0, 3));
        });

        // 打乱顺序
        return shuffleArray(questions);
    }
}

// 导出
window.RewardSystem = RewardSystem;
