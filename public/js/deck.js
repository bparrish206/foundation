'use strict';

var Card = require('./cards');

function Deck() {
  this.cards = [];
  this.count = function(){
    return this.cards.length;
  };

  this.init = function() {

    var s, r;
    for (s = 1; s<=4; s++) {
      for(r = 1; r <=13; r++) {
        this.cards.push(new Card.Card(r, s));
      }
    }
  };

  this.shuffle = function(){
    var m = this.cards.length, t, rand;
    while(m > 0) {
      rand = Math.floor(Math.random() * m--);
      t = this.cards[m];
      this.cards[m] = this.cards[rand];
      this.cards[rand] = t;
    }
  };

  this.show = function() {
    for (var n = 0; n < this.cards.length; n++) {
      $("#deck").
      append("<li>Card: " + this.cards[n].rank + " of " + this.cards[n].Suit() + "</li>").
      hide();
    }
  };

  this.reveal = function() {
    deck.shuffle();
    deck.show();
    $("#deck").fadeIn();
    $("#peek").append("No counting!")
    $("#deck").fadeOut();
  };
};

var deck = new Deck();
module.exports = deck;
