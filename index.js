#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//display welcome message
console.log(chalk.yellowBright("=".repeat(60)));
console.log(chalk.bold.blueBright("\t\t\t Word Counter"));
console.log(chalk.yellowBright("=".repeat(60)));
//prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// triming a sentence and splitting  into words based on "spaces"
let words = answer.sentence.trim().split(" ");
//analysis of the user input sentence
console.log(chalk.yellowBright("=".repeat(60)));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log(chalk.yellowBright("=".repeat(60)));
