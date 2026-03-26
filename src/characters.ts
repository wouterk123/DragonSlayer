export interface Character {
    currentHealth: number;
    maxHealth: number;
    attack: number;
    defense?: number;
}
export interface Player extends Character {
    name: string ;
    level: 1
    experience: 0
}
export interface Enemy extends Character {
    type: "Wolf" | "Goblin" | "Troll" | "Dragon";
    loot: string[];
    level: number;
    mana?: number
}
export function createPlayer(name: string): Player {
    return {
        name,
        level: 1,
        experience: 0,
        currentHealth: 100,
        maxHealth: 100,
        attack: 10,
        defense: 5
    };
}