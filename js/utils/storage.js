/**
 * 本地存储管理模块
 */
const Storage = {
    // 存储键名
    KEYS: {
        PLAYER: 'wisdom_game_player',
        SETTINGS: 'wisdom_game_settings',
        ACHIEVEMENTS: 'wisdom_game_achievements',
        DAILY: 'wisdom_game_daily',
        LEADERBOARD: 'wisdom_game_leaderboard'
    },

    /**
     * 保存数据
     */
    save(key, data) {
        try {
            const serialized = JSON.stringify(data);
            localStorage.setItem(key, serialized);
            return true;
        } catch (error) {
            console.error('保存数据失败:', error);
            return false;
        }
    },

    /**
     * 读取数据
     */
    load(key) {
        try {
            const serialized = localStorage.getItem(key);
            if (serialized === null) return null;
            return JSON.parse(serialized);
        } catch (error) {
            console.error('读取数据失败:', error);
            return null;
        }
    },

    /**
     * 删除数据
     */
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('删除数据失败:', error);
            return false;
        }
    },

    /**
     * 清空所有游戏数据
     */
    clearAll() {
        Object.values(this.KEYS).forEach(key => {
            this.remove(key);
        });
    },

    /**
     * 保存玩家数据
     */
    savePlayer(playerData) {
        return this.save(this.KEYS.PLAYER, playerData);
    },

    /**
     * 读取玩家数据
     */
    loadPlayer() {
        return this.load(this.KEYS.PLAYER);
    },

    /**
     * 保存成就数据
     */
    saveAchievements(achievements) {
        return this.save(this.KEYS.ACHIEVEMENTS, achievements);
    },

    /**
     * 读取成就数据
     */
    loadAchievements() {
        return this.load(this.KEYS.ACHIEVEMENTS) || [];
    },

    /**
     * 保存每日数据
     */
    saveDaily(dailyData) {
        return this.save(this.KEYS.DAILY, dailyData);
    },

    /**
     * 读取每日数据
     */
    loadDaily() {
        return this.load(this.KEYS.DAILY);
    },

    /**
     * 保存排行榜
     */
    saveLeaderboard(leaderboard) {
        return this.save(this.KEYS.LEADERBOARD, leaderboard);
    },

    /**
     * 读取排行榜
     */
    loadLeaderboard() {
        return this.load(this.KEYS.LEADERBOARD) || [];
    },

    /**
     * 更新排行榜
     */
    updateLeaderboard(player) {
        const leaderboard = this.loadLeaderboard();
        const existingIndex = leaderboard.findIndex(p => p.name === player.name);

        const entry = {
            name: player.name,
            level: player.level,
            wisdom: player.stats.totalWisdom,
            timestamp: Date.now()
        };

        if (existingIndex >= 0) {
            leaderboard[existingIndex] = entry;
        } else {
            leaderboard.push(entry);
        }

        // 按等级排序，取前20名
        leaderboard.sort((a, b) => b.level - a.level);
        const topLeaderboard = leaderboard.slice(0, 20);

        this.saveLeaderboard(topLeaderboard);
        return topLeaderboard;
    },

    /**
     * 检查今日是否已签到
     */
    checkDailyLogin() {
        const daily = this.loadDaily();
        if (!daily) return false;

        const today = new Date().toDateString();
        return daily.lastLoginDate === today;
    },

    /**
     * 记录每日签到
     */
    recordDailyLogin() {
        const daily = this.loadDaily() || {
            loginStreak: 0,
            lastLoginDate: null,
            dailyChallengeCompleted: false
        };

        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        if (daily.lastLoginDate === yesterday) {
            // 连续签到
            daily.loginStreak += 1;
        } else if (daily.lastLoginDate !== today) {
            // 断签
            daily.loginStreak = 1;
        }

        daily.lastLoginDate = today;
        daily.dailyChallengeCompleted = false;

        this.saveDaily(daily);
        return daily;
    }
};

// 导出
window.Storage = Storage;
