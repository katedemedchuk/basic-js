module.exports = function createDreamTeam( members ) {
  if (Array.isArray( members ) == false) return false
  let isOnlyStrings = members.filter( el => typeof el == "string" )
    
  let firstLetters = isOnlyStrings.map( elem => {
    return elem.trim().split('')[0].toUpperCase()    
  })
  
  return firstLetters.sort().join('')
};