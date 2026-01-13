/**
 * 物品和装备数据
 */
const ITEMS_DATA = {
    // 武器
    weapons: [
        {
            id: 'wooden_sword',
            name: '木剑',
            type: 'weapon',
            rarity: 'common',
            icon: '🗡️',
            stats: { attack: 5 },
            description: '朴素的木制练习剑'
        },
        {
            id: 'iron_sword',
            name: '铁剑',
            type: 'weapon',
            rarity: 'common',
            icon: '⚔️',
            stats: { attack: 10 },
            description: '普通的铁制武器'
        },
        {
            id: 'wisdom_brush',
            name: '智慧之笔',
            type: 'weapon',
            rarity: 'uncommon',
            icon: '🖌️',
            stats: { attack: 15, wisdom: 5 },
            description: '蕴含智慧的毛笔，以文会武'
        },
        {
            id: 'scholars_sword',
            name: '书生剑',
            type: 'weapon',
            rarity: 'uncommon',
            icon: '🗡️',
            stats: { attack: 20, wisdom: 8 },
            description: '文武双全的象征'
        },
        {
            id: 'confucian_blade',
            name: '儒者之刃',
            type: 'weapon',
            rarity: 'rare',
            icon: '⚔️',
            stats: { attack: 30, wisdom: 15 },
            description: '承载儒家道德力量的神兵'
        },
        {
            id: 'heart_sword',
            name: '心剑',
            type: 'weapon',
            rarity: 'epic',
            icon: '💫',
            stats: { attack: 45, wisdom: 25, hp: 50 },
            description: '心即是理，此剑即心'
        },
        {
            id: 'liangzhi_blade',
            name: '良知神剑',
            type: 'weapon',
            rarity: 'legendary',
            icon: '✨',
            stats: { attack: 60, wisdom: 40, hp: 100 },
            description: '致良知的终极体现，斩断一切私欲',
            special: '答题正确时额外造成20%伤害'
        }
    ],

    // 护甲
    armors: [
        {
            id: 'cloth_robe',
            name: '布衣',
            type: 'armor',
            rarity: 'common',
            icon: '👘',
            stats: { hp: 20 },
            description: '普通的布制衣物'
        },
        {
            id: 'scholar_robe',
            name: '学士袍',
            type: 'armor',
            rarity: 'common',
            icon: '👔',
            stats: { hp: 35 },
            description: '读书人的标志性服装'
        },
        {
            id: 'leather_armor',
            name: '皮甲',
            type: 'armor',
            rarity: 'uncommon',
            icon: '🦺',
            stats: { hp: 50, attack: 3 },
            description: '轻便的皮制护甲'
        },
        {
            id: 'iron_armor',
            name: '铁甲',
            type: 'armor',
            rarity: 'uncommon',
            icon: '🛡️',
            stats: { hp: 70 },
            description: '坚固的铁制盔甲'
        },
        {
            id: 'dao_robe',
            name: '道袍',
            type: 'armor',
            rarity: 'rare',
            icon: '👘',
            stats: { hp: 100, wisdom: 20 },
            description: '清净无为的道家法袍'
        },
        {
            id: 'saint_armor',
            name: '圣人衣',
            type: 'armor',
            rarity: 'epic',
            icon: '✨',
            stats: { hp: 150, wisdom: 35, attack: 10 },
            description: '圣人气度的体现'
        },
        {
            id: 'tianli_robe',
            name: '天理玄衣',
            type: 'armor',
            rarity: 'legendary',
            icon: '🌟',
            stats: { hp: 200, wisdom: 50, attack: 20 },
            description: '与天理合一的神圣衣袍',
            special: '每回合恢复5%生命值'
        }
    ],

    // 饰品
    accessories: [
        {
            id: 'wooden_pendant',
            name: '木珠',
            type: 'accessory',
            rarity: 'common',
            icon: '📿',
            stats: { wisdom: 3 },
            description: '简单的木制挂饰'
        },
        {
            id: 'jade_pendant',
            name: '玉佩',
            type: 'accessory',
            rarity: 'uncommon',
            icon: '💎',
            stats: { wisdom: 8, hp: 15 },
            description: '温润如玉，君子之德'
        },
        {
            id: 'wisdom_ring',
            name: '智慧之环',
            type: 'accessory',
            rarity: 'rare',
            icon: '💍',
            stats: { wisdom: 20, attack: 5 },
            description: '蕴含古人智慧的神秘戒指'
        },
        {
            id: 'dragon_jade',
            name: '龙形玉',
            type: 'accessory',
            rarity: 'epic',
            icon: '🐉',
            stats: { wisdom: 30, hp: 50, attack: 15 },
            description: '龙形玉佩，吉祥如意'
        },
        {
            id: 'xinxue_pearl',
            name: '心学明珠',
            type: 'accessory',
            rarity: 'legendary',
            icon: '🔮',
            stats: { wisdom: 50, hp: 80, attack: 25 },
            description: '王阳明心学精髓的结晶',
            special: '答题时间延长5秒'
        }
    ],

    // 消耗品
    consumables: [
        {
            id: 'health_potion_small',
            name: '小回血丹',
            type: 'consumable',
            rarity: 'common',
            icon: '🧪',
            effect: { type: 'heal', value: 30 },
            description: '恢复30点生命值'
        },
        {
            id: 'health_potion_medium',
            name: '中回血丹',
            type: 'consumable',
            rarity: 'uncommon',
            icon: '🧪',
            effect: { type: 'heal', value: 60 },
            description: '恢复60点生命值'
        },
        {
            id: 'health_potion_large',
            name: '大回血丹',
            type: 'consumable',
            rarity: 'rare',
            icon: '🧪',
            effect: { type: 'heal', value: 100 },
            description: '恢复100点生命值'
        },
        {
            id: 'attack_boost',
            name: '力量丸',
            type: 'consumable',
            rarity: 'uncommon',
            icon: '💪',
            effect: { type: 'buff', buffType: 'attack', value: 1.5, duration: 3 },
            description: '3回合内攻击力提升50%'
        },
        {
            id: 'wisdom_scroll',
            name: '智慧卷轴',
            type: 'consumable',
            rarity: 'rare',
            icon: '📜',
            effect: { type: 'hint', value: 1 },
            description: '获得一次答题提示'
        },
        {
            id: 'exp_book',
            name: '经验书',
            type: 'consumable',
            rarity: 'rare',
            icon: '📕',
            effect: { type: 'exp', value: 100 },
            description: '获得100点经验值'
        }
    ]
};

/**
 * 掉落表配置
 */
const DROP_TABLE = {
    // 普通敌人掉落
    normal: [
        { item: 'health_potion_small', weight: 30 },
        { item: 'wooden_pendant', weight: 15 },
        { item: 'cloth_robe', weight: 10 },
        { item: 'wooden_sword', weight: 10 },
        { item: 'iron_sword', weight: 5 },
        { item: 'scholar_robe', weight: 5 },
        { item: null, weight: 25 } // 不掉落
    ],
    // BOSS掉落
    boss: [
        { item: 'health_potion_medium', weight: 20 },
        { item: 'wisdom_brush', weight: 15 },
        { item: 'scholars_sword', weight: 12 },
        { item: 'leather_armor', weight: 12 },
        { item: 'jade_pendant', weight: 10 },
        { item: 'confucian_blade', weight: 8 },
        { item: 'dao_robe', weight: 8 },
        { item: 'wisdom_ring', weight: 6 },
        { item: 'heart_sword', weight: 4 },
        { item: 'saint_armor', weight: 3 },
        { item: 'dragon_jade', weight: 2 }
    ]
};

/**
 * 获取所有物品
 */
function getAllItems() {
    return [
        ...ITEMS_DATA.weapons,
        ...ITEMS_DATA.armors,
        ...ITEMS_DATA.accessories,
        ...ITEMS_DATA.consumables
    ];
}

/**
 * 根据ID获取物品
 */
function getItemById(itemId) {
    return getAllItems().find(item => item.id === itemId);
}

/**
 * 根据类型获取物品
 */
function getItemsByType(type) {
    switch (type) {
        case 'weapon':
            return ITEMS_DATA.weapons;
        case 'armor':
            return ITEMS_DATA.armors;
        case 'accessory':
            return ITEMS_DATA.accessories;
        case 'consumable':
            return ITEMS_DATA.consumables;
        default:
            return [];
    }
}

/**
 * 根据稀有度获取物品
 */
function getItemsByRarity(rarity) {
    return getAllItems().filter(item => item.rarity === rarity);
}

/**
 * 计算掉落物品
 */
function calculateDrop(isBoss = false) {
    const table = isBoss ? DROP_TABLE.boss : DROP_TABLE.normal;
    const totalWeight = table.reduce((sum, entry) => sum + entry.weight, 0);
    let random = Math.random() * totalWeight;

    for (const entry of table) {
        random -= entry.weight;
        if (random <= 0) {
            if (entry.item === null) return null;
            return getItemById(entry.item);
        }
    }
    return null;
}

/**
 * 获取稀有度颜色
 */
function getRarityColor(rarity) {
    const colors = {
        common: '#9ca3af',
        uncommon: '#4ade80',
        rare: '#60a5fa',
        epic: '#a855f7',
        legendary: '#f59e0b'
    };
    return colors[rarity] || colors.common;
}

/**
 * 获取稀有度名称
 */
function getRarityName(rarity) {
    const names = {
        common: '普通',
        uncommon: '优秀',
        rare: '稀有',
        epic: '史诗',
        legendary: '传说'
    };
    return names[rarity] || '普通';
}

// 导出
window.ITEMS_DATA = ITEMS_DATA;
window.DROP_TABLE = DROP_TABLE;
window.getAllItems = getAllItems;
window.getItemById = getItemById;
window.getItemsByType = getItemsByType;
window.getItemsByRarity = getItemsByRarity;
window.calculateDrop = calculateDrop;
window.getRarityColor = getRarityColor;
window.getRarityName = getRarityName;
