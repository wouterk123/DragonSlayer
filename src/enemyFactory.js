import {} from "./characters.js";
export function createEnemy(type, level) {
    const baseStats = {
        Wolf: { MaxHealth: 30, attack: 5, defense: 2, loot: ["Wolf Pelt"] },
        Goblin: { MaxHealth: 20, attack: 3, defense: 1, loot: ["Goblin Ear", "Rusty Dagger"] },
        Troll: { MaxHealth: 50, attack: 8, defense: 4, loot: ["Troll Club", "Troll Hide"] },
        Dragon: { MaxHealth: 100, attack: 15, defense: 10, loot: ["Scale"], mana: 50 }
    };
    const stats = baseStats[type];
    if (!stats) {
        throw new Error(`Unknown enemy type: ${type}`);
    }
    const enemyMana = baseStats[type].mana ?? 0;
    return {
        type,
        level,
        currentHealth: stats.MaxHealth + level * 5,
        maxHealth: stats.MaxHealth + level * 5,
        attack: stats.attack + level * 2,
        defense: stats.defense + level,
        loot: stats.loot,
        mana: enemyMana
    };
}
//# sourceMappingURL=enemyFactory.js.map