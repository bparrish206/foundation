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
      this.hand.push(deck.cards[select].suit);
    }

    else  {
      this.dealerHand.push(deck.cards[select].numb());
    }
    return deck.cards[select].show();
  };

  this.gameFlow = function() {
    $("#Status").empty();
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
    var i, crd1, crd1s, crd2, crd2s, heart, spade, diamond, club;
    for (i = 0; i < hits; i++) {
      $("#players-cards").
      append("<p> Your card is: " + this.rand(2)+"</p>");
      currentHand = this.sum(this.hand[0], this.hand[2]);
    }

    crd1 = this.hand[0];
    crd1s = this.hand[1];
    crd2 = this.hand[2];
    crd2s = this.hand[3];
    heart = 'http://res.cloudinary.com/bone/image/upload/v1433117747/heart_ys4iaf.jpg';
    spade = 'http://res.cloudinary.com/bone/image/upload/v1433117747/spade_rahylc.jpg';
    diamond = 'http://res.cloudinary.com/bone/image/upload/v1433117747/diamond_j37sts.jpg';
    club = 'http://res.cloudinary.com/bone/image/upload/v1433117747/Club_zl5a9x.png';

    $('#players-cards').
    append("<h4>Your current hand is " + currentHand +"</h4>").
    prepend("<div id='card'></div>");
    if (crd1s == 1){
    $('#card').append("<p id='top'>"+crd1 +"</p>" + "<img id='cardImg' src="+heart+">" + "<p id='btm'>"+crd1 +"</p>" )
  } else if (crd1s == 2) {
    $('#card').append("<p id='top'>"+crd1 +"</p>" + "<img id='cardImg' src="+spade+">" + "<p id='btm'>"+crd1 +"</p>" )
  }
  else if (crd1s == 3) {
    $('#card').append("<p id='top'>"+crd1 +"</p>" + "<img id='cardImg' src="+diamond+">" + "<p id='btm'>"+crd1 +"</p>" )
  } else {$('#card').append("<p id='top'>"+crd1 +"</p>" + "<img id='cardImg' src="+club+">" + "<p id='btm'>"+crd1 +"</p>" )}
    $('#players-cards').
    prepend("<div id='card'></div>");
    if (crd2s == 1){
      $('#card').append("<p id='top'>"+crd2 +"</p>" + "<img id='cardImg' src="+heart+">" + "<p id='btm'>"+crd2 +"</p>" )
    } else if (crd2s == 2){
      $('#card').append("<p id='top'>"+crd2 +"</p>" + "<img id='cardImg' src="+spade+">" + "<p id='btm'>"+crd2 +"</p>" )
    }  else if (crd2s == 3) {
      $('#card').append("<p id='top'>"+crd2 +"</p>" + "<img id='cardImg' src="+diamond+">" + "<p id='btm'>"+crd2 +"</p>" )
    } else{$('#card').append("<p id='top'>"+crd2 +"</p>" + "<img id='cardImg' src="+club+">" + "<p id='btm'>"+crd2 +"</p>" )}
  };

  this.play = function() {
    this.deal(2);
    this.dealer(2);
    this.gameFlow();
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
