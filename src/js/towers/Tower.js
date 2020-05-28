// import { drawTower, drawTowerRange, drawTowerFull } from '../utils.js';
import { drawTower, drawTowerRange, drawTowerFull } from "../Draw";

export default class Tower {
    constructor(context, towerType, x, y) {
        this.context = context;
        this.x = x
        this.y = y
        this.detectCamo = false;
        switch(towerType) {
            case "BasicTower":
                this.radius = 25;
                this.rangeRadius = 125;
                this.color = '#964b00';
                this.damage = 0.5;
                this.price = 100;
                break;
            case "SniperTower":
                this.radius = 10;
                this.rangeRadius = 500;
                this.color = '#00ff00';
                this.damage = 0.25;
                this.price = 150;
                break;
            case "SentryTower":
                this.radius = 10;
                this.rangeRadius = 75;
                this.color = '#228b22';
                this.damage = 0.25;
                this.price = 100;
                this.detectCamo = true;
                break;
            default:
                this.radius = 0;
                this.rangeRadius = 0;
                this.color = '#000';
                this.damage = 0;
                break;
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


