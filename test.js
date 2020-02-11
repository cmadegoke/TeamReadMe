// import dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios')

const questions = require('./questions')
// console.log(questions)

let answerObj = {};

inquirer.prompt(questions)
  .then((answers) => {
    // console.log(answers.username)
    answerObj = {...answers};
    const queryUrl = `https://api.github.com/users/${answers.username}`;
    return axios.get(queryUrl)
  })
  // .then(({ data }) => {
  //   const repoNameList = data.map(({ name }) => name).join('\n');
  //   return writeFile('repos.txt', repoNameList);
  // })
  // .then(res => {
  //   console.log(res);
  // })
  // .catch(err => {
  //   console.log(err);
  // });

  .then(({data: { "avatar_url": profilePic}}) => {
    answerObj.profilePic = profilePic;
    const finishedMarkdown = writeMarkdown(answerObj);
    console.log(finishedMarkdown)
    fs.writeFile('./TeamProfile.md', finishedMarkdown, (err) => {
      if (err) {
        return console.log(err);

      }
      console.log('written')
    });

  })
  .catch(err => console.log(err));


const writeMarkdown = profileData => {
  //  console.log(profileData.data[0].owner.login)
  return `
  Name: 
  ${profileData.login}
  ## Description:
  my team is made up of high teach 

  ![alt tag text](photo url)
  
  ## Badges:
  /
  ## Technology 
  
  
  ##no
  i like mango 

  
  `
  // ${profileData.badges}
  // ${profileData.tech.map(techname=>`-${techname}\n`)}
}