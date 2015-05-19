"use strict";


function Deck() {
  this.cards = [];
  this.count = function(){
    return this.cards.length;
  };

  this.init = function() {
    var s, r;
    for (s = 1; s<=4; s++) {
      for(r = 1; r <=13; r++) {
        this.cards.push(new Card(r, s));
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
    d.shuffle();
    d.show();
    $("#deck").fadeIn();
    $("#peek").append("No counting!")
    $("#deck").fadeOut();
  };
}

function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
  this.numb = function(){
    if (this.rank == 1){
      return  1 || 11;
    }
    else if (this.rank >= 10) {
      return 10;
    }
    else { return this.rank;}
    };

    this.Suit = function() {
      if (this.suit == 1) {
        return " of Hearts";
      }

      else if (this.suit == 2) {
        return " of Spades";
      }

      else if (this.suit == 3) {
        return " of Diamonds";
      }

      else { return " of Clubs";}
        console.log(this.rank + " of " + this.suit);
      };

      this.show = function() {
        return "the " + this.numb() +  this.Suit();
      };
    }

    function BlackJack(players, deck) {
      var pick, card, currentHand, dealerHand;
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
        var i;
        for (i = 0; i < hits; i++) {
          $("#players-cards").
          append("<p> Your card is " + this.rand(2)+"</p>");
          currentHand = this.hand.reduce(this.sum, 0);
        }
        $('#players-cards').
        append("<p>Your current hand is " + currentHand +"</p>").
        hide();
        console.log("Your current hand is  " + currentHand);
      };

      this.clickY= function() {
        bgame.deal(1);
        $("#round2").
        append("<p> Your next card is " + bgame.hand[2] + " </p>").
        hide();
        $("#round2").append("<p> Your current Hand is " + currentHand + "</p>").
        hide();
        bgame.gameFlow();
        $("#round2").fadeIn();
      };

      this.clickN= function() {
        bgame.gameFlow();
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

var d, bgame, dealerzHand;
    d = new Deck();
    d.init();


    bgame = new BlackJack(1, d);
    bgame.play();

    $("button#play-game").on("click", bgame.showCards);
    $("button#reveal-cards").on("click", d.reveal);
    $("button#hitMeY").on("click", bgame.clickY);
    $("button#play-game").on("click", bgame.showStats);
    $("button#hitMeY").on("click", bgame.showStats);
    $("button#hitMeN").on("click", bgame.clickN);
