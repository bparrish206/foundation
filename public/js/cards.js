"use strict";

exports.Card = function (rank, suit) {
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

  };
