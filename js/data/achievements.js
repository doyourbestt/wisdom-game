/**
 * 成就系统数据
 */
const ACHIEVEMENTS_DATA = [
    // 入门成就
    {
        id: 'first_blood',
        name: '初战告捷',
        description: '完成第一场战斗',
        icon: '⚔️',
        condition: { type: 'battles', value: 1 },
        reward: { gold: 50, exp: 20 }
    },
    {
        id: 'first_victory',
        name: '首战功成',
        description: '赢得第一场胜利',
        icon: '🏆',
        condition: { type: 'wins', value: 1 },
        reward: { gold: 100, exp: 50 }
    },
    {
        id: 'first_level',
        name: '修行起步',
        description: '完成任意书籍的第一关',
        icon: '📖',
        condition: { type: 'levels_completed', value: 1 },
        reward: { gold: 80, exp: 30 }
    },

    // 战斗成就
    {
        id: 'warrior_10',
        name: '小试牛刀',
        description: '累计完成10场战斗',
        icon: '🗡️',
        condition: { type: 'battles', value: 10 },
        reward: { gold: 200, exp: 100 }
    },
    {
        id: 'warrior_50',
        name: '身经百战',
        description: '累计完成50场战斗',
        icon: '⚔️',
        condition: { type: 'battles', value: 50 },
        reward: { gold: 500, exp: 250 }
    },
    {
        id: 'warrior_100',
        name: '战神',
        description: '累计完成100场战斗',
        icon: '🛡️',
        condition: { type: 'battles', value: 100 },
        reward: { gold: 1000, exp: 500 }
    },

    // 连胜成就
    {
        id: 'streak_3',
        name: '三连胜',
        description: '连续赢得3场战斗',
        icon: '🔥',
        condition: { type: 'win_streak', value: 3 },
        reward: { gold: 150, exp: 80 }
    },
    {
        id: 'streak_5',
        name: '五连胜',
        description: '连续赢得5场战斗',
        icon: '💫',
        condition: { type: 'win_streak', value: 5 },
        reward: { gold: 300, exp: 150 }
    },
    {
        id: 'streak_10',
        name: '十连胜',
        description: '连续赢得10场战斗',
        icon: '⭐',
        condition: { type: 'win_streak', value: 10 },
        reward: { gold: 800, exp: 400 }
    },

    // 连击成就
    {
        id: 'combo_3',
        name: '连击手',
        description: '单场战斗达成3连击',
        icon: '👊',
        condition: { type: 'combo', value: 3 },
        reward: { gold: 100, exp: 50 }
    },
    {
        id: 'combo_5',
        name: '连击大师',
        description: '单场战斗达成5连击',
        icon: '💪',
        condition: { type: 'combo', value: 5 },
        reward: { gold: 250, exp: 120 }
    },
    {
        id: 'combo_10',
        name: '完美连击',
        description: '单场战斗达成10连击',
        icon: '🌟',
        condition: { type: 'combo', value: 10 },
        reward: { gold: 600, exp: 300 }
    },

    // 答题成就
    {
        id: 'correct_50',
        name: '小有所成',
        description: '累计答对50道题',
        icon: '📝',
        condition: { type: 'correct_answers', value: 50 },
        reward: { gold: 300, exp: 150 }
    },
    {
        id: 'correct_200',
        name: '学富五车',
        description: '累计答对200道题',
        icon: '📚',
        condition: { type: 'correct_answers', value: 200 },
        reward: { gold: 800, exp: 400 }
    },
    {
        id: 'correct_500',
        name: '博学多才',
        description: '累计答对500道题',
        icon: '🎓',
        condition: { type: 'correct_answers', value: 500 },
        reward: { gold: 2000, exp: 1000 }
    },

    // 等级成就
    {
        id: 'level_5',
        name: '崭露头角',
        description: '达到5级',
        icon: '🌱',
        condition: { type: 'player_level', value: 5 },
        reward: { gold: 200, exp: 0 }
    },
    {
        id: 'level_10',
        name: '小有名气',
        description: '达到10级',
        icon: '🌿',
        condition: { type: 'player_level', value: 10 },
        reward: { gold: 500, exp: 0 }
    },
    {
        id: 'level_20',
        name: '名扬四海',
        description: '达到20级',
        icon: '🌳',
        condition: { type: 'player_level', value: 20 },
        reward: { gold: 1000, exp: 0 }
    },
    {
        id: 'level_50',
        name: '一代宗师',
        description: '达到50级',
        icon: '🏔️',
        condition: { type: 'player_level', value: 50 },
        reward: { gold: 5000, exp: 0 }
    },

    // 书籍成就 - 传习录
    {
        id: 'chuanxilu_half',
        name: '初窥心学',
        description: '完成传习录前5关',
        icon: '🧘',
        condition: { type: 'book_progress', book: 'chuanxilu', value: 5 },
        reward: { gold: 400, exp: 200 }
    },
    {
        id: 'chuanxilu_complete',
        name: '心学大成',
        description: '通关传习录全部关卡',
        icon: '💎',
        condition: { type: 'book_progress', book: 'chuanxilu', value: 10 },
        reward: { gold: 1500, exp: 750 }
    },

    // 书籍成就 - 毛泽东选集
    {
        id: 'maoxuan_half',
        name: '革命火种',
        description: '完成毛泽东选集前5关',
        icon: '⭐',
        condition: { type: 'book_progress', book: 'maoxuan', value: 5 },
        reward: { gold: 400, exp: 200 }
    },
    {
        id: 'maoxuan_complete',
        name: '革命胜利',
        description: '通关毛泽东选集全部关卡',
        icon: '🚩',
        condition: { type: 'book_progress', book: 'maoxuan', value: 10 },
        reward: { gold: 1500, exp: 750 }
    },

    // 书籍成就 - 资治通鉴
    {
        id: 'zizhitongjian_half',
        name: '读史明智',
        description: '完成资治通鉴前5关',
        icon: '📜',
        condition: { type: 'book_progress', book: 'zizhitongjian', value: 5 },
        reward: { gold: 400, exp: 200 }
    },
    {
        id: 'zizhitongjian_complete',
        name: '通古博今',
        description: '通关资治通鉴全部关卡',
        icon: '🏛️',
        condition: { type: 'book_progress', book: 'zizhitongjian', value: 10 },
        reward: { gold: 1500, exp: 750 }
    },

    // 终极成就
    {
        id: 'all_books_complete',
        name: '博古通今',
        description: '通关所有书籍',
        icon: '👑',
        condition: { type: 'all_books_complete', value: 3 },
        reward: { gold: 5000, exp: 2500 }
    },

    // BOSS成就
    {
        id: 'boss_killer_1',
        name: '初次斩将',
        description: '击败第一个BOSS',
        icon: '🐉',
        condition: { type: 'boss_kills', value: 1 },
        reward: { gold: 300, exp: 150 }
    },
    {
        id: 'boss_killer_5',
        name: '斩将夺旗',
        description: '击败5个BOSS',
        icon: '🗡️',
        condition: { type: 'boss_kills', value: 5 },
        reward: { gold: 1000, exp: 500 }
    },

    // 签到成就
    {
        id: 'login_7',
        name: '持之以恒',
        description: '连续签到7天',
        icon: '📅',
        condition: { type: 'login_streak', value: 7 },
        reward: { gold: 500, exp: 200 }
    },
    {
        id: 'login_30',
        name: '月度坚持',
        description: '连续签到30天',
        icon: '🌙',
        condition: { type: 'login_streak', value: 30 },
        reward: { gold: 2000, exp: 1000 }
    },

    // 智慧成就
    {
        id: 'wisdom_100',
        name: '智者初成',
        description: '累计获得100智慧值',
        icon: '💡',
        condition: { type: 'wisdom', value: 100 },
        reward: { gold: 200, exp: 100 }
    },
    {
        id: 'wisdom_500',
        name: '智慧如海',
        description: '累计获得500智慧值',
        icon: '🌊',
        condition: { type: 'wisdom', value: 500 },
        reward: { gold: 800, exp: 400 }
    },

    // 隐藏成就
    {
        id: 'perfect_battle',
        name: '完美战斗',
        description: '一场战斗中全部答对且未受伤',
        icon: '✨',
        condition: { type: 'perfect_battle', value: 1 },
        reward: { gold: 500, exp: 250 },
        hidden: true
    },
    {
        id: 'speedrun',
        name: '速战速决',
        description: '30秒内完成一场战斗',
        icon: '⚡',
        condition: { type: 'speedrun', value: 30 },
        reward: { gold: 300, exp: 150 },
        hidden: true
    }
];

/**
 * 获取所有成就
 */
function getAllAchievements() {
    return ACHIEVEMENTS_DATA;
}

/**
 * 获取可见成就（非隐藏）
 */
function getVisibleAchievements() {
    return ACHIEVEMENTS_DATA.filter(a => !a.hidden);
}

/**
 * 根据ID获取成就
 */
function getAchievementById(id) {
    return ACHIEVEMENTS_DATA.find(a => a.id === id);
}

/**
 * 检查成就是否达成
 */
function checkAchievement(achievement, playerStats) {
    const { condition } = achievement;

    switch (condition.type) {
        case 'battles':
            return playerStats.totalBattles >= condition.value;
        case 'wins':
            return playerStats.totalWins >= condition.value;
        case 'win_streak':
            return playerStats.maxWinStreak >= condition.value;
        case 'combo':
            return playerStats.maxCombo >= condition.value;
        case 'correct_answers':
            return playerStats.correctAnswers >= condition.value;
        case 'player_level':
            return playerStats.level >= condition.value;
        case 'book_progress':
            return (playerStats.bookProgress[condition.book] || 0) >= condition.value;
        case 'all_books_complete':
            const completedBooks = Object.values(playerStats.bookProgress).filter(p => p >= 10).length;
            return completedBooks >= condition.value;
        case 'boss_kills':
            return playerStats.bossKills >= condition.value;
        case 'login_streak':
            return playerStats.maxLoginStreak >= condition.value;
        case 'wisdom':
            return playerStats.totalWisdom >= condition.value;
        case 'perfect_battle':
            return playerStats.perfectBattles >= condition.value;
        case 'speedrun':
            return playerStats.fastestBattle <= condition.value && playerStats.fastestBattle > 0;
        case 'levels_completed':
            const totalLevels = Object.values(playerStats.bookProgress).reduce((a, b) => a + b, 0);
            return totalLevels >= condition.value;
        default:
            return false;
    }
}

// 导出
window.ACHIEVEMENTS_DATA = ACHIEVEMENTS_DATA;
window.getAllAchievements = getAllAchievements;
window.getVisibleAchievements = getVisibleAchievements;
window.getAchievementById = getAchievementById;
window.checkAchievement = checkAchievement;
