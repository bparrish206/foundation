'use strict';

var Card = require('./cards.js');
var deck = require('./deck.js');
deck.init();

function Blackjack(players, deck){
  var pick, card, currentHand, dealerHand, dealerzHand;
  this.players = players;
  this.deck = deck.cards;
  deck.shuffle();
  this.hand = [];
  this.dealerHand = [];

  this.sum = function(a, b) {
    return (a + b);
  };

  this.rand = function(num) {
    var select;
    select = Math.floor(Math.random() * (52 - 1)) + 1;
    if (num % 2 ===0) {
      this.hand.push(deck.cards[select].numb());
    }

    else  {
      this.dealerHand.push(deck.cards[select].numb());
    }
    return deck.cards[select].show();
  };

  this.gameFlow = function() {
    if (currentHand == 21) {
      $("#Status").append("<p> YOU WIN!!!</p>").hide();
      console.log("YOU WIN!!!");
    }

    else if (currentHand > 21) {
      $("#Status").append("<p> Busted, you lose! </p>").hide();
      console.log("Busted, you lose!");
    }

    else if (dealerzHand < 18) {
      $("#dealers-cards").append("<p> the Dealer takes another card. </p>").hide();
      this.dealer(1);
      this.gameFlow();
    }

    else if (dealerzHand > 21) {
      $("#Status").append("<p> Dealer busted you win!!! </p>");
    }

    else if (dealerzHand > currentHand &&  dealerzHand <= 21) {
      $("#Status").append("<p> Dealer wins, you lose </p>").hide();
      console.log("Dealer wins, you lose.");
    }

    else if (currentHand > dealerzHand && currentHand <=21) {
      $("#Status").append("<p>You win!</p>").hide();
    }
  };

  this.play = function() {
    console.log("Your first two cards are:");
    this.deal(2);
    console.log("Dealer gets:");
    this.dealer(2);
    this.gameFlow();
  };

  this.dealer = function(hits) {
    var i;
    for (i = 0; i < hits; i++) {
      this.rand(1);
      dealerzHand = this.dealerHand.reduce(this.sum, 0);
    }
    $("#dealers-cards").
    append("<p> The dealer's hand is " + dealerzHand +"</p>").
    hide();
    console.log("The dealer's hand is " + dealerzHand);
  };

  this.deal = function(hits) {
    var i, crd1, crd2;
    for (i = 0; i < hits; i++) {
      $("#players-cards").
      append("<p> Your card is: " + this.rand(2)+"</p>");
      currentHand = this.hand.reduce(this.sum, 0);
    }
    
    crd1 = this.hand[0];
    crd2 = this.hand[1];

    $('#players-cards').
    append("<p>Your current hand is " + currentHand +"</p>").
    hide().
    append("<div id='card'></div>");
    $('#card').append("<p id='top'>"+crd1 +"</p>" + "<img id='cardImg' src='http://res.cloudinary.com/bone/image/upload/v1433117747/heart_ys4iaf.jpg' style='width:75px;height:75px'>" + "<p id='btm'>"+crd1 +"</p>" );
    console.log("Your current hand is  " + currentHand);
  };

  this.clickY= function() {
    bj.deal(1);
    $("#round2").
    append("<p> Your next card is " + bj.hand[2] + " </p>").
    hide();
    $("#round2").append("<p> Your current Hand is " + currentHand + "</p>").
    hide();
    bj.gameFlow();
    $("#round2").fadeIn();
  };

  this.clickN= function() {
    bj.gameFlow();
    $("#Status").append("<p> Maybe Checkers is more your speed </p>").hide();
    $("#Status").fadeIn();
  };

  this.showCards = function() {
    $("#players-cards").fadeIn();
    $("#dealers-cards").fadeIn();
  };

  this.showStats = function(){
    $("#Status").fadeIn();
  };
}

var bj = new Blackjack(1, deck);

module.exports = bj;
