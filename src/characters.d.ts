export interface Character {
    currentHealth: number;
    maxHealth: number;
    attack: number;
    defense?: number;
}
export interface Player extends Character {
    name: string;
    level: 1;
    experience: 0;
}
export interface Enemy extends Character {
    type: "Wolf" | "Goblin" | "Troll" | "Dragon";
    loot: string[];
    level: number;
    mana?: number;
}
export declare function createPlayer(name: string): Player;
//# sourceMappingURL=characters.d.ts.map