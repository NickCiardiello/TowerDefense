import Enemy from "./enemies/Enemy";
import {EnemyType} from "./Constants";

export function createEnemiesForRound(round) {
    let enemies = [];
    switch (round) {
        case 1:
            // for (let i = 0; i < 5; i++) {
            //     enemies[i] = new Enemy('circle', 'red', i * -75, 1, 0, false);
            // }
            for (let i = 0; i < 15; i++) {
                enemies[i] = new Enemy(EnemyType.CIRCLE, 2, i * -65, 0, false);
            }
            // for (let i = 5; i < 10; i++) {
            //     enemies[i] = new Enemy(EnemyType.CIRCLE, 2, i * -50, 0, false);
            // }
            break;
        // case 2:
        //     for (let i = 0; i < 10; i++) {
        //         enemies[i] = new Enemy('square', 'yellow', i * -150, 3, 0, false);
        //     }
        //     break;
        // case 3:
        //     for (let i = 0; i < 10; i++) {
        //         enemies[i] = new Enemy('circle', 'yellow', i * -50, 1, 0, false);
        //     }
        //     break;
        // case 4:
        //     enemies[0] = new Enemy('square', 'red', 0, 1, 5, true);
        default:
            break;
    }
    return enemies;
}

export function getReward(round) {
    return 50;
}





// Start red circle immediately at default speed with armor and camo
// enemies[0] = new Enemy('circle', 'red', 0, 1, 1, true);
// Start yellow square with delay at default speed without camo or armor
// enemies[1] = new Enemy('square', 'yellow', -150, 1, 0, false);
// Start yellow square with delay at 2x speed with armor and camo
// enemies[2] = new Enemy('square', 'yellow', -300, 2, 2, true);
