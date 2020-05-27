export default class Square {
    constructor(context, color) {
        this.context = context;
        this.step = 0;
        this.x = 0;
        this.y = 0;
        this.alive = true;
        switch (color) {
            case "red":
                this.speed = 3;
                this.height = 60;
                this.width = 60;
                this.color = 'red';
                break;
            case "gray":
                this.speed = 1;
                this.height = 40;
                this.width = 40;
                this.color = 'gray';
                break;
            default:
                this.speed = 0;
                this.height = 0;
                this.width = 0;
                this.color = 'black';
        }
    }

    move() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fill();
        this.context.closePath();
    }

    update(x, y) {
        this.x = x;
        this.y = y;
        this.step += this.speed;
    }

    hit(damage) {
        this.height -= damage;
        this.width -= damage;
        if (this.height <= 0 || this.width <= 0) {
            this.alive = false;
        }
    }
}

