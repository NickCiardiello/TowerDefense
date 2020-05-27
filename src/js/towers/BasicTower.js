import { drawTowerWithRange } from '../utils.js';
export default class BasicTower {
  constructor(context, x, y) {
    this.context = context;
    this.x = x
    this.y = y
    this.radius = 25;
    this.rangeRadius = 125;
    this.color = '#964b00';
  }

  draw() {
    drawTowerWithRange(this);
  }

  update(x, y) {
    this.x = x;
    this.y = y;
    this.draw();
  }

}


