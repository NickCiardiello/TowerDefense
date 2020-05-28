import Enemy from "./enemies/Enemy";

export function createEnemiesForRound(round) {
    let enemies = [];
    switch (round) {
        case 1:
            enemies[0] = new Enemy('circle', 'red', 0, 1, 1, 0, true);
            enemies[1] = new Enemy('circle', 'yellow', -150, 1, 1, 0, true);
            // enemies[2] = new Enemy('square', 'red', -300, 1, 1, 0, true);
            // enemies[3] = new Enemy('square', 'red', -450, 3, 2, 0, true);
            // enemies[1] = new Enemy('circle', 'red', -500, 2, 0, false);
            // enemies[2] = new Enemy('square', 'yellow', -1000, 1, 0, true);
            // enemies[3] = new Enemy('square', 'yellow', -1500, 2, 0, false);
        // case 1:
        //     for (let i = 0; i < 6; i++) {
        //         enemies[i] = new Circle('red', i * -150, 1, false);
        //     }
        //     break;
        // case 2:
        //     for (let i = 0; i < 10; i++) {
        //         if (i % 2 === 0) {
        //             enemies[i] = new Circle('yellow', i * -50, 1, false);
        //         } else {
        //             enemies[i] = new Square('gray', i * -50, 1);
        //         }
        //     }
        //     break;
        // case 3:
        //     for (let i = 0; i < 3; i++ ) {
        //         enemies[i] = new Circle('red', i * -150, 1, true);
        //     }
        //     break;
        // case 4:
        //     for (let i = 0; i < 100; i++) {
        //         enemies[i] = new Circle('yellow', i * -50, 10, true);
        //     }
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

