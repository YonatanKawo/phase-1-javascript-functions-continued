"use strict";

// Your code here
function saturdayFun() {
  var activity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "roller-skate";
  return "This Saturday, I want to ".concat(activity, "!");
}

console.log(saturdayFun("go friends birthday party"));

function mondayWork() {
  var activity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "go to the office";
  return "This Monday, I will ".concat(activity, ".");
}

console.log(mondayWork());

function wrapAdjective() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
  return function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "special";
    return "You are ".concat(string).concat(event).concat(string, "!");
  };
} //const encouragingPromptFunction = wrapAdjective("!!!");


console.log(wrapAdjective("%")("a dedicated programmer"));