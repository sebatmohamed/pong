# Pong Game Starter

A starter project for a basic pong game using SVGs and node.js.

#### Technologies Used

* HTML
* CSS
* JavaScript

#### Personal Learnings

1. This project was my first introduction to constructor functions and partials. Constructor functions are a blueprint of your code which enables the developer to create many objects of the same "type, keeping my code organized. I made use of the keyword 'new' to create instances of a new class that already had set properties and parameters. Partials are  separate javascript files that communicate with each other to run my pong game. Here is a representation of what is goin on:

![Javascript partials funneling into constructor property(Game.js)](outline.png)

2. I learned how to create an SVG in JavaScript, translate all its properties by giving it setAttributeNS and using createElementNS to give it shape, and then render it in HTML. 

3. I learned to use document.addEventListener to hear for certain key presses, and defining the keys in my setings.js file and exporting KEYS.


## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).




