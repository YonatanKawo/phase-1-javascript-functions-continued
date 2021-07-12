// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("go friends birthday party"))
function mondayWork(activity="go to the office"){

    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork())

function wrapAdjective(string ="*"){
  return function(event="special"){
    return `You are ${string}${event}${string}!`
  }
}
//const encouragingPromptFunction = wrapAdjective("!!!");
console.log(wrapAdjective("%")("a dedicated programmer"))
