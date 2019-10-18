import {SVG_NS, KEYS} from "../settings";
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

    // creates a new instance of board. height and width passed through from Game object
    this.board = new Board(this.width, this.height);

    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;

    // create ball

    
    this.ball = new Ball(10, this.width, this.height, 'red')

    setTimeout(function(){
      this.newball = new Ball(10, this.width, this.height, 'white')
    }, 1000)
  

    // this.ball2 = new Ball(10, this.width, this.height, 'white')
    
   // create player1 paddle
    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
    ((this.height - this.paddleHeight) / 2),
    KEYS.a,
    KEYS.z
    )

   // create player2 paddle
    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      ((this.width - this.boardGap - this.paddleWidth)),
      ((this.height - this.paddleHeight) / 2),
      KEYS.up,
      KEYS.down
    )

    this.score1 = new Score(this.width / 2 - 50, 30, 30)
    this.score2 = new Score(this.width / 2 + 25, 30, 30)

    document.addEventListener('keydown', event => {
      switch(event.key) {
        case KEYS.spacebar:
          this.gameOn = !this.gameOn
          this.player1.speed = 10
          this.player2.speed = 10
          document.getElementById('music').play()
          break
      }
    })
    const name = document.getElementById("name")
    name.innerText = "Toronto Raptors PONG!"

    const startGame = document.getElementById("game")
    startGame.innerText = "PRESS SPACE FOR TIP OFF"

    setTimeout((end) => {
      document.getElementById('end').innerText = "GAME OVER"
      this.gameOn = true
    }, 70200);
  }

  render() {

    if(this.gameOn) {
      this.player1.speed = 0
      this.player2.speed = 0
    return
    }

    if(this.player1.score === 5) {
      document.getElementById('winner')
      winner.innerText = "PLAYER 1 WINS!"
      return
    } 
    
    if(this.player2.score === 5) {
      document.getElementById('winner')
      winner.innerText = "PLAYER 2 WINS!"
      return
    }

    let svg = document.createElementNS(SVG_NS, "svg");

    this.gameElement.innerHTML = "";

    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    this.board.render(svg)
    this.player1.render(svg)
    this.player2.render(svg)

    this.ball.render(svg, this.player1, this.player2)

    setTimeout(function(){
      this.newball = new Ball(10, this.width, this.height, 'white')
    }, 1000)

    this.score1.render(svg, this.player1.score)
    this.score2.render(svg, this.player2.score)

  }
}
