const TokenFarm = artifacts.require('Zendex')

module.exports = async function(callback) {
  let zendex = await Zendex.deployed()
  await zendex.issueTokens()
  // Code goes here...
  console.log("Tokens issued!")
  callback()
}
