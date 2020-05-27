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
    this.context.beginPath()
    this.context.arc(this.x, this.y, this.rangeRadius, 0, Math.PI * 2, false)
    this.context.fillStyle = '#d3d3d3';
    this.context.fill()
    this.context.closePath()
    this.context.beginPath()
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.context.fillStyle = this.color
    this.context.fill()
    this.context.closePath()
  }

  update() {
    this.draw()
  }
}



