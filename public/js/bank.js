"use strict";

function Banks() {

var bank = 100.00;

var add = function(num){
  return bank += num;
}

var subtract = function(bet) {
  $("#cash").append("<h5>"+"Bank"+"</h5>"+"<h4>"+(bank -+ bet)+"</h4>");
  return bank -+ bet;
}


this.bets = function(){
     var bet = document.getElementById("bet").value;
     console.log(subtract(bet));
     $("#betz").append(bet);
     return subtract(bet);
}

return bank;
}

var money = new Banks();
module.exports = money;
