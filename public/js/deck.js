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
    $('#deck').
    prepend("<li id='lilCard'></li>");
    $('#lilCard').append("<p id='lilTop'>"+num+"</p>"+"<img id='lilCardImg' src="+img+">" + "<p id='lilBtm'>"+num+"</p>")
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
