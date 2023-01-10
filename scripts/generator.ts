// import inquirer from "inquirer";
const inquirer = require("inquirer");
const QUESTIONS: inquirer.QuestionCollection<{ libraries: string[] }> = [
  {
    name: "reactQuery",
    type: "confirm",
    default: false,
    message: "Do you need react-query ?",
  },
];

const inquire = (callback: () => void) =>
  inquirer.prompt(QUESTIONS).then((answers) => {
    console.log("answers", answers);

    if (answers.reactQuery) {
      console.log("react-query installed");
    }

    callback();
  });

export default inquire;
