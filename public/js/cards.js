"use strict";

exports.Card = function (rank, suit) {
  var heart, spade, diamond, club;

  heart = 'http://res.cloudinary.com/bone/image/upload/v1433117747/heart_ys4iaf.jpg';
  spade = 'http://res.cloudinary.com/bone/image/upload/v1433117747/spade_rahylc.jpg';
  diamond = 'http://res.cloudinary.com/bone/image/upload/v1433117747/diamond_j37sts.jpg';
  club = 'http://res.cloudinary.com/bone/image/upload/v1433117747/Club_zl5a9x.png';
  this.rank = rank;
  this.suit = suit;
  this.img = '';
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
        this.img = heart;
        return " of Hearts";
      }

      else if (this.suit == 2) {
        this.img = spade;
        return " of Spades";
      }

      else if (this.suit == 3) {
        this.img = diamond;
        return " of Diamonds";
      }

      else { this.img = club;
         return " of Clubs";}
      };

      this.show = function() {
        return "the " + this.numb() +  this.Suit();
      };

  };
