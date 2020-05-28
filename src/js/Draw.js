import {canvas, context} from "./Constants";
import {getMap} from "./Maps";

export function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawCircle(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
    context.closePath();
}

export function drawCircleBorder(x, y, radius, color, width) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.lineWidth = width;
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
}

export function drawSquare(x, y, radius, color) {
    context.beginPath();
    context.fillStyle = color;
    context.rect(x, y, radius * 2, radius * 2);
    context.fill();
    context.closePath();
}

export function drawSquareBorder(x, y, radius, color, width) {
    context.beginPath();
    context.rect(x, y, radius * 2, radius * 2);
    context.lineWidth = width;
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
}

export function drawEnemy(enemy) {
    if (enemy.step >= 0) {
        if (enemy.shape === 'circle') {
            drawCircle(enemy.x, enemy.y, enemy.radius, enemy.color);
            if (enemy.camo) {
                drawCircleBorder(enemy.x, enemy.y, enemy.radius + 10, "lightgreen", 2);
            }
            if (enemy.hasArmor) {
                drawCircleBorder(enemy.x, enemy.y, enemy.radius, 'black', enemy.armorWidth);
            }
        } else if (enemy.shape === 'square') {
            drawSquare(enemy.x, enemy.y, enemy.radius, enemy.color);
            if (enemy.camo) {
                drawSquareBorder(enemy.x, enemy.y, enemy.radius + 10, "lightgreen", 2);
            }
            if (enemy.hasArmor) {
                drawSquareBorder(enemy.x, enemy.y, enemy.radius, 'black', enemy.armorWidth);
            }
        }
    }
}

export function drawTower(tower) {
    context.beginPath()
    context.arc(tower.x, tower.y, tower.radius, 0, Math.PI * 2, false)
    context.fillStyle = tower.color;
    context.fill()
    context.closePath()

}

export function drawTowerRange(tower) {
    context.beginPath()
    context.arc(tower.x, tower.y, tower.rangeRadius, 0, Math.PI * 2, false)
    context.fillStyle = '#d3d3d3';
    context.fill()
    context.closePath()
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
