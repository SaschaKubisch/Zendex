const BtcToken = artifacts.require('BtcToken')
const EthToken = artifacts.require('EthToken')
const UsdtToken = artifacts.require('UsdtToken')
const Zendex = artifacts.require('Zendex')

module.exports = async function(deployer, network, accounts) {
  //Deploy Eth Token
  await deployer.deploy(EthToken)
  const ethToken = await EthToken.deployed()
  //Deploy Usdt Token
  await deployer.deploy(UsdtToken)
  const usdtToken = await UsdtToken.deployed()
  //Deploy Btc Token
  await deployer.deploy(BtcToken)
  const btcToken = await BtcToken.deployed()

  // Deploy Zendex
  await deployer.deploy(Zendex, ethToken.address, usdtToken.address, btcToken.address)
  const zendex = await Zendex.deployed()

  // Transfer all ETH Tokens to Zendex (1 Mio * 10^18)
  await ethToken.transfer(zendex.address, '1000000000000000000000000')

  // Transfer 100 mUSDT Tokens to investor1 (100*10^18)
  await usdtToken.transfer(accounts[1], '100000000000000000000')

  // Transfer 100 mUSDT Tokens to investor1 (100*10^18)
  await usdtToken.transfer(accounts[2], '100000000000000000000')

  // Transfer 100 mUSDT Tokens to investor1 (100*10^18)
  await usdtToken.transfer(accounts[3], '100000000000000000000')


}
