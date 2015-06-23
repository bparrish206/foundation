"use strict";

exports.Banks = function(num) {
var bank = 100.00;

this.add = function(num){
  return bank += num;
}

this.subtract = function(num) {
  return bank -+ num
}

this.bets = function(){
  var bet = document.getElementById("bet").value;
  this.subtract(bet);
  console.log(bet)
  console.log("test");
  return bank;
}

return bank;
}
