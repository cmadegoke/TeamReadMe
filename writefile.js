const writeMarkdown = profileData => {
  return 'test'
  // `
  // # ${profiledata.username}
  // ## Description
  // ![alt tag text](photo url)
  
  // ## Badges
  // ${profiledata.badges}
  // ## Technology 
  // ${profileData.tech.map(techname=>`-${techname}\n`)}
  
  // `
}

module.exports = writeMarkdown;