import { context } from '../Constants';
export default class Square {
    constructor(color, step, armorMultiplier) {
        this.step = step;
        this.x = 0;
        this.y = 0;
        this.alive = true;
        this.damage = 15;
        this.armorMultiplier = armorMultiplier;
        this.isCamo = false;
        switch (color) {
            case "gray":
                this.speed = 2;
                this.height = 60;
                this.width = 60;
                this.color = 'gray';
                break;
            case "black":
                this.speed = 4;
                this.height = 40;
                this.width = 40;
                this.color = 'black';
                break;
            default:
                this.speed = 0;
                this.height = 0;
                this.width = 0;
                this.color = 'black';
        }
    }

    move() {
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.x, this.y, this.width, this.height);
        context.fill();
        if (this.armorMultiplier > 1) {
            context.lineWidth = 5;
            context.strokeStyle = "black";
            context.stroke();
        }
        context.closePath();
    }

    update(x, y) {
        this.x = x;
        this.y = y;
        this.step += this.speed;
    }

    hit(damageTaken) {
        damageTaken *= 0.5 / this.armorMultiplier;
        this.height -= damageTaken;
        this.width -= damageTaken;
        if (this.height <= 0 || this.width <= 0) {
            this.alive = false;
        }
    }
}

