import React, { Component } from 'react'
import Web3 from 'web3'
import UsdtToken from '../abis/UsdtToken.json'
import EthToken from '../abis/EthToken.json'
import BtcToken from '../abis/BtcToken.json'
import Zendex from '../abis/Zendex.json'
import Navbar from './Navbar'
import Main from './Main'
import './App.css'

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()


    this.setState({ loading: false })

    // Load USDT Token contract & balance
    const usdtTokenData = UsdtToken.networks[networkId]
    if(usdtTokenData) {
      const usdtToken = new web3.eth.Contract(UsdtToken.abi, usdtTokenData.address)
      this.setState({ usdtToken })
      let usdtTokenBalance = await usdtToken.methods.balanceOf(this.state.account).call()
      this.setState({ usdtTokenBalance: usdtTokenBalance.toString() })
    } else {
      window.alert('UsdtToken contract not deployed to detected network.')
    }

    // Load BTC Token contract & balance
    const btcTokenData = BtcToken.networks[networkId]
    if(btcTokenData) {
      const btcToken = new web3.eth.Contract(BtcToken.abi, btcTokenData.address)
      this.setState({ btcToken })
      let btcTokenBalance = await btcToken.methods.balanceOf(this.state.account).call()
      this.setState({ btcTokenBalance: btcTokenBalance.toString() })
    } else {
      window.alert('BtcToken contract not deployed to detected network.')
    }

    // Load ETH Token contract & balance
    const ethTokenData = EthToken.networks[networkId]
    if(ethTokenData) {
      const ethToken = new web3.eth.Contract(EthToken.abi, ethTokenData.address)
      this.setState({ ethToken })
      let ethTokenBalance = await ethToken.methods.balanceOf(this.state.account).call()
      this.setState({ ethTokenBalance: ethTokenBalance.toString() })
    } else {
      window.alert('EthToken contract not deployed to detected network.')
    }

    // Load Zendex contract & total staked value in USDT
    const zendexData = Zendex.networks[networkId]
    if(zendexData) {
      const zendex = new web3.eth.Contract(Zendex.abi, zendexData.address)
      this.setState({ zendex })
      let stakedValue = await zendex.methods.getTotalUsdtValue(this.state.account).call()
      this.setState({ stakedValue: stakedValue.toString() })
    } else {
      window.alert('Zendex contract not deployed to detected network.')
    }
  }

  // Connect Metamask
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  stakeTokens = (amount) => {
    this.setState({ loading: true })
    this.state.usdtToken.methods.approve(this.state.zendex._address, amount).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.state.zendex.methods.stakeUsdt(amount).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
    })
  }

  unstakeTokens = (amount) => {
    this.setState({ loading: true })
    this.state.zendex.methods.unstakeUsdt().send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      usdtToken: {},
      btcToken: {},
      ethToken: {},
      zendex: {},
      usdtTokenBalance: '0',
      btcTokenBalance: '0',
      ethTokenBalance: '0',
      stakedValue: '0',
      loading: false
    }
  }

  // Render to main
  render() {
    let content
    if(this.state.loading) {
      content = <p id="loader" className="text-center">Loading...</p>
    } else {
      content = <Main
        usdtTokenBalance={this.state.usdtTokenBalance}
        btcTokenBalance={this.state.btcTokenBalance}
        ethTokenBalance={this.state.ethTokenBalance}
        stakedValue={this.state.stakedValue}
        stakeTokens={this.stakeTokens}
        unstakeTokens={this.unstakeTokens}
      />
    }

    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.zendex.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>

                {content}

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
