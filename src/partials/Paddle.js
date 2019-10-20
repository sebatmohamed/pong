import { SVG_NS } from "../settings";

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 30;
    this.score = 0;
    this.interval = 30;
    this.movingUp = null
    this.movingDown = null

    document.addEventListener("keydown", event => {
      console.log(event);
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
      console.log(event);
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

  startUp() {
    if (this.movingUp === null) {
      this.movingUp = setInterval(() => {
        this.up();
      }, this.interval);
      console.log(this.movingUp);
    }
  }

  startDown() {
    if (this.movingDown === null) {
      this.movingDown = setInterval(() => {
        this.down();
      }, this.interval);
      console.log(this.movingDown);
    }
  }

  stopUp() {
    clearInterval(this.movingUp);
    this.movingUp = null
  }

  stopDown() {
    clearInterval(this.movingDown);
    this.movingDown = null
  }

  up() {
    this.y = Math.max(0, this.y - this.speed);
  }

  down() {
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
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

    paddlerect.setAttributeNS(null, "fill", "white");
    paddlerect.setAttributeNS(null, "x", this.x);
    paddlerect.setAttributeNS(null, "y", this.y);
    paddlerect.setAttributeNS(null, "width", this.width);
    paddlerect.setAttributeNS(null, "height", this.height);
    svg.appendChild(paddlerect);
  }
}
