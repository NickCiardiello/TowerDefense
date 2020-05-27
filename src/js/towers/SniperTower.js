import { drawTower, drawTowerRange, drawTowerFull } from '../utils.js';
export default class SniperTower {
    constructor(context, x, y) {
        this.context = context;
        this.x = x
        this.y = y
        this.radius = 10;
        this.rangeRadius = 500;
        this.color = '#00ff00';
    }

    drawTower() {
        drawTower(this);
    }

    drawTowerFull(x, y) {
        drawTowerFull(this);
    }

    drawTowerRange() {
        drawTowerRange(this);
    }

    update(x, y) {
        this.x = x;
        this.y = y;
    }

}


