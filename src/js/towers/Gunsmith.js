import AbstractTower from "./AbstractTower";

export class Gunsmith extends AbstractTower {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.rangeRadius = 100;
        this.numTargets = 5;
        this.color = '#228b22';
        this.damage = 0.25;
        this.price = 150;
    }

    canHit(enemy) {
        return super.canHit(enemy) && (!enemy.camo || this.detectCamo);
    }

    getUpgradePrice() {
        return super.getUpgradePrice(690, 4200);
    }

    getUpgradeText() {
        return super.getUpgradeText("Scatter Shot", "Armor Piercing Rounds");
    }

    upgrade() {
        super.upgrade();
        switch (this.rank) {
            case 2:
                this.numTargets = 10;
                break;
            case 3:
                this.armorPiercing = true;
            default:
                break;
        }
    }
}