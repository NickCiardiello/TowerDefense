import AbstractTower from "./AbstractTower";

export class Marksman extends AbstractTower {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.rangeRadius = 250;
        this.color = '#00ff00';
        this.damage = 0.2;
        this.price = 100;
    }

    canHit(enemy) {
        return super.canHit(enemy) && (!enemy.camo || this.detectCamo);
    }

    getUpgradePrice() {
        return super.getUpgradePrice(100, 100);
    }

    getUpgradeText() {
        return super.getUpgradeText("Camo Detection", "Armor Piercing Rounds");
    }

    upgrade() {
        super.upgrade();
        switch (this.rank) {
            case 2:
                this.detectCamo = true;
                break;
            case 3:
                this.armorPiercing = true;
            default:
                break;
        }
    }
}