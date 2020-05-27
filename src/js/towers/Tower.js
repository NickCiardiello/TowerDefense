import { drawTower, drawTowerRange, drawTowerFull } from '../utils.js';
export default class Tower {
    constructor(context, towerType, x, y) {
        this.context = context;
        this.x = x
        this.y = y
        switch(towerType) {
            case "BasicTower":
                this.radius = 25;
                this.rangeRadius = 125;
                this.color = '#964b00';
                break;
            case "SniperTower":
                this.radius = 10;
                this.rangeRadius = 500;
                this.color = '#00ff00';
                break;
            default:
                this.radius = 0;
                this.rangeRadius = 0;
                this.color = '#000';
        }
    }

    drawTower() {
        drawTower(this);
    }

    drawTowerFull() {
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


