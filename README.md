# Pong Game Starter

A starter project for a basic pong game using SVGs and node.js.

#### Technologies Used

- HTML55
- CSS3
- JavaScript
- SVG

#### Personal Learnings

This project was my first introduction to constructor functions and partials. Constructor functions are a blueprint of your code which enables the developer to create many objects of the same "type, keeping my code organized. I made use of the keyword 'new' to create instances of a new class that already had set properties and parameters. Partials are separate javascript files that communicate with each other to run my pong game.

---

I learned how to create an SVG in JavaScript, translate all its properties by using the method setAttributeNS and createElementNS to give it shape, and then render it in HTML.

---

I learned to use document.addEventListener to hear for certain key presses, and defining the keys in my setings.js file and exporting KEYS.

#### Additional Functionality

* In my Game constructor, I set ```this.gameOn = true``` so that the game does not start right away and is actually paused

* The game runs for the length of the music and then will automatically refresh the page using the ```setTimeout``` and ```location.reload()``` method. See lines 65-73 in my Game.js file. If player 1 or player 2 reaches a score of 10, the game is over and then refreshes after 3 seconds  using conditional statements and the ```location.reload()``` and```setTimeout()``` method. Below is an example for player 1:

```javascript
if (this.player1.score == 10) {
      document.getElementById("winner");
      winner.innerText = "SUCKER! PLAYER 1 WINS!";
      setTimeout(refresh => {
        location.reload(true);
      }, 3000);
      return;
    }
```

* I implemented an option to start a new game using KEYS found in my settings.js file. See lines 75-80 in my Game.js file.

* At a specific score, a second and third ball will be spawned to increase the difficulty of the game. See lines 132-139 in my Game.js file. As an example, since my conditional if statement reads:

```javascript
if (this.player1.score == 8 || this.player2.score == 8) {
    // insert code here
}
```
the ball will only appear at that specific score and then will disappear if either player successfully scores with that ball. If you want the ball to remain, change the equality operator (```==```) to the greater than or equal to operator (```>=```). It is important to add ```this.gameOn = false``` so that the pong game continues to run and is not interrupted. 

* I wanted to make my paddles move up and down smoothly. Here is what I did:

1. I createed a keyup listener to handle events dealing with the release of player keys. See lines 30-39 in my Paddle.js file.

2. I used the ```setInterval()``` method to continue calling a function at specified intervals (in milliseconds). If I want to move the paddle all the way up smoothly, the function I want to repeatedly execute is found on lines 43-45 in my Paddle.js file. It will then look like this:

```javascript  
    startUp() {
    if (this.movingUp === null) {
      this.movingUp = setInterval(() => {
        this.up();
      }, this.interval);
      console.log(this.movingUp);
    }
  }
```
3. To stop executing the function, I used the ```clearInterval()``` method. See lines 69-72 where I stop the paddle from moving all the way to top and instead it moves up and stops when I release the appropriate key (see keyup listener function).

BONUS! This gets rid of a supposed bug that prevents both up and down keys from being pressed simultaneously. How serendipitious! Try it out for yourself!

## Setup

Installation of various packages are required to run this game. Ensure you have [Node.js](https://nodejs.org/en/) installed first. Download the project before running the commands listed below:

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Keys

`Player 1`

a: Up

z: Down

`Player 2`

▲: Up

▼: Down

To pause game: press 'spacebar'

To start new game: press 'n'

## Notes

There is no support for mobile or tablet devices as you need to handle key down and key up events.
