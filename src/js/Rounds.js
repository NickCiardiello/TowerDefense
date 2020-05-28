import Enemy from "./enemies/Enemy";

export function createEnemiesForRound(round) {
    let enemies = [];
    switch (round) {
        case 1:
            // Start red circle immediately at default speed with armor and camo
            // enemies[0] = new Enemy('circle', 'red', 0, 1, 1, true);
            // Start yellow square with delay at default speed without camo or armor
            // enemies[1] = new Enemy('square', 'yellow', -150, 1, 0, false);
            // Start yellow square with delay at 2x speed with armor and camo
            // enemies[2] = new Enemy('square', 'yellow', -300, 2, 2, true);
            for (let i = 0; i < 5; i++) {
                enemies[i] = new Enemy('circle', 'red', i * -100, 1, 0, false);
            }
            break;
        default:
            break;
    }
    return enemies;
}

export function getReward(round) {
    return 50;
}

