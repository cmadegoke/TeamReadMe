
const writeMarkdown = (profileData, answerObj) => {
  //  console.log(profileData.data[0].owner.login)
  return `
**TITTLE:
 Team Leo Representatives

**DESCRIPTION:
Our Team is made up of Experienced IT professionals with over 6 years of experience in Application developmentl.
In their spare time, they serve as Professors, TA's and just building in applications.
Below are our wonderful team members.

**NAME: 
${profileData.data.login}

**CURRENT OCCUPATION:
${answerObj.Occupation}

**LANGUAGES:
${answerObj.languages.map(language=>`${language}\n`)}

**TECHNICAL STRENGHT:
${answerObj.Strength}

**PREFERED RESOURCES:
${answerObj.Resources.map(resource=>`${resource}\n`)}

**CERTIFICATES:
${answerObj.Certificates.map(certificate=>`${certificate}\n`)}
  
**HOBBIES:
${answerObj.Hobbies.map(hobby=>`${hobby}\n`)}
 `

}

module.exports = writeMarkdown;