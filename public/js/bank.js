"use strict";

exports.Banks = function(num) {
var bank = 100.00;

var add = function(num){
  return bank += num;
}

var subtract = function(num) {
  return bank -+ num
}

return bank;
}
