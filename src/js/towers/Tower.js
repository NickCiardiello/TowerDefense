import { drawTower, drawTowerRange, drawTowerFull } from "../Draw";

export default class Tower {
    constructor(towerType, x, y) {
        this.towerType = towerType;
        this.x = x
        this.y = y
        this.radius = 25;
        this.rangeRadius = 25;
        this.damage = 0;
        this.numTargets = 1;
        this.rank = 1;
        this.detectCamo = false;
        this.armorPiercing = false;
        this.isSelected = false;
        switch(towerType) {
            case "BasicTower":
                this.rangeRadius = 125;
                this.color = '#964b00';
                this.damage = 0.5;
                this.price = 100;
                break;
            case "SniperTower":
                this.rangeRadius = 300;
                this.color = '#00ff00';
                this.damage = 0.25;
                this.price = 150;
                break;
            case "SentryTower":
                this.rangeRadius = 75;
                this.color = '#228b22';
                this.damage = 0.25;
                this.price = 100;
                this.detectCamo = true;
                break;
            default:
                this.rangeRadius = 0;
                this.color = '#000';
                this.damage = 0;
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
        this.x = x;
        this.y = y;
    }

    getUpgradePrice() {
        return this.rank * 50;
    }

    getUpgradeText() {
        switch (this.towerType) {
            case 'BasicTower':
                if (this.rank === 1) {
                    return "Dual Wield";
                } else if (this.rank === 2) {
                    return "Increase Attack";
                }
                this.rank++;
                break;
            default:
                return 'Fully upgraded';
        }
    }

    upgrade() {
        this.numTargets++;
        this.rank++;
    }
}


