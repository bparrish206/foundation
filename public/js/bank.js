"use strict";

function Banks() {

var bank = 100;

this.Add = function(bet){
  bank += Number(bet.value);
  $("#cash li.price").replaceWith("<li class='price'>" +bank+"</li>");
  return bank;
}

this.subtract = function(bet) {
  $("#cash li.price").empty();
  $("#cash li.price").append(bank -= bet.value);
  return bank;
}

this.bets = function(){
     var bet = 0;
     bet = document.getElementById("bet").value;
     $("#betz").append(bet);
     $("#Bet").hide();
      $("#players-cards").fadeIn();
      $("#players-cards").css("display", "inline-flex");
      $("#tally").fadeIn();
      $("section").fadeIn();
      return bet;
}

return bank;
}

var money = new Banks();
module.exports = money;
