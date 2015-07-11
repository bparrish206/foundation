"use strict";

function Banks() {

this.bank = 100;

this.Add = function(bet){
  this.bank += Number(bet.value);
  $("#cash li.price").replaceWith("<li class='price'>" +this.bank+"</li>");
  return this.bank;
}

this.subtract = function(bet) {
  $("#cash li.price").empty();
  $("#cash li.price").append(this.bank -= bet.value);
  return this.bank;
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

}

}

var money = new Banks();
module.exports = money;
