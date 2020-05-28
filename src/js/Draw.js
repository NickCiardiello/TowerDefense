import {canvas, context} from "./Constants";
import {getMap} from "./Maps";

export function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawTower(tower) {
    tower.context.beginPath()
    tower.context.arc(tower.x, tower.y, tower.radius, 0, Math.PI * 2, false)
    tower.context.fillStyle = tower.color;
    tower.context.fill()
    tower.context.closePath()

}

export function drawTowerRange(tower) {
    tower.context.beginPath()
    tower.context.arc(tower.x, tower.y, tower.rangeRadius, 0, Math.PI * 2, false)
    tower.context.fillStyle = '#d3d3d3';
    tower.context.fill()
    tower.context.closePath()
}

export function drawTowerFull(tower) {
    drawTowerRange(tower);
    drawTower(tower);
}

export function drawPath() {
    context.beginPath();
    context.strokeStyle = '#000';
    context.lineWidth = 1;
    context.stroke(new Path2D(getMap()));
    context.closePath();
}

export function drawTowers(towers) {
    for (let i = 0; i < towers.length; i++) {
        towers[i].drawTower();
    }
}

export function drawTowersFull(towers) {
    for (let i = 0; i < towers.length; i++) {
        towers[i].drawTowerRange();
    }
    for (let i = 0; i < towers.length; i++) {
        towers[i].drawTower();
    }
}

export function drawAttack(towerX, towerY, enemyX, enemyY) {
    context.beginPath();
    context.moveTo(towerX, towerY);
    context.lineTo(enemyX, enemyY);
    context.stroke();
}
