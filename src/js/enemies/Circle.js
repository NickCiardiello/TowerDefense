// import { context } from '../Constants';
// export default class Circle {
//     constructor(color, step, armorMultiplier, isCamo) {
//         this.step = step;
//         this.x = 0;
//         this.y = 0;
//         this.alive = true;
//         this.damage = 10;
//         // switch (color) {
//         //     case "red":
//         //         this.radius = 20;
//         //         this.speed = 3;
//         //         this.color = 'red';
//         //         break;
//         //     case "yellow":
//         //         this.radius = 30;
//         //         this.speed = 10;
//         //         this.color = 'yellow';
//         //         break;
//         //     default:
//         //         this.radius = 0;
//         //         this.rangeRadius = 0;
//         //         this.color = '#000';
//         }
//     }
//
//     move() {
//         context.beginPath();
//         context.fillStyle = this.color;
//         context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//         context.fill();
//         if (this.camo) {
//             context.lineWidth = 5;
//             context.strokeStyle = 'gray';
//             context.stroke();
//         }
//         if (this.armorMultipler > 1) {
//             context.lineWidth = 5;
//             context.strokeStyle = "black";
//             context.stroke();
//         }
//         context.closePath();
//     }
//
//     update(x, y) {
//         this.x = x;
//         this.y = y;
//         this.step += this.speed;
//     }
//
//     hit(damageTaken) {
//         damageTaken /= this.armorMultipler;
//         this.radius -= damageTaken
//         if (this.radius <= 0) {
//             this.alive = false;
//         }
//     }
// }
//
