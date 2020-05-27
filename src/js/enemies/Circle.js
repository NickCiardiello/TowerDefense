export default class Circle {
    constructor(context, color) {
        this.context = context;
        this.step = 0;
        this.x = 0;
        this.y = 0;
        this.alive = true;
        this.damage = 10;
        switch (color) {
            case "blue":
                this.radius = 50;
                this.speed = 5;
                this.color = 'blue';
                break;
            case "yellow":
                this.radius = 30;
                this.speed = 10;
                this.color = 'yellow';
                break;
            default:
                this.radius = 0;
                this.rangeRadius = 0;
                this.color = '#000';
        }
    }

    move() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.context.fill();
        this.context.closePath();
    }

    update(x, y) {
        this.x = x;
        this.y = y;
        this.step += this.speed;
    }

    hit(damageTaken) {
        this.radius -= damageTaken
        if (this.radius <= 0) {
            this.alive = false;
        }
    }
}

