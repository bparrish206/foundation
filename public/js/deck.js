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

  this.isBlack = function(img, lilTop, lilBtm) {
    if (img.indexOf("spade") > -1) {
      $("#lilTop").css("color", "black");
      $("#lilBtm").css("color", "black");
    }
    else if (img.indexOf("Club") > -1) {
      $("#lilTop").css("color", "black");
      $("#lilBtm").css("color", "black");
    }
    else {
      $("#lilTop").css("color", "#DB0B49");
      $("#lilBtm").css("color", "#DB0B49");
    }
  }

  this.shufDisplay = function(num, img, next) {
  if (next % 2 == 0) {
    $('#deck').
    prepend("<li id='lilCard2'></li>");
    $('#lilCard2').append("<p id='lilTop'>"+num+"</p>"+"<img id='lilCardImg' src="+img+">" + "<p id='lilBtm'>"+num+"</p>")
    this.isBlack(img, lilTop, lilBtm);
  }

  else {
    $('#deck2').
    prepend("<li id='lilCard'></li>");
    $('#lilCard').append("<p id='lilTop'>"+num+"</p>"+"<img id='lilCardImg' src="+img+">" + "<p id='lilBtm'>"+num+"</p>")
    this.isBlack(img, lilTop, lilBtm);
  }
  };

  this.shuffle = function(){
    $('ul.peek').empty();
    $(".peek").show();

    var m = this.cards.length, t, rand, ck;
    ck = "";
    while(m > 0) {
      $("#reveal-cards").hide()
    $("#play-game").hide();
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
      m--;
    }
    setTimeout(function() { $("#reveal-cards").show(); }, 500);
    setTimeout(function() { $("#play-game").show(); }, 500);
  };

  this.reveal = function() {
    deck.shuffle();
    $(".peek").fadeIn();
    $(".peek").fadeOut('slow');
  };
}

var deck = new Deck();
module.exports = deck;
