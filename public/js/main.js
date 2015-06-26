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
$("button#play-game").on("click", bj.showCards);
$("button#reveal-cards").on("click", d.reveal);
$("button#hitMeY").on("click", bj.clickY);
$("button#hitMeN").on("click", bj.clickN);
$("#go").on("click", money.bets);





