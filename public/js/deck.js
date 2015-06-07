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

  this.shufDisplay = function(num, img, next) {

  if (next > 10 && next < 19) {
    $('#deck2').
    prepend("<li id='lilCard2'></li>");
    $('#lilCard2').append("<p id='lilTop'>"+num+"</p>"+"<img id='lilCardImg' src="+img+">" + "<p id='lilBtm'>"+num+"</p>")
  }
  else if (next > 20 && next < 29) {
    $('#deck3').
    prepend("<li id='lilCard3'></li>");
    $('#lilCard3').append("<p id='lilTop'>"+num+"</p>"+"<img id='lilCardImg' src="+img+">" + "<p id='lilBtm'>"+num+"</p>")
  }
  else if (next > 30 && next < 39) {
    $('#deck4').
    prepend("<li id='lilCard4'></li>");
    $('#lilCard4').append("<p id='lilTop'>"+num+"</p>"+"<img id='lilCardImg' src="+img+">" + "<p id='lilBtm'>"+num+"</p>")
  }
  else if (next > 40 && next < 49) {
    $('#deck5').
    prepend("<li id='lilCard5'></li>");
    $('#lilCard5').append("<p id='lilTop'>"+num+"</p>"+"<img id='lilCardImg' src="+img+">" + "<p id='lilBtm'>"+num+"</p>")
  }
  else if (next > 50) {
    $('#deck6').
    prepend("<li id='lilCard6'></li>");
    $('#lilCard6').append("<p id='lilTop'>"+num+"</p>"+"<img id='lilCardImg' src="+img+">" + "<p id='lilBtm'>"+num+"</p>")
  }
  else {
    $('#deck').
    prepend("<li id='lilCard'></li>");
    $('#lilCard', this).append("<p id='lilTop'>"+num+"</p>"+"<img id='lilCardImg' src="+img+">" + "<p id='lilBtm'>"+num+"</p>")
  }
  };


  this.shuffle = function(){
    $('#deck').empty();
    $("#peek").show();
    var m = this.cards.length, t, rand, ck;
    ck = "";
    while(m > 0) {
      rand = Math.floor(Math.random() * m--);
      if (ck.indexOf(rand) > -1){
        console.log("next");
      }
      else {
        ck += rand;
        var lng = ck.length;
        t = this.cards[rand];
        t.Suit();
        this.shufDisplay(t.rank, t.img, lng);
      }
    }
  };

  this.reveal = function() {
    deck.shuffle();
    $("#deck").fadeIn();
    $("#deck").fadeOut('slow');
    $("#peek").fadeOut('slow');
  };
}

var deck = new Deck();
module.exports = deck;
