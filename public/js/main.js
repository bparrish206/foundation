'use strict';

var bj = require('./blackjack');
var d = require('./deck.js');
var money = require('./bank.js');

bj.play();

$("#tally").hide();
$("#dtally").hide();
$(".peek").hide();
$("section").hide();
$("#hitMeY").hide();
$("#hitMeN").hide();
$("#cash").hide();
$("#betBox").hide();
$("#dealers-title").hide();
$("button#play-game").on("click", bj.showCards);
$("button#play-game").on("click", function(){
  $("button#reveal-cards").fadeOut()
  $("button#play-game").fadeOut()
  $("ul#buttons").css("margin-top", "25px")
  });
$("button#reveal-cards").on("click", d.reveal);
$("button#hitMeY").on("click", bj.clickY);
$("button#hitMeN").on("click", bj.clickN);
$("#go").on("click", money.bets);





