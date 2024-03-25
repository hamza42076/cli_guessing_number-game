#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 7 + 1);
const answer = await inquirer.prompt([{
        name: "hamza",
        type: "number",
        message: "plzz guess a number from 1-7",
    }]);
if (answer.hamza === randomNumber) {
    console.log("congratulation you guess a right number.Thanks for playing ");
}
else {
    console.log("you guess a wrong number,plzz try again");
}
