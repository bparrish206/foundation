"use strict";

function Banks() {

var bank = 100;


this.Add = function(bet, bank){
  bank += Number(bet.value);
  $("#cash li.price").replaceWith("<li class='price'>" +bank+"</li>");
}

this.subtract = function(bet, bank) {
  $("#cash li.price").empty();
  $("#cash li.price").append(bank -= bet.value);
}

this.bets = function(){
     var bet = document.getElementById("bet").value;
     $("#betz").append(bet);
     $("#go").hide();
     $("#bet").hide();
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
