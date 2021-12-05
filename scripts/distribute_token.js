//const zendex = artifacts.require('Zendex')

module.exports = async function(callback) {
  let usdtToken = await UsdtToken.deployed()
  await UsdtToken.transfer(0x57035E398f42fFF98c37602Cdabc123546DB1245, 100)
  // Code goes here...
  console.log("Tokens sended!")
  callback()

}