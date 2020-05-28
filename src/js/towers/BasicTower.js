import {drawTower, drawTowerFull, drawTowerRange} from "../Draw";

export default class BasicTower {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.radius = 25;
    this.rangeRadius = 125;
    this.color = '#964b00';
    this.damage = 0.5;
    this.price = 100;
  }

  drawTower() {
    drawTower(this);
  }

  drawTowerFull() {
    drawTowerFull(this);
  }

  drawTowerRange() {
    drawTowerRange(this);
  }

  update(x, y) {
    this.x = x;
    this.y = y;
  }
}


