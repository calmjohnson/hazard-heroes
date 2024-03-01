//define game state
let gameState = "roll";

//create an empty images array to hold square images
let images = [];

//create an empty solutions array to hold hazard solutions
let solutions = [];

//define dice cordinates and size
let die = { x: 970, y: 550, s: 50 };

//define the players
let player1;
let player2;
let player3;

//set player turn and die roll
let playerTurn = 1;
let dieRoll = 0;
let latestPostion;

//message to display as game progresses
let message =
  "Welcome to Hazard Heroes, player 1 roll the dice to move along the board";

//preload image assets for the game
function preload() {
  //load backaground image, dice and logo
  bgImage = loadImage("assets/bg.png");
  logo = loadImage("assets/logo.png");

  //use a for loop to preload square images and hazard solutions into the images and solutions array
  for (let i = 0; i < squares.length - 2; i++) {
    images.push(loadImage("assets/" + i + ".png"));
    solutions.push(loadImage("assets/solution" + i + ".png"));
  }
}

function setup() {
  //create a fullscreen canvas with a background image
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.style("display", "block");

  //create player objects
  player1 = new Player();
  player2 = new Player();
  player3 = new Player();

  //set initial positions
  player1.x = 900;
  player1.y = 600;
  player2.x = 900;
  player2.y = 550;
  player3.x = 900;
  player3.y = 500;

  //load player images
  player1.image = loadImage("assets/player1.png");
  player2.image = loadImage("assets/player2.png");
  player3.image = loadImage("assets/player3.png");
}

function draw() {
  background("#ffffff");

  //draw game background
  //imageMode(CENTER);
  //filter(OPAQUE);
  //image(bgImage, 800, 1000);

  //draw the game logo at the top left corner of the canvas
  image(logo, 150, 70, 220, 180);

  //image(bgImage, [50]);

  noStroke();
  //draw board
  board();

  //draw players
  player1.show();
  player2.show();
  player3.show();

  //draw game message
  gameMessage();

  //draw scores
  scores();

  if (gameState === "roll") {
    //draw the dice
    dice();
  } else if (gameState === "hazard") {
    //draw hazard and corresponding solution
    imageMode(CENTER);
    image(images[latestPostion - 2], 920, 200, 250, 350);
    image(solutions[latestPostion - 2], 1180, 200, 250, 350);

    //Draw hazard text
    fill(squares[latestPostion - 1].color);
    rect(795, 350, 250, 50);

    fill("white");
    textSize(11);
    textStyle(BOLD);
    text(squares[latestPostion - 1].hazard, 797, 355, 250, 50);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function gameMessage() {
  fill("#1c1917");
  textFont("Verdana", 10);
  textSize(15);
  text(message, 340, 590, 500);
}

function board() {
  /**
   * Start drawing squares
   */

  //create a loop to draw 24 squares on the canvas using the letter i to represent the squares
  for (let i = 0; i < squares.length; i++) {
    fill(squares[i].color);
    //draw square
    square(squares[i].x, squares[i].y, 70);
  }
  //end loop

  //use a for loop to draw corresponding image ontop square
  for (let i = 0; i < squares.length - 2; i++) {
    imageMode(CENTER);
    image(images[i], squares[i + 1].x + 35, squares[i + 1].y + 35, 60, 60);
  }

  //Start Text
  fill("white");
  textSize(20);
  textStyle("normal");
  text("Start", 210, 590);

  //End Text
  fill("white");
  textSize(20);
  textStyle("normal");
  text("End", 700, 310);
}

function scores() {
  textSize(20);
  textStyle(BOLD);

  //display Player One's tokens
  fill("#b91c1c");
  text("Player One: " + player1.tokens, 1100, 600);

  //display Player Two's tokens
  fill("#15803d");
  text("Player Two: " + player2.tokens, 1100, 550);

  //display Player Three's tokens
  fill("#a16207");
  text("Player Three: " + player3.tokens, 1100, 500);
}

function dice() {
  fill("#b91c1c");
  square(die.x, die.y, die.s, 10);

  fill("white");
  //draw the die roll onto the dice
  for (let i = 0; i < dieRoll; i++) {
    circle(die.x + 25, die.y + 20 + i * 10, 10);
  }
}

function Player() {
  this.position = 0;
  this.x = 0;
  this.y = 0;
  this.tokens = 0;
  this.state = "";
  this.image;

  this.show = function () {
    image(this.image, this.x, this.y, 90, 120);
  };
}

// Function to move player after die roll
function movePlayer() {
  if (playerTurn === 1) {
    //make sure player can't go past the last square
    if (player1.position + dieRoll <= squares.length) {
      player1.position = player1.position + dieRoll;

      player1.x = squares[player1.position - 1].x + 20;
      player1.y = squares[player1.position - 1].y + 20;
    }

    //check if player has reached the end of the board
    if (player1.position === squares.length) {
      gameOver();
    } else {
      //make player deal with hazard
      handleHazard();
    }
  } else if (playerTurn === 2) {
    //make sure player can't go past the last square
    if (player1.position + dieRoll <= squares.length) {
      player2.position = player2.position + dieRoll;

      player2.x = squares[player2.position - 1].x + 20;
      player2.y = squares[player2.position - 1].y + 20;
    }

    //check if player has reached the end of the board
    if (player2.position === squares.length) {
      gameOver();
    } else {
      //make player deal with hazard
      handleHazard();
    }
  } else if (playerTurn === 3) {
    //make sure player can't go past the last square
    if (player3.position + dieRoll <= squares.length) {
      player3.position = player3.position + dieRoll;

      player3.x = squares[player3.position - 1].x + 20;
      player3.y = squares[player3.position - 1].y + 20;
    }

    //check if player has reached the end of the board
    if (player3.position === squares.length) {
      gameOver();
    } else {
      //make player deal with hazard
      handleHazard();
    }
  }
}

// Function to handle hazard
function handleHazard() {
  if (playerTurn === 1) {
    if (player1.position === 1) {
      message =
        "Player " +
        playerTurn +
        " rolled a " +
        dieRoll +
        " no hazard here. Player 2 roll dice to move along the board.";
      playerTurn = 2;
    } else {
      message =
        "Player " +
        playerTurn +
        " rolled a " +
        dieRoll +
        " and is dealing with a hazard... Click on the solution when done.";
      gameState = "hazard";
    }
    latestPostion = player1.position;
  } else if (playerTurn === 2) {
    if (player2.position === 1) {
      message =
        "Player " +
        playerTurn +
        " rolled a " +
        dieRoll +
        " no hazard here. Player 3 roll dice to move along the board.";
      playerTurn = 3;
    } else {
      message =
        "Player " +
        playerTurn +
        " rolled a " +
        dieRoll +
        " and is dealing with a hazard... Click on the solution when done.";
      gameState = "hazard";
    }
    latestPostion = player2.position;
  } else if (playerTurn === 3) {
    if (player3.position === 1) {
      message =
        "Player " +
        playerTurn +
        " rolled a " +
        dieRoll +
        " no hazard here. Player 1 roll dice to move along the board.";
      playerTurn = 1;
    } else {
      message =
        "Player " +
        playerTurn +
        " rolled a " +
        dieRoll +
        " and is dealing with a hazard... Click on the solution when done.";
      gameState = "hazard";
    }
    latestPostion = player3.position;
  }
}

// Game over function
function gameOver() {
  message = "Game over! Thanks for playing. Refresh browser to play again.";
  //reset game
  playerTurn = 1;
  dieRoll = 0;
  latestPostion = null;
  gameState = "toll";
}

// Mouse pressed function for handling die roll and other click in game
function mousePressed(event) {
  diceDistance = dist(mouseX, mouseY, 1000, 600);
  solutionDistance = dist(mouseX, mouseY, 1180, 200);

  //Check if the dice has been clicked
  if (diceDistance < 50) {
    //Assign a random number between 1 and 3 to the dieRoll
    dieRoll = floor(random(0, 3) + 1);

    //Move player
    movePlayer();
  }

  //Check if the solution has been clicked
  if (solutionDistance < 250) {
    if (playerTurn === 1) {
      player1.tokens = player1.tokens + 2;
      playerTurn = 2;
    } else if (playerTurn === 2) {
      player2.tokens = player2.tokens + 2;
      playerTurn = 3;
    } else if (playerTurn === 3) {
      player3.tokens = player3.tokens + 2;
      playerTurn = 1;
    }

    gameState = "roll";
    dieRoll = 0;
    message = "Player " + playerTurn + " roll the dice to move along the board";
  }
}
