/**
 * 角色系统
 */
class Character {
    constructor(data = null) {
        if (data) {
            // 从存档加载
            Object.assign(this, data);
        } else {
            // 新角色默认值
            this.name = '玩家';
            this.level = 1;
            this.exp = 0;
            this.gold = 100;
            this.wisdom = 0;

            // 基础属性
            this.baseHp = 100;
            this.baseAttack = 10;

            // 装备槽
            this.equipment = {
                weapon: null,
                armor: null,
                accessory: null
            };

            // 当前属性（必须在equipment之后初始化，因为maxHp依赖equipment）
            this.currentHp = this.maxHp;

            // 背包
            this.inventory = [];

            // 书籍进度
            this.bookProgress = {
                chuanxilu: 0,
                maoxuan: 0,
                zizhitongjian: 0
            };

            // 当前选择的书籍
            this.currentBook = null;

            // 技能冷却
            this.skillCooldowns = {};

            // 统计数据
            this.stats = {
                totalBattles: 0,
                totalWins: 0,
                totalLosses: 0,
                currentWinStreak: 0,
                maxWinStreak: 0,
                maxCombo: 0,
                correctAnswers: 0,
                wrongAnswers: 0,
                bossKills: 0,
                totalWisdom: 0,
                perfectBattles: 0,
                fastestBattle: 0,
                maxLoginStreak: 0
            };

            // 已解锁成就
            this.unlockedAchievements = [];

            // 称号
            this.title = '初学者';
        }
    }

    /**
     * 获取最大生命值
     */
    get maxHp() {
        let hp = this.baseHp + (this.level - 1) * 20;

        // 装备加成
        if (this.equipment.armor) {
            const armor = getItemById(this.equipment.armor);
            if (armor?.stats?.hp) hp += armor.stats.hp;
        }
        if (this.equipment.accessory) {
            const accessory = getItemById(this.equipment.accessory);
            if (accessory?.stats?.hp) hp += accessory.stats.hp;
        }
        if (this.equipment.weapon) {
            const weapon = getItemById(this.equipment.weapon);
            if (weapon?.stats?.hp) hp += weapon.stats.hp;
        }

        return hp;
    }

    /**
     * 获取攻击力
     */
    get attack() {
        let atk = this.baseAttack + this.level * 2;

        // 装备加成
        if (this.equipment.weapon) {
            const weapon = getItemById(this.equipment.weapon);
            if (weapon?.stats?.attack) atk += weapon.stats.attack;
        }
        if (this.equipment.armor) {
            const armor = getItemById(this.equipment.armor);
            if (armor?.stats?.attack) atk += armor.stats.attack;
        }
        if (this.equipment.accessory) {
            const accessory = getItemById(this.equipment.accessory);
            if (accessory?.stats?.attack) atk += accessory.stats.attack;
        }

        return atk;
    }

    /**
     * 获取智慧加成
     */
    get wisdomBonus() {
        let bonus = 0;

        // 装备加成
        Object.values(this.equipment).forEach(itemId => {
            if (itemId) {
                const item = getItemById(itemId);
                if (item?.stats?.wisdom) bonus += item.stats.wisdom;
            }
        });

        return bonus;
    }

    /**
     * 获取升级所需经验
     */
    get expToNextLevel() {
        return this.level * 100;
    }

    /**
     * 增加经验值
     */
    addExp(amount) {
        this.exp += amount;
        const leveledUp = [];

        while (this.exp >= this.expToNextLevel) {
            this.exp -= this.expToNextLevel;
            this.level += 1;
            leveledUp.push(this.level);

            // 升级恢复生命
            this.currentHp = this.maxHp;

            // 更新称号
            this.updateTitle();
        }

        return leveledUp;
    }

    /**
     * 更新称号
     */
    updateTitle() {
        if (this.level >= 50) {
            this.title = '一代宗师';
        } else if (this.level >= 40) {
            this.title = '大智者';
        } else if (this.level >= 30) {
            this.title = '智者';
        } else if (this.level >= 20) {
            this.title = '博学之士';
        } else if (this.level >= 15) {
            this.title = '学者';
        } else if (this.level >= 10) {
            this.title = '读书人';
        } else if (this.level >= 5) {
            this.title = '求知者';
        } else {
            this.title = '初学者';
        }
    }

    /**
     * 增加金币
     */
    addGold(amount) {
        this.gold += amount;
    }

    /**
     * 扣除金币
     */
    spendGold(amount) {
        if (this.gold >= amount) {
            this.gold -= amount;
            return true;
        }
        return false;
    }

    /**
     * 增加智慧值
     */
    addWisdom(amount) {
        this.wisdom += amount;
        this.stats.totalWisdom += amount;
    }

    /**
     * 受到伤害
     */
    takeDamage(amount) {
        this.currentHp = Math.max(0, this.currentHp - amount);
        return this.currentHp <= 0;
    }

    /**
     * 恢复生命
     */
    heal(amount) {
        this.currentHp = Math.min(this.maxHp, this.currentHp + amount);
    }

    /**
     * 完全恢复
     */
    fullHeal() {
        this.currentHp = this.maxHp;
    }

    /**
     * 装备物品
     */
    equipItem(itemId) {
        const item = getItemById(itemId);
        if (!item) return false;

        // 检查物品是否在背包中
        const inventoryIndex = this.inventory.indexOf(itemId);
        if (inventoryIndex === -1) return false;

        // 确定装备槽位
        let slot;
        if (item.type === 'weapon') slot = 'weapon';
        else if (item.type === 'armor') slot = 'armor';
        else if (item.type === 'accessory') slot = 'accessory';
        else return false;

        // 如果当前槽位有装备，放回背包
        if (this.equipment[slot]) {
            this.inventory.push(this.equipment[slot]);
        }

        // 装备新物品
        this.equipment[slot] = itemId;
        this.inventory.splice(inventoryIndex, 1);

        return true;
    }

    /**
     * 卸下装备
     */
    unequipItem(slot) {
        if (this.equipment[slot]) {
            this.inventory.push(this.equipment[slot]);
            this.equipment[slot] = null;
            return true;
        }
        return false;
    }

    /**
     * 添加物品到背包
     */
    addItem(itemId) {
        this.inventory.push(itemId);
    }

    /**
     * 使用消耗品
     */
    useConsumable(itemId) {
        const item = getItemById(itemId);
        if (!item || item.type !== 'consumable') return null;

        const inventoryIndex = this.inventory.indexOf(itemId);
        if (inventoryIndex === -1) return null;

        // 移除物品
        this.inventory.splice(inventoryIndex, 1);

        return item.effect;
    }

    /**
     * 更新书籍进度
     */
    updateBookProgress(bookId, levelId) {
        if (this.bookProgress[bookId] < levelId) {
            this.bookProgress[bookId] = levelId;
        }
    }

    /**
     * 记录战斗胜利
     */
    recordWin(isBoss = false) {
        this.stats.totalBattles += 1;
        this.stats.totalWins += 1;
        this.stats.currentWinStreak += 1;

        if (this.stats.currentWinStreak > this.stats.maxWinStreak) {
            this.stats.maxWinStreak = this.stats.currentWinStreak;
        }

        if (isBoss) {
            this.stats.bossKills += 1;
        }
    }

    /**
     * 记录战斗失败
     */
    recordLoss() {
        this.stats.totalBattles += 1;
        this.stats.totalLosses += 1;
        this.stats.currentWinStreak = 0;
    }

    /**
     * 记录答题
     */
    recordAnswer(correct) {
        if (correct) {
            this.stats.correctAnswers += 1;
        } else {
            this.stats.wrongAnswers += 1;
        }
    }

    /**
     * 记录连击
     */
    recordCombo(combo) {
        if (combo > this.stats.maxCombo) {
            this.stats.maxCombo = combo;
        }
    }

    /**
     * 记录完美战斗
     */
    recordPerfectBattle() {
        this.stats.perfectBattles += 1;
    }

    /**
     * 记录最快战斗
     */
    recordFastBattle(seconds) {
        if (this.stats.fastestBattle === 0 || seconds < this.stats.fastestBattle) {
            this.stats.fastestBattle = seconds;
        }
    }

    /**
     * 解锁成就
     */
    unlockAchievement(achievementId) {
        if (!this.unlockedAchievements.includes(achievementId)) {
            this.unlockedAchievements.push(achievementId);
            return true;
        }
        return false;
    }

    /**
     * 检查成就是否已解锁
     */
    hasAchievement(achievementId) {
        return this.unlockedAchievements.includes(achievementId);
    }

    /**
     * 保存角色数据
     */
    save() {
        Storage.savePlayer(this.toJSON());
    }

    /**
     * 转换为JSON
     */
    toJSON() {
        return {
            name: this.name,
            level: this.level,
            exp: this.exp,
            gold: this.gold,
            wisdom: this.wisdom,
            baseHp: this.baseHp,
            baseAttack: this.baseAttack,
            currentHp: this.currentHp,
            equipment: this.equipment,
            inventory: this.inventory,
            bookProgress: this.bookProgress,
            currentBook: this.currentBook,
            skillCooldowns: this.skillCooldowns,
            stats: this.stats,
            unlockedAchievements: this.unlockedAchievements,
            title: this.title
        };
    }

    /**
     * 从存档加载
     */
    static load() {
        const data = Storage.loadPlayer();
        if (data) {
            return new Character(data);
        }
        return null;
    }
}

// 导出
window.Character = Character;
