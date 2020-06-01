import {drawEnemy} from "../Draw";
import {EnemyType} from "../Constants";

// Shape is health and base speed, speedMultiplier which determines color
export default class Enemy {
    constructor(shape, speedMultiplier, step, armorMultiplier, camo) {
        this.shape = shape;
        this.step = step;
        this.baseSpeed = 0;
        this.speed = 1;
        this.speedMultiplier = speedMultiplier;
        this.baseArmorHealth = 5;
        this.armorHealth = this.baseArmorHealth * armorMultiplier;
        this.baseArmorWidth = 2;
        this.armorWidth = this.armorHealth / 5 * this.baseArmorWidth;
        this.hasArmor = armorMultiplier > 0;
        this.x = 0;
        this.y = 0;
        this.alive = true;
        this.damage = 10;
        this.camo = camo;
        this.baseRadius = 20;
        this.radius = 20;
        switch (shape) {
            case EnemyType.CIRCLE:
                this.baseHealth = 20;
                this.baseSpeed = 3;
                break;
            case EnemyType.SQUARE:
                this.baseHealth = 60;
                this.baseSpeed = 1
                break;
            default:
                this.baseHealth = 0;
                break;
        }
        this.health = this.baseHealth;
        this.speed = this.baseSpeed * this.speedMultiplier;
        switch (speedMultiplier) {
            case 1:
                this.color = 'red';
                break;
            case 5:
                this.color = 'yellow';
                break;
            default:
                this.color = 'black';
                this.radius = 0;
                this.rangeRadius = 0;
                this.color = '#000';
        }
    }

    move() {
        drawEnemy(this);
    }

    update(x, y) {
        this.x = x;
        this.y = y;
        this.step += this.speed;
    }


    hit(damageTaken) {
        if (this.hasArmor) {
            this.armorHealth -= damageTaken;
            this.armorWidth = this.armorHealth / this.baseArmorHealth * this.baseArmorWidth;
            if (this.armorHealth <= 0) {
                this.hasArmor = false;
            }
        } else {
            this.health -= damageTaken;
            this.radius = this.health / this.baseHealth * this.baseRadius;
            if (this.radius <= 0) {
                this.alive = false;
            }
        }
    }
}

