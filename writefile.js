
const writeMarkdown = (profileData, answerObj) => {
  //  console.log(profileData.data[0].owner.login)
  return `
# TITTLE: Team Leo Representatives
 
## DESCRIPTION:
* We are one of many agile teams in the company that specializes in Payroll Modules.
* our Team consists of 6 individuals with 3 Developers, 2 QA's and 1 Scrum Master.
* Our Projects consists of creating next generation applications.
* In their spare time, they serve as Professors, TA's and freelance developers for 3rd world countries.

  *Below are our wonderful team members.

# NAME: ${profileData.data.login}


## CURRENT OCCUPATION:
${answerObj.Occupation}

## PROJECTS:
${answerObj.Projects}


## LANGUAGES:
${answerObj.languages.map(language=>`${language}\n`)}

## CODING STRENGHT:
${answerObj.Preference}

## PREFERED RESOURCES:
${answerObj.Resources.map(resource=>`${resource}\n`)}

## CERTIFICATES:
${answerObj.Certificates.map(certificate=>`${certificate}\n`)}
  
## HOBBIES:
${answerObj.Hobbies.map(hobby=>`${hobby}\n`)}
 `

}

module.exports = writeMarkdown;