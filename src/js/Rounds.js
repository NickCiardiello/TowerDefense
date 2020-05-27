import Circle from "./enemies/Circle";
import Square from "./enemies/Squares";

function createEnemiesForRound(context, round) {
    let enemies = [];

    switch (round) {
        case 1:
            enemies[0] = new Square(context, 'red');
            enemies[1] = new Square(context, 'gray');
            enemies[2] = new Circle(context, 'blue');
            enemies[3] = new Circle(context, 'yellow');
            break;
        case 2:
            enemies[0] = new Circle(context, 'blue');
            enemies[1] = new Circle(context, 'yellow');
            break;
        default:
            break;
    }
    return enemies;
}
export default createEnemiesForRound

