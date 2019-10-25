import { SVG_NS, KEYS } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Score from "./Score";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameOn = true;

    this.gameElement = document.getElementById(this.element);

    this.board = new Board(this.width, this.height);

    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;

    this.ball = new Ball(12, this.width, this.height, "#CF5300");
    this.ball2 = new Ball(8, this.width, this.height, "#CF5300");
    this.ball3 = new Ball(5, this.width, this.height, "#CF5300");

    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.a,
      KEYS.z,
      "#FFC72C",
      "#1D428A"
    );

    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - this.boardGap - this.paddleWidth,
      (this.height - this.paddleHeight) / 2,
      KEYS.up,
      KEYS.down,
      "white",
      "#CE1141"
    );

    this.score1 = new Score(this.width / 2 - 50, 30, 30);
    this.score2 = new Score(this.width / 2 + 25, 30, 30);

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case KEYS.spacebar:
          startGame.innerText = "";
          this.gameOn = !this.gameOn;
          this.player1.speed = 10;
          this.player2.speed = 10;
          document.getElementById("music").play();

          document.getElementById("game").style.width = "768px";
          document.getElementById("game").style.height = "384px";

          setTimeout(end => {
            document.getElementById("end").innerHTML =
              "GAME OVER! BETTER LUCK NEXT TIME";
            this.gameOn = true;
          }, 77300);

          setTimeout(refresh => {
            location.reload(true);
          }, 80000);

          document.getElementById("new-game").innerHTML =
            "PRESS 'N' FOR NEW GAME";
          break;
        case KEYS.n:
          location.reload(true);
      }
    });

    const name = document.getElementById("name");
    name.innerText = "Toronto Raptors PONG!";

    const startGame = document.getElementById("start");
    startGame.innerText = "PRESS SPACE FOR TIP OFF";
  }

  render() {
    if (this.gameOn) {
      this.player1.speed = 0;
      this.player2.speed = 0;
      return;
    }

    if (this.player1.score == 10) {
      document.getElementById("winner");
      winner.innerText = "SUCKER! PLAYER 1 WINS!";
      setTimeout(refresh => {
        location.reload(true);
      }, 3000);
      return;
    }

    if (this.player2.score == 10) {
      document.getElementById("winner");
      winner.innerText = "SUCKER! PLAYER 2 WINS!";
      setTimeout(refresh => {
        location.reload(true);
      }, 3000);
      return;
    }

    let svg = document.createElementNS(SVG_NS, "svg");

    this.gameElement.innerHTML = "";

    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);

    this.ball.render(svg, this.player1, this.player2);
    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);

    if (this.player1.score == 8 || this.player2.score == 8) {
      this.ball2.render(svg, this.player1, this.player2);
      this.ball3.render(svg, this.player1, this.player2);
      this.gameOn = false;
    } else if (this.player1.score == 4 || this.player2.score == 4) {
      this.ball3.render(svg, this.player1, this.player2);
      this.gameOn = false;
    }
  }
}
