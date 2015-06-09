'use strict';

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
      this.hand.push(deck.cards[select]);
    }

    else  {
      return this.dealerHand.push(deck.cards[select]);
    }
    return deck.cards[select].show();
  };

  this.gameFlow = function() {
    $("#Status").empty();
    if (currentHand == 21) {
      $("#Status").append("<p> YOU WIN!!!</p>").hide();
    }

    else if (currentHand > 21) {
      $("#Status").append("<p> Busted, you lose! </p>").hide();
    }

    else if (dealerzHand < 18) {
      $("#Status").append("<p> the Dealer takes another card. </p>").hide();
      this.dealer(1);
      this.gameFlow();
    }

    else if (dealerzHand > 21) {
      $("#Status").append("<p> Dealer busted you win!!! </p>");
    }

    else if (dealerzHand > currentHand &&  dealerzHand <= 21) {
      $("#Status").append("<p> Dealer wins, you lose </p>").hide();
    }

    else if (currentHand > dealerzHand && currentHand <=21) {
      $("#Status").append("<p>You win!</p>").hide();
    }
  };

  this.dealer = function(hits) {
    var i, dcrd1, dcrd2, dcrd1G, dcrd2G;
    for (i = 0; i < hits; i++) {
      this.rand(1);
      dcrd1 = this.dealerHand[0].rank;
      dcrd1G = this.dealerHand[0].img;
      if (this.dealerHand.length == 2){
        dcrd2 = this.dealerHand[1].rank;
        dcrd2G = this.dealerHand[1].img;
        dealerzHand = this.sum(dcrd1, dcrd2);
      }
    }

    $("#tally").
    append("<p> The dealer's hand is " + dealerzHand +"</p>").
    hide();

    $("#dealers-cards").
    prepend("<div id='Dcard'></div>");
    this.dealerDisplay(dcrd1, dcrd1G);

    $("#dealers-cards").
    prepend("<div id='Dcard'></div>");
    this.dealerDisplay(dcrd2, dcrd2G);
  };

  this.display = function(num, img) {
    $('#card').append("<p id='top'>"+num+"</p>"+"<img id='cardImg' src="+img+">" + "<p id='btm'>"+num+"</p>")
};

this.dealerDisplay = function(num, img) {
  $('#Dcard').append("<p id='top'>"+num+"</p>"+"<img id='cardImg' src="+img+">" + "<p id='btm'>"+num+"</p>")
};


  this.deal = function(hits) {
    var i, crd1, crd1g, crd2, crd2g;
    for (i = 0; i < hits; i++) {
      $("#players-cards").
      append("<p> Your card is: " + this.rand(2)+"</p>");
    }

    crd1 = this.hand[0].rank;
    crd1g = this.hand[0].img;
    crd2 = this.hand[1].rank;
    crd2g = this.hand[1].img;
    currentHand = this.sum(this.hand[0].numb(), this.hand[1].numb());

    $('#players-cards').
    append("<h4>Your current hand is " + currentHand +"</h4>").
    prepend("<div id='card'></div>");
    this.display(crd1, crd1g);

      $('#players-cards').
      prepend("<div id='card'></div>");
      this.display(crd2, crd2g)
  };

  this.play = function() {
    this.deal(2);
    this.dealer(2);
    this.gameFlow();
  };

var ct = 1;

  this.clickY= function() {
    ct++;
    bj.rand(2);
    $("#tally").
    prepend("<p> Your next card is " + bj.hand[ct].rank + " </p>").
    hide();
    $('#players-cards').
    prepend("<div id='card'></div>");
    bj.display(bj.hand[ct].rank, bj.hand[ct].img);
    currentHand += bj.hand[ct].numb();
    $("#tally").prepend("<p> Your current Hand is " + currentHand + "</p>").
    hide();
    bj.gameFlow();
    $("#tally").fadeIn();
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
