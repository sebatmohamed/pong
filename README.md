# Pong Game Starter

A fun, basketball inspired starter project for a basic pong game using SVGs and JS OOP.

!("https://github.com/sebatmohamed/pong-game/blob/master/ponggame.png")

## Setup

Installation of various packages are required to run this game. Ensure you have [Node.js](https://nodejs.org/en/) installed first. Download the project before running the commands listed below:

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

After you have downloaded the project, navigate to your project directory and open the terminal.

Run yarn start. You can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

#### Technologies Used

- HTML55
- CSS3
- JavaScript
- SVG
- node.js
- yarn
- Git

## Keys to play the game

To pause/start game: press 'spacebar'

To start new game: press 'n'

`Player 1`

a: Up

z: Down

`Player 2`

▲: Up

▼: Down

#### Personal Learnings

- Constructor functions and partials
- Creating an SVG, translating all its properties by using the method setAttributeNS and createElementNS
- Using event listeners to hear for certain key presses and releases, and defining the keys in my setings.js file and exporting KEYS
- First time cloning a project and thus learned the difference between cloning a repository and creating my own. Cloned repositories already have a git repository initialized. I now know to delete previously initialized git repositories so that I don't clone past commits and files that aren't mine.

#### Additional Functionality

- In my Game constructor, I set `this.gameOn = true` so that the game does not start right away and is actually paused

- I wanted to increase difficulty of the game, so after a specific score the paddle heights of both players will shrink. See lines 154-164 of my Game.js file. I had to pass through these shrinking player classes through my Ball.js file so that these new paddles could also participate in ball-paddle collison.

- The game runs for the length of the music and then will automatically refresh the page using the `setTimeout` and `location.reload()` method. See lines 91-99 in my Game.js file. If player 1 or player 2 (regular or shrinking) reaches a score of 10, the game is over and then refreshes after 3 seconds using conditional if statements and the `location.reload()` and`setTimeout()` method. Below is an example for player 1:

```javascript
if (this.player1.score == 10 || this.player1shrink.score == 10) {
  document.getElementById("winner");
  winner.innerText = "SUCKER! PLAYER 1 WINS!";
  setTimeout(refresh => {
    location.reload(true);
  }, 3000);
  return;
}
```

- I implemented an option to start a new game using KEYS found in my settings.js file. See lines 101-106 in my Game.js file.

- At a specific score, a second and third ball will be spawned to increase the difficulty of the game. See lines 170-174 in my Game.js file. As an example, since my conditional if statement reads:

```javascript
if (this.player1shrink.score == 7 || this.player2shrink.score == 7) {
  // insert code here
}
```

the additional ball will only appear at that specific score and then will disappear if either player successfully scores with that ball. If you want the ball to remain, change the equality operator (`==`) to the greater than or equal to operator (`>=`). The initial ball remains rendered and is not affected.

- I wanted to make my paddles move up and down smoothly. BONUS! This gets rid of a bug that prevents both up and down keys from being pressed simultaneously. Try it out for yourself!

  1. I createed a keyup listener to handle events dealing with the release of player keys. See lines 29-39 in my Paddle.js file.

  2. I used the `setInterval()` method to continue calling a function once every 15 miliseconds. If I want to move the paddle all the way up smoothly, the function I want to repeatedly execute is found on lines 41-43 in my Paddle.js file. It will then look like this:

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

  3. To stop executing the function, I used the `clearInterval()` method. See lines 65-68 where I stop the paddle from moving all the way to top and instead it moves up and stops when I release the appropriate key (see keyup listener function).

## Notes

There is no support for mobile or tablet devices as you need to handle key down and key up events.
