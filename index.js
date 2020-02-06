// import dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios')

const questions = require('./questions')
// console.log(questions)

inquirer.prompt(questions)
  .then((answers) => {
    // console.log(answers.username)
    const queryUrl = `https://api.github.com/users/${answers.username}/repos?per_page=100`;
    return axios.get(queryUrl).then(res => res);
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

  .then(function(response) {
    console.log (response);
    const finishedMarkdown = writeMarkdown(response);
    console.log(finishedMarkdown)
    fs.writeFile('./TeamProfile.md', finishedMarkdown, () => console.log('written'));
     
      console.log('Success!');
    })
    .catch(err => console.log(err));


const writeMarkdown = profileData => {
  //  console.log(profileData.data[0].owner.login)
  return `
  Name: 
  ${profileData.data[0].owner.login}
  ## Description:

  ![alt tag text](photo url)
  
  ## Badges:

  ## Technology 
  ${profileData.data.map(language=>`-${language}\n`)}
  
  `
  // ${profileData.badges}
  // ${profileData.tech.map(techname=>`-${techname}\n`)}
}
console.log(profileData.data[0].owner.language)