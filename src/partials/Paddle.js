import { SVG_NS } from "../settings";
import { setInterval } from "timers";

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
    this.interval = 30;

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
    this.paddle = setInterval(() => {
      this.up();
    }, this.interval);
  }

  startDown() {
    this.paddle = setInterval(() => {
      this.down();
    }, this.interval);
  }

  stopUp() {
    clearInterval(this.startUp)
    }

  stopDown() {
    clearInterval(this.startDown) 
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
    let rect = document.createElementNS(SVG_NS, "rect");

    rect.setAttributeNS(null, "fill", "white");
    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    svg.appendChild(rect);
  }
}
