// import dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios')

const questions = require('./questions')
// console.log(questions)
// ​const writeMarkdown = require('./writefile')

// inquirer
//   .prompt({
//     message: 'Enter your GitHub username',
//     name: 'username'
//   })
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
      // if (err) {
      //   return console.log(err);
      // }
      console.log('Success!');
    })
    .catch(err => console.log(err));


// const writeMarkdown = profileData =>{
//   return `
//  # ${profiledata.username}`
//  ## Description
//  ![alt tag text](photo url)

//  ## Badges
//  ${profiledata.badges}
// ## Technology 
// ${profileData.tech.map(techname=>`-${techname}\n`)}

//   `
// }




// prompt user for information
// inquirer
  // .prompt([
  //   {
  //     type: 'input',
  //     message: 'Enter your GitHub username',
  //     name: 'username',
  //   },
  //   {
  //     type: 'checkbox',
  //     message: 'What languages do you know?',
  //     name: 'languages',
  //     choices: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Mongo']
  //   },
  //   {
  //     type: 'list',
  //     message: 'What is your preferred method of communication?',
  //     name: 'communication',
  //     choices: ['Electronic Mail', 'Phone', 'Text', 'Carrier Pigeon', 'Fox', 'Slack']
  //   },
  // ])
  //   // {
  //   //   type: 'number',
  //   //   message: 'What is your age?',
  //   //   name: 'age',
  //   //   validate: function(ageInput) {
  //   //     if (ageInput > 0 && ageInput < 150) {
  //   //       return true;
  //   //     } else {
  //   //       console.log('You need to give an age between 1 and 149');
  //   //       return false;
  //   //     }
  //   //   }
  //   // 
//   .then(function(response) {
//     fs.writeFile(`${response.username}.json`, JSON.stringify(response, null, 2), err => {
//       if (err) {
//         return console.log(err);
//       }
// ​
//       console.log('Success!');
//     });
//   });

const writeMarkdown = profileData => {
  // console.log(profileData.data[0].owner.login)
  return `
  # ${profileData.data[0].owner.login}
  ## Description
  ![alt tag text](photo url)
  
  ## Badges
  ## Technology 
  
  `
  // ${profileData.badges}
  // ${profileData.tech.map(techname=>`-${techname}\n`)}
}