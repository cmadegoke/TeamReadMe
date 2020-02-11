// import dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const stringifyj = require('json-stringify-safe');
const writeMarkdown = require('./writefile');

const questions = require('./questions');
// console.log(questions)

let answerObj = {};

inquirer.prompt(questions)
  .then((answers) => {
    console.log("answers" + stringifyj(answers));
    answerObj = { ...answers };
    const queryUrl = `https://api.github.com/users/${answers.username}`;
    return axios.get(queryUrl)
  })
  .then((response) => {

    const finishedMarkdown = writeMarkdown(response, answerObj);
    console.log("finishedmarkdown" + finishedMarkdown);
    fs.writeFile('./TeamProfile.md', finishedMarkdown, (err) => {
      if (err) {
        console.log(err);
      }
      console.log('written')
    });
  })
  .catch(err => console.log(err));




