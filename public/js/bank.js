"use strict";

function Banks() {

var bank = 100;

this.add = function(bet){
  $("#cash li.price").empty();
  bet = parseInt(bet.value);
  bank = bank + bet;
  console.log(bet);
  console.log(bank);
  $("#cash li.price").append(bank);
}

this.subtract = function(bet) {
  $("#cash li.price").empty();
  $("#cash li.price").append(bank -= bet.value);
}


this.bets = function(){
     var bet = document.getElementById("bet").value;
     $("#betz").append(bet);
}

return bank;
}

var money = new Banks();
module.exports = money;
