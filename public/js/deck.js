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
    $('#deck').empty();
    $("#peek").show();
    var m = this.cards.length, t, rand;
    while(m > 0) {
      rand = Math.floor(Math.random() * m--);
      t = this.cards[rand];
      $("#deck").
      append("<li>Card: " + t.rank + " of " + t.Suit() + " " + "</li>").
      hide();
    }
  };

  this.reveal = function() {
    deck.shuffle();
    $("#deck").fadeIn();
    $("#deck").fadeOut('slow');
    $("#peek").fadeOut('slow');
  };
};

var deck = new Deck();
module.exports = deck;
