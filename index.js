function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();
saturdayFun("Roller-scate");
function mondayWork(activity= "go to the office"){
    return  `This Monday, I will ${activity}.`
}
mondayWork();
mondayWork("Work from home.");

function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    };

}
wrapAdjective("%")("a dedicated programmer");
wrapAdjective("!!!")("amazing");
const encouragingPromptFunction = wrapAdjective("~");
console.log(encouragingPromptFunction("Successful"))