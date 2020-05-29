import AbstractTower from "./AbstractTower";

export class Fng extends AbstractTower {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.rangeRadius = 125;
        this.color = '#964b00';
        this.damage = 0.5;
        this.price = 100;
    }

    canHit(enemy) {
        return super.canHit(enemy) && (!enemy.camo || this.detectCamo);
    }

    getUpgradePrice() {
        return super.getUpgradePrice(100, 100);
    }

    getUpgradeText() {
        return super.getUpgradeText("Dual Wield", "Camo Detection");
    }

    upgrade() {
        super.upgrade();
        switch (this.rank) {
            case 2:
                this.numTargets = 2;
                break;
            case 3:
                this.detectCamo = true;
            default:
                break;
        }
    }
}