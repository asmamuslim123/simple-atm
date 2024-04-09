#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 123456;
{
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            type: "number",
            message: "Enter your pin code",
        }
    ]);
    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code!!!");
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an option",
                type: "list",
                choices: ["withdraw", "check balance"]
            }
        ]);
        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter your amount please"
                }
            ]);
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
        }
        else if (operationAns.operation === "check balance") {
            console.log("Your balance is: " + myBalance);
        }
    }
    else {
        console.log("Incorrect pin number");
    }
}
