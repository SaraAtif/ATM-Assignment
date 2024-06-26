#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 20000;
let myPin = 1122;

console.log(chalk.bgGray.bold.italic("\n\t welcome to`Sara -ATM machine \n`"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pincode: ",
        type: "number"
    }
])
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, Login Successfully!");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select an operation: ",
            type: "list",
            choices: ["withdraw Amount", "Check Balance"]
        }
    ])
    if (operationAns.operation === "withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount to withdraw: ",
                type: "number"
            }
        ])
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        } else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw Successfully!`);
            console.log(`Your remaining Balance is ${myBalance}.`);
        }
    }
    if (operationAns.operation === "Check Balance"){
        console.log(`Your current Balance is ${myBalance}.`)
    }
}else{
    console.log("Pin is incorrect, try again!")
}