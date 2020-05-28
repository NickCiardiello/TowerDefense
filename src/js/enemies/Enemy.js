import {drawEnemy} from "../Draw";

// Shape is health and speed multiplier, color is base speed
export default class Enemy {
    constructor(shape, color, step, speedMultiplier, healthMultiplier, armorMultiplier, camo) {
        this.shape = shape;
        this.step = step;
        this.speedMultiplier = speedMultiplier;
        this.x = 0;
        this.y = 0;
        this.alive = true;
        this.damage = 10;
        this.camo = camo;
        this.baseRadius = 20;
        this.radius = 20;
        this.speed = 1;
        switch (shape) {
            case "circle":
                this.baseHealth = 20 * healthMultiplier;
                this.health = this.baseHealth;
                break;
            case "square":
                this.baseHealth = 60 * healthMultiplier;
                this.health = this.baseHealth;
                this.speedMultiplier *= 0.5
                break;
            default:
                this.baseHealth = 0;
                this.health = this.baseHealth;
                break;
        }
        switch (color) {
            case "red":
                healthMultiplier > 1 ? this.color = 'darkred' : this.color = 'red';
                this.speed = 3 * this.speedMultiplier;
                break;
            case "yellow":
                healthMultiplier > 1 ? this.color = 'khaki' : this.color = 'yellow';
                this.speed = 5 * this.speedMultiplier;
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
        this.health -= damageTaken;
        this.radius = this.health / this.baseHealth * this.baseRadius;
        if (this.radius <= 0) {
            this.alive = false;
        }
    }
}

