"use strict";

function Banks() {

var bank = 100.00;

this.add = function(bet){
  $("#cash li.price").empty();
  $("#cash li.price").append(bank += bet.value);
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
