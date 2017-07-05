export function turnApiObjIntoArray(apiObj) {
  const {undead_minions, barbarian_minions, goblin_minions} = apiObj;
  var undead = apiObj.undead.length > 0 ? Object.assign(apiObj.undead[0], {"minions": undead_minions}) : ''
  var barbarian = apiObj.barbarian.length > 0 ? Object.assign(apiObj.barbarian[0], {"minions": barbarian_minions}) : ''
  var goblin = apiObj.goblin.length > 0 ? Object.assign(apiObj.goblin[0], {"minions": goblin_minions}) : ''
  return [undead, barbarian, goblin].filter(c => c)
}
