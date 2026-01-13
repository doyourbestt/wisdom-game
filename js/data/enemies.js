/**
 * 敌人配置数据
 */
const ENEMIES_DATA = {
    chuanxilu: {
        normal: [
            {
                id: 'siyu_xiaogui',
                name: '私欲小鬼',
                avatar: '👹',
                hp: 40,
                attack: 8,
                exp: 20,
                gold: 10,
                description: '被私欲驱使的小妖，贪婪而愚昧'
            },
            {
                id: 'gongli_yao',
                name: '功利妖',
                avatar: '🦊',
                hp: 50,
                attack: 10,
                exp: 25,
                gold: 15,
                description: '追逐功名利禄的妖怪，投机取巧'
            },
            {
                id: 'mihuo_shou',
                name: '迷惑兽',
                avatar: '🐺',
                hp: 45,
                attack: 12,
                exp: 22,
                gold: 12,
                description: '散布迷惑的野兽，混淆是非'
            },
            {
                id: 'jiaoman_gui',
                name: '骄慢鬼',
                avatar: '👻',
                hp: 55,
                attack: 9,
                exp: 28,
                gold: 18,
                description: '自高自大的邪灵，目中无人'
            },
            {
                id: 'yuwang_mo',
                name: '欲望魔',
                avatar: '😈',
                hp: 60,
                attack: 11,
                exp: 30,
                gold: 20,
                description: '永不满足的魔物，贪得无厌'
            }
        ],
        boss: [
            {
                id: 'siyu_molong',
                name: '私欲魔龙',
                avatar: '🐉',
                hp: 150,
                attack: 18,
                exp: 100,
                gold: 80,
                description: '私欲的化身，贪婪无度的巨龙',
                skills: ['吞噬', '迷惑吐息']
            },
            {
                id: 'xinmo_dawang',
                name: '心魔大王',
                avatar: '👿',
                hp: 200,
                attack: 22,
                exp: 150,
                gold: 120,
                description: '内心黑暗的具现，最强大的心魔',
                skills: ['心灵侵蚀', '黑暗笼罩']
            },
            {
                id: 'wuming_shenmo',
                name: '无明神魔',
                avatar: '🔮',
                hp: 250,
                attack: 25,
                exp: 200,
                gold: 150,
                description: '遮蔽良知的终极邪恶',
                skills: ['无明之雾', '遮天蔽日']
            }
        ]
    },

    maoxuan: {
        normal: [
            {
                id: 'fandong_xiaobing',
                name: '反动小兵',
                avatar: '🎖️',
                hp: 45,
                attack: 9,
                exp: 22,
                gold: 12,
                description: '为反动势力卖命的士兵'
            },
            {
                id: 'fengjian_canyu',
                name: '封建残余',
                avatar: '👺',
                hp: 50,
                attack: 10,
                exp: 25,
                gold: 15,
                description: '封建思想的化身，顽固守旧'
            },
            {
                id: 'maiban_zichan',
                name: '买办资本',
                avatar: '🎩',
                hp: 55,
                attack: 11,
                exp: 28,
                gold: 18,
                description: '出卖民族利益的买办'
            },
            {
                id: 'diguo_zougou',
                name: '帝国走狗',
                avatar: '🐕',
                hp: 48,
                attack: 12,
                exp: 24,
                gold: 14,
                description: '为帝国主义效力的爪牙'
            },
            {
                id: 'tuoxie_fenzi',
                name: '投降派',
                avatar: '🏳️',
                hp: 40,
                attack: 8,
                exp: 20,
                gold: 10,
                description: '意志薄弱的投降主义者'
            }
        ],
        boss: [
            {
                id: 'junfa_dutou',
                name: '军阀督头',
                avatar: '⚔️',
                hp: 160,
                attack: 20,
                exp: 110,
                gold: 90,
                description: '割据一方的军阀头目',
                skills: ['军令如山', '重炮轰击']
            },
            {
                id: 'fandong_juntuan',
                name: '反动军团长',
                avatar: '🎖️',
                hp: 220,
                attack: 24,
                exp: 160,
                gold: 130,
                description: '反动军队的高级将领',
                skills: ['围剿', '诱降']
            },
            {
                id: 'diguo_daibiao',
                name: '帝国代表',
                avatar: '🦅',
                hp: 280,
                attack: 28,
                exp: 220,
                gold: 170,
                description: '帝国主义在华势力的代表',
                skills: ['经济封锁', '武装干涉']
            }
        ]
    },

    zizhitongjian: {
        normal: [
            {
                id: 'hunjun_yingling',
                name: '昏君幽灵',
                avatar: '👑',
                hp: 42,
                attack: 8,
                exp: 21,
                gold: 11,
                description: '昏庸君主的残留意志'
            },
            {
                id: 'jianchen_guihun',
                name: '奸臣鬼魂',
                avatar: '🎭',
                hp: 48,
                attack: 11,
                exp: 24,
                gold: 14,
                description: '谗言惑主的奸臣亡魂'
            },
            {
                id: 'luanshi_yaonie',
                name: '乱世妖孽',
                avatar: '🐲',
                hp: 52,
                attack: 10,
                exp: 26,
                gold: 16,
                description: '乱世中兴风作浪的妖魔'
            },
            {
                id: 'huangyan_jing',
                name: '谎言精',
                avatar: '🗣️',
                hp: 38,
                attack: 13,
                exp: 20,
                gold: 10,
                description: '以谎言为食的精怪'
            },
            {
                id: 'wangchao_canying',
                name: '王朝残影',
                avatar: '🏛️',
                hp: 58,
                attack: 9,
                exp: 29,
                gold: 19,
                description: '覆灭王朝的怨念集合'
            }
        ],
        boss: [
            {
                id: 'baojun_wanghun',
                name: '暴君亡魂',
                avatar: '💀',
                hp: 170,
                attack: 19,
                exp: 120,
                gold: 95,
                description: '历史上暴君的集合体',
                skills: ['暴政', '焚书']
            },
            {
                id: 'luanshi_mowang',
                name: '乱世魔王',
                avatar: '👹',
                hp: 230,
                attack: 23,
                exp: 170,
                gold: 140,
                description: '乱世的化身，战乱的根源',
                skills: ['天下大乱', '诸侯割据']
            },
            {
                id: 'wangchao_zhongyan',
                name: '王朝终焉',
                avatar: '🌑',
                hp: 300,
                attack: 26,
                exp: 250,
                gold: 180,
                description: '王朝覆灭的终极力量',
                skills: ['国运衰落', '改朝换代']
            }
        ]
    }
};

/**
 * 获取指定书籍的普通敌人
 */
function getNormalEnemies(bookId) {
    return ENEMIES_DATA[bookId]?.normal || [];
}

/**
 * 获取指定书籍的BOSS
 */
function getBossEnemies(bookId) {
    return ENEMIES_DATA[bookId]?.boss || [];
}

/**
 * 根据关卡获取敌人
 */
function getEnemyForLevel(bookId, levelId, isBoss) {
    if (isBoss) {
        const bosses = getBossEnemies(bookId);
        // BOSS关卡：3, 6, 10 对应 boss 0, 1, 2
        const bossIndex = levelId === 3 ? 0 : (levelId === 6 ? 1 : 2);
        return bosses[bossIndex] || bosses[0];
    } else {
        const normals = getNormalEnemies(bookId);
        // 随机选择一个普通敌人
        return normals[Math.floor(Math.random() * normals.length)];
    }
}

/**
 * 根据等级调整敌人属性
 */
function scaleEnemyByLevel(enemy, playerLevel) {
    const scaleFactor = 1 + (playerLevel - 1) * 0.1;
    return {
        ...enemy,
        hp: Math.floor(enemy.hp * scaleFactor),
        attack: Math.floor(enemy.attack * scaleFactor),
        exp: Math.floor(enemy.exp * scaleFactor),
        gold: Math.floor(enemy.gold * scaleFactor)
    };
}

// 导出
window.ENEMIES_DATA = ENEMIES_DATA;
window.getNormalEnemies = getNormalEnemies;
window.getBossEnemies = getBossEnemies;
window.getEnemyForLevel = getEnemyForLevel;
window.scaleEnemyByLevel = scaleEnemyByLevel;
