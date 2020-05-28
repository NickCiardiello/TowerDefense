import Circle from "./enemies/Circle";
import Square from "./enemies/Squares";

export function createEnemiesForRound(round) {
    let enemies = [];
    switch (round) {
        case 1:
            for (let i = 0; i < 6; i++) {
                enemies[i] = new Circle('red', i * -150, 1, false);
            }
            break;
        case 2:
            for (let i = 0; i < 10; i++) {
                if (i % 2 === 0) {
                    enemies[i] = new Circle('yellow', i * -50, 1, false);
                } else {
                    enemies[i] = new Square('gray', i * -50, 1);
                }
            }
            break;
        case 3:
            for (let i = 0; i < 3; i++ ) {
                enemies[i] = new Circle('red', i * -150, 1, true);
            }
        default:
            break;
    }
    return enemies;
}

export function getReward(round) {
    return 50;
    // switch(round) {
        // case 1:
        //     return 50;
        // case 2:
        //     return 50;
        // default:
        //     return 0;
    // }
}

