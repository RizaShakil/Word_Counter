#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//display a colour ful welcome message
console.log(chalk.bold.italic.cyanBright("\n \t WELCOME THE RIZA SHAKEEL WORD COUNTER \n"));
console.log(chalk.bold.yellowBright("--------------------------------------------------"));
//prompt the user to enter the sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.italic.greenBright("Enter a sentence"),
    }
]);
//trimming the sentence and spliting it into "spaces"
let words = answers.sentence.trim().split(" ");
//Analyze the user input sentence
console.log(chalk.bold.yellowBright("--------------------------------------------------"));
console.log(chalk.italic.magentaBright(" -SENTENCE WORDS:"));
console.log(words);
console.log(chalk.bold.magentaBright(`\n -WORD COUNT: ${chalk.bold.cyanBright(words.length)}`));
console.log(chalk.bold.yellowBright("--------------------------------------------------"));
