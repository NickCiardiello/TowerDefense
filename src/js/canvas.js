
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

const path = 'm-0.5,54.45313c0,0 1,0 3,0c1,0 3,0 7,0c2,0 5,0 9,0c3,0 5,0 8,0c3,0 6,0 9,0c4,0 8,0 11,0c2,0 6,0 8,0c1,0 3,0 5,0c2,0 4,-1 7,-1c4,0 7,0 10,0c4,0 8,0 11,0c3,0 6,0 9,0c2,0 4,0 6,0c2,0 4,0 6,0c2,0 4,0 7,0c2,0 4,0 6,0c4,0 7,0 9,0c3,0 6,0 9,0c2,0 6,0 8,0c2,0 4,0 6,0c3,0 6,0 9,0c3,0 6,0 9,0c3,0 6,0 11,0c3,0 5.82375,0.48626 8,1c2.91975,0.68926 4.87856,0.49346 8,1c1.97418,0.32037 5.03874,0.51945 8,1c3.12144,0.50654 6,1 10,1c7,0 12,0 17,0c7,0 13,0 20,0c6,0 12,0 16,0c5,0 9,0 13,0c6,0 10,0 14,0c4,0 7,0 10,0c2,0 4,0 6,0c2,0 5,0 7,0c4,0 5,0 9,0c4,0 7,0 10,0c3,0 7,0 10,0c3,0 5,0 8,0c2,0 4,0 9,0c3,0 7,0 10,0c4,0 7,0 10,0c4,0 7,0 10,0c3,0 6,0 11,0c2,0 4,0 6,0c2,0 5,0 8,0c3,0 6,0 8,0c3,0 5,0 7,0c4,0 6.0535,0.54049 8,1c2.17624,0.51374 3.15225,1.23463 5,2c1.30655,0.54119 2.82376,1.48626 5,2c0.97324,0.22975 2.0535,0.54049 4,1c2.17624,0.51374 4.0535,0.54049 6,1c2.17624,0.51374 3.82376,1.48626 6,2c1.9465,0.4595 4.82376,0.48626 7,1c2.91974,0.68926 5,0 6,1c1,1 3.69345,1.4588 5,2c1.84775,0.76537 2.69345,1.4588 4,2c0.92389,0.38268 2,1 3,2c1,1 1.61731,2.07612 2,3c0.5412,1.30656 1.69254,2.186 3,4c0.8269,1.14727 1.5405,2.0535 2,4c0.51373,2.17625 0.5405,3.0535 1,5c0.51373,2.17625 1,4 1,6c0,2 1,4 1,7c0,2 0,4 0,6c0,3 0,4 0,5c0,3 0,4 0,5c0,2 -0.22977,4.02675 0,5c0.51373,2.17625 1,4 1,6c0,1 0,3 0,5c0,2 0,3 0,5c0,2 0,4 0,5c0,2 0.4595,5.0535 0,7c-0.51373,2.17625 -0.5405,3.0535 -1,5c-0.51373,2.17625 -1.5405,3.0535 -2,5c-0.51373,2.17625 -2,3 -2,5c0,2 -1.5405,4.0535 -2,6c-0.51373,2.17625 -1.77023,4.02675 -2,5c-0.51373,2.17625 -0.69254,5.186 -2,7c-0.8269,1.14726 -1.69254,3.186 -3,5c-0.8269,1.14726 -2.1731,1.85274 -3,3c-1.30746,1.814 -2,3 -2,3c-1,1 -2.4588,1.69344 -3,3c-0.38269,0.92387 -1,1 -3,2c0,0 -3,1 -5,2c-4,2 -6.0535,2.5405 -8,3c-2.17624,0.51375 -3.93414,1.14429 -6,2c-2.92157,1.21014 -5.82376,1.48625 -8,2c-3.89301,0.91901 -6.87857,0.49345 -10,1c-7.8967,1.28146 -13,0 -19,0c-4,0 -7,0 -10,0c-3,0 -6,0 -8,0c-3,0 -5,0 -7,0c-3,0 -7,0 -11,0c-4,0 -8,0 -12,0c-4,0 -9,0 -13,0c-5,0 -9,0 -13,0c-5,0 -10,0 -18,0c-7,0 -13,0 -20,0c-6,0 -10,0 -15,0c-6,0 -11,0 -16,0c-5,0 -11,0 -18,0c-4,0 -10,0 -17,0c-6,0 -12.9258,0.49756 -18,1c-3.98053,0.39415 -8,1 -12,1c-4,0 -8,0 -14,0c-6,0 -15,0 -19,0c-5,0 -11,0 -17,0c-5,0 -10,0 -15,0c-4,0 -10,0 -14,0c-5,0 -12,0 -16,0c-4,0 -8,0 -12,0c-4,0 -7,0 -11,0c-4,0 -7,0 -11,0c-4,0 -8,0 -12,0c-3,0 -7,0 -11,0c-3,0 -6,0 -8,0c-2,0 -5,0 -8,0c-3,0 -6,0 -9,0c-4,0 -7,0 -9,0c-4,0 -7,0 -9,0c-2,0 -4.02675,-0.22975 -5,0c-2.17625,0.51375 -4,1 -5,1c-1,0 -3,0 -4,0c-2,0 -3,0 -3,0c-1,0 -1,0 -1,0c-1,0 -1,0 -1,0c0,0 -1,0 -1,0c0,0 -1,0 -2,0c0,0 0,0 -1,0c0,0 0,0 0,0c-1,0 -2,0 -2,0l0,0l-1,0l0,0';

const pathElement = document.createElementNS('http://www.w3.org/2000/svg',"path");
pathElement.setAttributeNS(null, 'd', path);

function Circle(radius, speed, color, step) {
    this.radius = radius;
    this.speed = speed;
    this.color = color;
    this.step = 0;
    let x;
    let y;
}

let circles = [];
circles[0] = new Circle(50, 1, 'green');
circles[1] = new Circle(40, 2, 'red');
circles[2] = new Circle(40, 5, 'yellow');

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = '#d3d3d3';
    context.arc(200, 150, 125, 0, Math.PI * 2, false);
    context.fill();
    context.closePath();
    context.beginPath();
    context.fillStyle = "#964b00";
    context.arc(200, 150, 25, 0, Math.PI * 2, false);
    context.fill();
    context.closePath();
    context.beginPath();
    context.strokeStyle = '#000';
    context.lineWidth = 1;
    let p = new Path2D(path);
    context.stroke(p);
    context.closePath();

    for (let i = 0; i < circles.length; i++) {
        let x = parseInt(pathElement.getPointAtLength(circles[i].step).x);
        let y = parseInt(pathElement.getPointAtLength(circles[i].step).y);
        circles[i].x = x;
        circles[i].y = y;
        move(x, y, circles[i].radius, circles[i].color);
        circles[i].step += circles[i].speed;
    }

    for (let i = circles.length - 1; i >= 0; i--) {
        if (circles[i].radius > 0 && getDistance(circles[i].x, 200, circles[i].y, 150) < 125) {
            context.beginPath();
            context.moveTo(200, 150);
            context.lineTo(circles[i].x, circles[i].y);
            context.stroke();
            circles[i].radius -= 0.5;
            break;
        }
    }
}
animate();

function move(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color
    context.fill();
    context.closePath();
}

function getDistance(x1, x2, y1, y2) {
    let a = x1 - x2;
    let b = y1 - y2;
    return Math.sqrt( a * a + b * b );
}
