#! /usr/bin/env node

import inquirer from "inquirer"

let mybalance = 100000; // Dollar

let myPin = 61528;

 let pinAnswer = await inquirer.prompt(
    [
        {
            name: "q1",
            message: "enter your pin",
            type: "number",

        }
    ]
);
//       12345 === 61528 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
}

   let operationAns =await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices: ["withdraw", "check balance"]
            }
        ]
    );
    
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
            ]
        );
    //    =, -=, +=
          mybalance -= amountAns.amount;

          console.log("Your remaining balance is: " + mybalance)
}
    else if (operationAns.operation === "check balance"){
     console.log("your balance is: " + mybalance);
}

else{
    console.log("Incorrect pin number");
}

