'use strict';

var deck = require('./deck.js');
var money = require('./bank.js');

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

    else  {deck.cards[select].Suit();
      return this.dealerHand.push(deck.cards[select]);
    }
    return deck.cards[select].show();
  };

  this.gameFlow = function() {
    var bank = 100;
    $("#Status").empty();
    if (currentHand == 21) {
      $("#Status").append("<p> YOU WIN!!!</p>").hide();
      money.Add(bet, bank);
    }

    else if (currentHand > 21) {
      $("#Status").append("<p> Busted, you lose! </p>").hide();
      money.subtract(bet, bank);
    }

    else if (dealerzHand < 18) {
      $("#Status").append("<p> the Dealer takes another card. </p>").hide();
      this.xtkrd();
    }

    else if (dealerzHand > 21) {
      $("#Status").append("<p> Dealer busted you win!!! </p>");
      money.Add(bet, bank);
    }

    else if (dealerzHand > currentHand &&  dealerzHand <= 21) {
      $("#Status").append("<p> Dealer wins, you lose </p>").hide();
      money.subtract(bet, bank);
    }

    else if (currentHand > dealerzHand && currentHand <=21) {
      $("#Status").append("<p>You win!</p>").hide();
      money.Add(bet, bank);
    }
  };
 var krd = 0;

  this.dealer = function(hits) {
    var i, dcrd1, dcrd2, dcrd1G, dcrd2G;
    for (i = 0; i < hits; i++) {
      this.rand(1);;
    }

    $("#dscore").append(dealerzHand);
      dcrd1 = this.dealerHand[0].rank;
      dcrd1G = this.dealerHand[0].img;
      dcrd2 = this.dealerHand[1].rank;
      dcrd2G = this.dealerHand[1].img;
      dealerzHand = this.sum(this.dealerHand[0].numb(), this.dealerHand[1].numb());

    $("#dealers-cards").
    prepend("<li><div id='Dcard'></div></li>");
    this.dealerDisplay(dcrd1, dcrd1G);
    $("#dscore").replaceWith(dealerzHand);

    $("#dealers-cards").
    prepend("<li><div id='Dcard'></div></li>");
    this.dealerDisplay(dcrd2, dcrd2G);

    this.xtkrd = function() {
    krd++
    bj.rand(1);
    $('#dtally').empty();
    $('#dealers-cards').
    prepend("<li><div id='Dcard'></div></li>");
    this.dealerDisplay(this.dealerHand[krd].rank, this.dealerHand[krd].img);
    console.log(this.dealerHand[krd].img);
    dealerzHand += this.dealerHand[krd].numb();
    $("#dtally").append("<h5> Dealer's Hand: "+ " "+dealerzHand+"</h5>");
    bj.gameFlow();

    }
  };

  this.display = function(num, img) {
    $('#card').append("<p id='top'>"+num+"</p>"+"<img id='cardImg' src="+img+">" + "<p id='btm'>"+num+"</p>")

    if (img == 'http://res.cloudinary.com/bone/image/upload/v1433117747/spade_rahylc.jpg') {
      $("#top").css("color", "black");
      $("#btm").css("color", "black");
    }
    else if (img == 'http://res.cloudinary.com/bone/image/upload/v1433117747/Club_zl5a9x.png'){
      $("#top").css("color", "black");
      $("#btm").css("color", "black");
    }
    else {
      $("#top").css("color", "#DB0B49");
      $("#btm").css("color", "#DB0B49");
    }
};

this.dealerDisplay = function(num, img) {
  $('#Dcard').append("<p id='top'>"+num+"</p>"+"<img id='cardImg' src="+img+">" + "<p id='btm'>"+num+"</p>")

  if (img == 'http://res.cloudinary.com/bone/image/upload/v1433117747/spade_rahylc.jpg') {
      $("#top").css("color", "black");
      $("#btm").css("color", "black");
    }
    else if (img == 'http://res.cloudinary.com/bone/image/upload/v1433117747/Club_zl5a9x.png'){
      $("#top").css("color", "black");
      $("#btm").css("color", "black");
    }
    else {
      $("#top").css("color", "#DB0B49");
      $("#btm").css("color", "#DB0B49");
    }
};


  this.deal = function(hits) {
    var i, crd1, crd1g, crd2, crd2g;
    for (i = 0; i < hits; i++) {
    this.rand(2);
  }
    $("#score").append("<h5>"+" " +currentHand+"</h5>");

    crd1 = this.hand[0].rank;
    crd1g = this.hand[0].img;
    crd2 = this.hand[1].rank;
    crd2g = this.hand[1].img;
    currentHand = this.sum(this.hand[0].numb(), this.hand[1].numb());

    $('#players-cards').
    prepend("<li><div id='card'></div></li>");
    this.display(crd1, crd1g);
    $("#score").replaceWith(currentHand);
    $('#players-cards').
    prepend("<li><div id='card'></div></li>");
    this.display(crd2, crd2g);
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
    $("#tally").empty();
    $('#players-cards').
    prepend("<li><div id='card'></div></li>");
    bj.display(bj.hand[ct].rank, bj.hand[ct].img);
    currentHand += bj.hand[ct].numb();
    $("#tally").append("<h5 style='color:#FFEF00'> Current Hand: "+currentHand+"</h5>");
    bj.gameFlow();
  };

  this.clickN= function() {
    bj.gameFlow();
    //$("#Status").append("<p> Maybe Checkers is more your speed </p>").hide();
    $("#Status").fadeIn();
    $("#dealers-title").fadeIn();
    $("#dealers-cards").fadeIn();
    $("#dealers-cards").css("display", "inline-flex");
    $("#dtally").fadeIn();
  };

  this.showCards = function() {
    $("#hitMeN").fadeIn();
    $("#hitMeY").fadeIn();
    $("#cash").fadeIn();
    $("#betBox").fadeIn();
    $("#title").fadeOut();
    $("aside h3").hide();
  };

  this.showStats = function(){
    $("#Status").fadeIn();
  };
}

var bj = new Blackjack(1, deck);

module.exports = bj;
