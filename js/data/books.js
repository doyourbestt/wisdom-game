/**
 * 书籍配置数据
 */
const BOOKS_DATA = {
    chuanxilu: {
        id: 'chuanxilu',
        name: '传习录',
        subtitle: '心学修炼之路',
        character: {
            name: '王阳明',
            avatar: '🧘',
            title: '心学宗师',
            description: '明代著名思想家，心学创始人',
            baseStats: {
                hp: 100,
                attack: 10,
                wisdom: 0
            }
        },
        theme: {
            primary: '#8b7355',
            secondary: '#d4b896',
            icon: '🧘'
        },
        skills: [
            {
                id: 'xinxiangli',
                name: '心即理',
                description: '领悟心即是理的真谛，恢复20%生命值',
                cooldown: 3,
                effect: { type: 'heal', value: 0.2 }
            },
            {
                id: 'zhixingheyi',
                name: '知行合一',
                description: '知行合一的力量，下次攻击伤害翻倍',
                cooldown: 4,
                effect: { type: 'buff', value: 2, buffType: 'attack' }
            },
            {
                id: 'zhiliangzhi',
                name: '致良知',
                description: '唤醒良知，消除私欲，对敌人造成额外30点伤害',
                cooldown: 5,
                effect: { type: 'damage', value: 30 }
            }
        ],
        levels: [
            { id: 1, name: '初识心学', subtitle: '踏入求道之路', questionsCount: 3, bossLevel: false },
            { id: 2, name: '格物之惑', subtitle: '七日格竹', questionsCount: 3, bossLevel: false },
            { id: 3, name: '龙场悟道', subtitle: '圣人之道，吾性自足', questionsCount: 4, bossLevel: true },
            { id: 4, name: '知行之辩', subtitle: '知是行之始', questionsCount: 3, bossLevel: false },
            { id: 5, name: '良知之光', subtitle: '致吾心之良知', questionsCount: 4, bossLevel: false },
            { id: 6, name: '破山中贼', subtitle: '平定宁王之乱', questionsCount: 4, bossLevel: true },
            { id: 7, name: '四句教法', subtitle: '无善无恶心之体', questionsCount: 3, bossLevel: false },
            { id: 8, name: '天泉证道', subtitle: '与弟子论道', questionsCount: 4, bossLevel: false },
            { id: 9, name: '心外无物', subtitle: '万物皆备于我', questionsCount: 4, bossLevel: false },
            { id: 10, name: '此心光明', subtitle: '最终领悟', questionsCount: 5, bossLevel: true }
        ]
    },

    maoxuan: {
        id: 'maoxuan',
        name: '毛泽东选集',
        subtitle: '革命解放之路',
        character: {
            name: '革命战士',
            avatar: '⭐',
            title: '人民英雄',
            description: '为人民解放事业奋斗的革命者',
            baseStats: {
                hp: 120,
                attack: 12,
                wisdom: 0
            }
        },
        theme: {
            primary: '#c41e3a',
            secondary: '#ffd700',
            icon: '⭐'
        },
        skills: [
            {
                id: 'qunzhongluxian',
                name: '群众路线',
                description: '依靠人民群众的力量，恢复25%生命值',
                cooldown: 3,
                effect: { type: 'heal', value: 0.25 }
            },
            {
                id: 'shishiqiushi',
                name: '实事求是',
                description: '找准敌人弱点，下两次攻击必定命中要害',
                cooldown: 4,
                effect: { type: 'buff', value: 1.5, buffType: 'attack', duration: 2 }
            },
            {
                id: 'nongcunbaowei',
                name: '农村包围城市',
                description: '战略智慧，造成40点伤害并降低敌人攻击',
                cooldown: 5,
                effect: { type: 'damage', value: 40 }
            }
        ],
        levels: [
            { id: 1, name: '星火燎原', subtitle: '革命的火种', questionsCount: 3, bossLevel: false },
            { id: 2, name: '湖南农民运动', subtitle: '农民的力量', questionsCount: 3, bossLevel: false },
            { id: 3, name: '井冈山斗争', subtitle: '建立根据地', questionsCount: 4, bossLevel: true },
            { id: 4, name: '反对本本主义', subtitle: '实践出真知', questionsCount: 3, bossLevel: false },
            { id: 5, name: '论持久战', subtitle: '抗日必胜', questionsCount: 4, bossLevel: false },
            { id: 6, name: '整风运动', subtitle: '思想改造', questionsCount: 4, bossLevel: true },
            { id: 7, name: '为人民服务', subtitle: '革命宗旨', questionsCount: 3, bossLevel: false },
            { id: 8, name: '论联合政府', subtitle: '统一战线', questionsCount: 4, bossLevel: false },
            { id: 9, name: '将革命进行到底', subtitle: '解放全中国', questionsCount: 4, bossLevel: false },
            { id: 10, name: '新民主主义革命', subtitle: '最终胜利', questionsCount: 5, bossLevel: true }
        ]
    },

    zizhitongjian: {
        id: 'zizhitongjian',
        name: '资治通鉴',
        subtitle: '历史智慧之路',
        character: {
            name: '历史谋士',
            avatar: '📜',
            title: '智谋之士',
            description: '通晓古今的历史学者',
            baseStats: {
                hp: 90,
                attack: 8,
                wisdom: 10
            }
        },
        theme: {
            primary: '#2c5f2d',
            secondary: '#97bc62',
            icon: '📜'
        },
        skills: [
            {
                id: 'yiguweijianluxian',
                name: '以古为鉴',
                description: '借鉴历史智慧，恢复15%生命值并增加智慧',
                cooldown: 3,
                effect: { type: 'heal', value: 0.15 }
            },
            {
                id: 'moulvesuan',
                name: '运筹帷幄',
                description: '战略布局，下三次回答正确伤害增加50%',
                cooldown: 4,
                effect: { type: 'buff', value: 1.5, buffType: 'attack', duration: 3 }
            },
            {
                id: 'zhihuiguangtian',
                name: '借古讽今',
                description: '历史的教训，对敌人造成35点伤害',
                cooldown: 5,
                effect: { type: 'damage', value: 35 }
            }
        ],
        levels: [
            { id: 1, name: '战国风云', subtitle: '诸侯争霸', questionsCount: 3, bossLevel: false },
            { id: 2, name: '秦并六国', subtitle: '天下一统', questionsCount: 3, bossLevel: false },
            { id: 3, name: '楚汉争霸', subtitle: '鸿门宴', questionsCount: 4, bossLevel: true },
            { id: 4, name: '汉武盛世', subtitle: '开疆拓土', questionsCount: 3, bossLevel: false },
            { id: 5, name: '三国鼎立', subtitle: '英雄辈出', questionsCount: 4, bossLevel: false },
            { id: 6, name: '五胡乱华', subtitle: '乱世求存', questionsCount: 4, bossLevel: true },
            { id: 7, name: '贞观之治', subtitle: '盛唐气象', questionsCount: 3, bossLevel: false },
            { id: 8, name: '安史之乱', subtitle: '盛极而衰', questionsCount: 4, bossLevel: false },
            { id: 9, name: '五代十国', subtitle: '分裂割据', questionsCount: 4, bossLevel: false },
            { id: 10, name: '以史为鉴', subtitle: '通鉴大成', questionsCount: 5, bossLevel: true }
        ]
    }
};

// 获取所有书籍列表
function getAllBooks() {
    return Object.values(BOOKS_DATA);
}

// 获取指定书籍
function getBook(bookId) {
    return BOOKS_DATA[bookId] || null;
}

// 获取书籍关卡
function getBookLevel(bookId, levelId) {
    const book = getBook(bookId);
    if (!book) return null;
    return book.levels.find(l => l.id === levelId);
}

// 导出
window.BOOKS_DATA = BOOKS_DATA;
window.getAllBooks = getAllBooks;
window.getBook = getBook;
window.getBookLevel = getBookLevel;
