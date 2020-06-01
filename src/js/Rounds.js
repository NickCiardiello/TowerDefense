import Enemy from "./enemies/Enemy";
import {EnemyType} from "./Constants";

export function createEnemiesForRound(round) {
    let enemies = [];
    switch (round) {
        case 1:
            for (let i = 0; i < 15; i++) {
                enemies[i] = new Enemy(EnemyType.CIRCLE, 1, i * -65, 0, false);
            }
            break;
        case 2:
            for (let i = 0; i < 5; i++) {
                enemies[i] = new Enemy(EnemyType.CIRCLE, 1, i * -30, 0, false);
            }
            for (let i = 5; i < 10; i++) {
                enemies[i] = new Enemy(EnemyType.CIRCLE, 1, -650 - i * -30, 0, false);
            }
            for (let i = 10; i < 13; i++) {
                enemies[i] = new Enemy(EnemyType.CIRCLE, 2, i * -150, 0, false);
            }
        default:
            break;
    }
    return enemies;
}

export function getReward(round) {
    return 50;
}

