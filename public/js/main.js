'use strict';

var bj = require('./blackjack');
var d = require('./deck.js');
bj.play();

$("#tally").hide();
$("#dtally").hide();
$(".peek").hide();
$("button#play-game").on("click", bj.showCards);
$("button#reveal-cards").on("click", d.reveal);
$("button#hitMeY").on("click", bj.clickY);
$("button#play-game").on("click", bj.showStats);
$("button#hitMeY").on("click", bj.showStats);
$("button#hitMeN").on("click", bj.clickN);
