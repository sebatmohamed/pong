import { SVG_NS } from "../settings";

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down, color, border) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.border = border;
    this.speed = 30;
    this.score = 0;
    this.interval = 15;
    this.movingUp = null;
    this.movingDown = null;

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case up:
          this.startUp();
          break;
        case down:
          this.startDown();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.key) {
        case up:
          this.stopUp();
          break;
        case down:
          this.stopDown();
          break;
      }
    });
  }

  up() {
    this.y = Math.max(0, this.y - this.speed);
  }

  down() {
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
  }

  startUp() {
    if (this.movingUp === null) {
      this.movingUp = setInterval(() => {
        this.up();
      }, this.interval);
    }
  }

  startDown() {
    if (this.movingDown === null) {
      this.movingDown = setInterval(() => {
        this.down();
      }, this.interval);
    }
  }

  stopUp() {
    clearInterval(this.movingUp);
    this.movingUp = null;
  }

  stopDown() {
    clearInterval(this.movingDown);
    this.movingDown = null;
  }

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  render(svg) {
    let paddlerect = document.createElementNS(SVG_NS, "rect");

    paddlerect.setAttributeNS(null, "fill", this.color);
    paddlerect.setAttributeNS(null, "stroke", this.border);
    paddlerect.setAttributeNS(null, "x", this.x);
    paddlerect.setAttributeNS(null, "y", this.y);
    paddlerect.setAttributeNS(null, "width", this.width);
    paddlerect.setAttributeNS(null, "height", this.height);
    svg.appendChild(paddlerect);
  }
}
