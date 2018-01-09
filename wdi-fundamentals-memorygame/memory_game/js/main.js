console.log("Up and running!");
console.log("User flipped queen");
console.log("User flipped king");

// Create variables to store each card
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

// Use console.log() to display the two cards that the user flipped
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []

// Create a variable cardOne to represent the first card the user flipped
var cardOne = cards[0];
// Add card to array of cards that are in play
cardsInPlay.push(cardOne);
// Use console.log() to display the card that the user flipped
console.log("User flipped " + cardOne);

// Create a variable cardTwo to represent the second card the user flipped
var cardTwo = cards[2];
// Add card to array of cards that are in play
cardsInPlay.push(cardTwo);
// Use console.log() to display the card that the user flipped
console.log("User flipped " + cardTwo);

// Check to see if two cards have been played
if (cardsInPlay.length === 2); 

  // Check to see if two cards match and provide feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }

// Create an array to store all cards
var cards = ['queen', 'queen', 'king', 'king'];

// Create an array to store the cards in play
var cardsInPlay = [];

// Create a function to check for a match
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");

  }
};

// Create a function to represent a user flipping a card
var flipCard = function (cardId) {

  // Display the card the user just flipped in the console.
  console.log("User flipped " + cards[cardId].rank);

  // Add card to array of cards that are in play
  cardsInPlay.push(cards[cardId]);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
  }
};

// Create an array to store all card objects
var cards = [
  {
    card: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
}
];

// Create an array to store the cards in play
var cardsInPlay = [];

// Create a function to check for a match
var checkForMatch = function () {
  // Check to see if two cards match and provide feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
};

// Create a function to represent a user flipping a card
var flipCard = function (cardId) {

  // Display the card the user just flipped in the console.
  console.log("User flipped " + (cards[cardId].rank));

  // Add card to array of cards that are in play
  cardsInPlay.push(cards[cardId].card);

  // Display the image path in the console
  console.log(cards[cardId].cardImage)

  // Display the suit in the console
  console.log(cards[cardId].suit)

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
    // Empty cards in play array for next try
    cardsInPlay = [];
  }
};


// Create an array to store all card objects
var cards = [
  {
    card: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    card: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    card: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    card: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

// Create an array to store the cards in play
var cardsInPlay = [];

// Create a function to check for a match
var checkForMatch = function () {
  // Check to see if two cards match and provide feedback to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
};

// Create a function to represent a user flipping a card
var flipCard = function () {
  // Get the data-id of the card that was just flipped and cache it
  cardId = this.getAttribute('data-id');
  console.log(cardId);

  // Add card to array of cards that are in play
  cardsInPlay.push(cards[cardId].card);

  // Display the card's image
  this.setAttribute('src', cards[cardId].cardImage);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
    // Empty cards in play array for next try
    cardsInPlay = [];
  }
};

// Function that will create your board
var createBoard = function () {
  // Loop through your cards array to create card elements for your board
  for (var i = 0; i < cards.length; i++) {
    // Create an img element which will be used as a card
    var cardElement = document.createElement('img');

    // Set the src attribute to display the back of card image
    cardElement.setAttribute('src', 'images/back.png');

		// Set the card's 'data-id' attribute to be the index of the current element
    // data- attributes are meant to store data about an element that is not tied to a style.
    cardElement.setAttribute('data-id', i);

		// Add an event listener so that when a card is clicked, 
    // the function flipCard will be executed
    cardElement.addEventListener('click', flipCard);

    // Append the card to the board
    document.getElementById('game-board').appendChild(cardElement);

  }

}

// Call the createBoard function to create the board.
createBoard();




    

 
