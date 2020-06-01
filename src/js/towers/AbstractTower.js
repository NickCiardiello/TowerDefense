import {drawText, drawTower, drawTowerRange} from "../Draw";
import {getDistance} from "../utils";

export default class AbstractTower {
    x = 0;
    y = 0;
    radius = 15;
    rangeRadius = 0;
    color = '#fff';
    damage = 0;
    numTargets = 1
    rank = 1;
    detectCamo = false;
    armorPiercing = false;
    isSelected = false;

    drawTower() {
        drawTower(this);
        drawText(this.rank, this.x, this.y);
    }

    drawTowerRange() {
        drawTowerRange(this);
    }

    update(x, y) {
        this.x = x;
        this.y = y;
    }

    canHit(enemy) {
        return getDistance(this.x, this.y, enemy.x, enemy.y) < this.rangeRadius && enemy.step >= 0;
    }

    hit(enemy) {
        if (enemy.hasArmor) {
            enemy.armorHealth -= this.damage *= this.armorPiercing ? 2 : 0.5;
            enemy.armorWidth = enemy.armorWidth / enemy.baseArmorHealth * enemy.baseArmorWidth;
            if (enemy.armorHealth <= 0) {
                enemy.hasArmor = false;
            }
        } else {
            enemy.health -= this.damage;
            enemy.radius = enemy.health / enemy.baseHealth * enemy.baseRadius;
            if (enemy.radius <= 0) {
                enemy.alive = false;
            }
        }
    }

    getUpgradePrice(rank2Price, rank3Price) {
        switch (this.rank) {
            case 1:
                return rank2Price;
            case 2:
                return rank3Price;
            default:
                return "";
        }
    }

    getUpgradeText(rank2Upgrade, rank3Upgrade) {
        switch (this.rank) {
            case 1:
                return rank2Upgrade;
            case 2:
                return rank3Upgrade;
            default:
                return "Fully Upgraded";
        }
    }

    upgrade() {
        this.rank++;
    }
}

