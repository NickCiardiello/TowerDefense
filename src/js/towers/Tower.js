import { drawTower, drawTowerRange, drawTowerFull } from "../Draw";

export default class Tower {
    get armorPiercing() {
        return this._armorPiercing;
    }

    set armorPiercing(value) {
        this._armorPiercing = value;
    }
    get detectCamo() {
        return this._detectCamo;
    }

    set detectCamo(value) {
        this._detectCamo = value;
    }
    get damage() {
        return this._damage;
    }

    set damage(value) {
        this._damage = value;
    }
    get rangeRadius() {
        return this._rangeRadius;
    }

    set rangeRadius(value) {
        this._rangeRadius = value;
    }
    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }
    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }
    constructor(towerType, x, y) {
        this._x = x
        this._y = y
        this.radius = 25;
        this._rangeRadius = 25;
        this._damage = 0;
        this._detectCamo = false;
        this._armorPiercing = false;
        switch(towerType) {
            case "BasicTower":
                this._rangeRadius = 125;
                this.color = '#964b00';
                this._damage = 0.5;
                this.price = 100;
                break;
            case "SniperTower":
                this._rangeRadius = 500;
                this.color = '#00ff00';
                this._damage = 0.25;
                this.price = 150;
                break;
            case "SentryTower":
                this._rangeRadius = 75;
                this.color = '#228b22';
                this._damage = 0.25;
                this.price = 100;
                this._detectCamo = true;
                break;
            default:
                this._rangeRadius = 0;
                this.color = '#000';
                this._damage = 0;
                break;
        }
    }

    drawTower() {
        drawTower(this);
    }

    drawTowerRange() {
        drawTowerRange(this);
    }

    update(x, y) {
        this._x = x;
        this._y = y;
    }
}


