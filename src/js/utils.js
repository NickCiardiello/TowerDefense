
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function getDistance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

function drawTower(tower) {
    tower.context.beginPath()
    tower.context.arc(tower.x, tower.y, tower.radius, 0, Math.PI * 2, false)
    tower.context.fillStyle = tower.color;
    tower.context.fill()
    tower.context.closePath()

}

function drawTowerRange(tower) {
    tower.context.beginPath()
    tower.context.arc(tower.x, tower.y, tower.rangeRadius, 0, Math.PI * 2, false)
    tower.context.fillStyle = '#d3d3d3';
    tower.context.fill()
    tower.context.closePath()
}

function drawTowerFull(tower) {
    drawTowerRange(tower);
    drawTower(tower);
}


module.exports = { randomIntFromRange, randomColor, getDistance, drawTower, drawTowerRange, drawTowerFull }

