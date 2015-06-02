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

  this.shufDisplay = function(num, img) {
    $('#deck').append("<li id='top'>"+num+"</li>"+"<img id='cardImg' src="+img+">" + "<li id='btm'>"+num+"</li>")
  };

  this.shuffle = function(){
    $('#deck').empty();
    $("#peek").show();
    var m = this.cards.length, t, rand;
    while(m > 0) {
      rand = Math.floor(Math.random() * m--);
      t = this.cards[rand];
      t.Suit();
      this.shufDisplay(t.rank, t.img);
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
