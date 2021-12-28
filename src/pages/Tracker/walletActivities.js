import React,{Component} from "react"
import PropTypes from "prop-types"
import { Card, CardBody, NavItem, NavLink } from "reactstrap"
import classnames from "classnames"

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

class WalletActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns : [{
        dataField: 'pdate',
        text: 'Date'
      }, {
        dataField: 'type',
        text: 'Type'
      }, {
        dataField: 'coin',
        text: 'Currency'
      },{
        dataField: 'amount',
        text: 'Amount'
      },{
        dataField: 'valueInUsd',
        text: 'Value in USD'
      },{
        dataField: 'txnFee',
        text: 'Txn Fee in USD'
      },{
        dataField: 'txnHash',
        text: 'Txn Hash'
      }],
      productData : [
        { id: 1, txnHash:"0x6c675a33a46c259c038cd6ec14d02ec5d2879bfdae3f8067faa103f9836711c7", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 LTC",valueInUsd:"$ 1773.01", txnFee:"$ 0.21"},
        { id: 2, txnHash:"0x4a7af0d4fcf7aa0433b04786a4df4c3502dc49a0b157f4735c3038fecde7a3cc", pdate : "03 Mar, 2020",type:"Sell",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.20"},
        { id: 3, txnHash:"0x6e345a33a46c259c038cd6ec14d02ec5d2879bfdae3f8067faa103f9836711c7", pdate : "13 Jun, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 LTC",valueInUsd:"$ 1773.01", txnFee:"$ 0.21"},
        { id: 4, txnHash:"0x4g3ff0d4fcf7aa0433b04786a4df4c3502dc49a0b157f4735c3038fecde7a3cc", pdate : "03 Mar, 2020",type:"Unstake",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.19"},
        { id: 5, txnHash:"0x6c435a33a46c259c038cd6ec14d02ec5d2879bfdae3f8067faa103f9836711c7", pdate : "23 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.21"},
        { id: 6, txnHash:"0x6d75f297cdac17870be17379e4bfa3ca0b2d6b0cd4104a1e6338bbd45f0d14fe", pdate : "03 Mar, 2020",type:"Sell",coin:"Ethereum",amount:"0.00413 LTC",valueInUsd:"$ 1773.01", txnFee:"$ 0.20"},
        { id: 7, txnHash:"0x4a7af0d4fcf7aa0433b04786a4df4c3502dc49a0b157f4735c3038fecde7a3cc", pdate : "13 Mar, 2020",type:"Stake",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.21"},
        { id: 8, txnHash:"0x6d75f297cdac17870be17379e4bfa3ca0b2d6b0cd4104a1e6338bbd45f0d14fe", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.21"},
        { id: 9, txnHash:"0x6c435a33a46c259c038cd6ec14d02ec5d2879bfdae3f8067faa103f9836711c7", pdate : "23 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.21"},
        { id: 10, txnHash:"0x4a7af0d4fcf7aa0433b04786a4df4c3502dc49a0b157f4735c3038fecde7a3cc", pdate : "03 Mar, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.18"},
        { id: 11, txnHash:"0x6d75f297cdac17870be17379e4bfa3ca0b2d6b0cd4104a1e6338bbd45f0d14fe", pdate : "08 Mar, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.20"},
        { id: 12, txnHash:"0x6c435a33a46c259c038cd6ec14d02ec5d2879bfdae3f8067faa103f9836711c7", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.21"},
        { id: 13, txnHash:"0x4a7af0d4fcf7aa0433b04786a4df4c3502dc49a0b157f4735c3038fecde7a3cc", pdate : "03 Mar, 2020",type:"Stake",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.20"},
        { id: 14, txnHash:"0x6d75f297cdac17870be17379e4bfa3ca0b2d6b0cd4104a1e6338bbd45f0d14fe", pdate : "07 Mar, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.20"},
        { id: 15, txnHash:"0x4a7af0d4fcf7aa0433b04786a4df4c3502dc49a0b157f4735c3038fecde7a3cc", pdate : "13 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.21"},
        { id: 16, txnHash:"0x6c435a33a46c259c038cd6ec14d02ec5d2879bfdae3f8067faa103f9836711c7", pdate : "03 Mar, 2020",type:"Buy",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01", txnFee:"$ 0.20"},
        { id: 17, txnHash:"0x4a7af0d4fcf7aa0433b04786a4df4c3502dc49a0b157f4735c3038fecde7a3cc", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 LTC",valueInUsd:"$ 1773.01", txnFee:"$ 0.20"},
        ]
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card>
      <CardBody>
        <h4 className="card-title mb-4">Activities</h4>
        <ul className="nav nav-tabs nav-tabs-custom">
          <NavItem>
            <NavLink
              className={classnames({
                active: this.props.activeTab === "1",
              })}
              onClick={() => {
                this.props.toggleTab("1")
              }}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.props.activeTab === "2",
              })}
              onClick={() => {
                this.props.toggleTab("2")
              }}
            >
              Stake / Unstake
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.props.activeTab === "3",
              })}
              onClick={() => {
                this.props.toggleTab("3")
              }}
            >
              Buy / Sell
            </NavLink>
          </NavItem>
        </ul>

        <div className="mt-4">

          <BootstrapTable keyField='id' data={ this.state.productData } columns={ this.state.columns } pagination={ paginationFactory() } />
                        
        </div>
      </CardBody>
    </Card>
      </React.Fragment>
      );
    }
}

WalletActivities.propTypes = {
  walletHistory: PropTypes.array,
  activeTab: PropTypes.string,
  toggleTab: PropTypes.func,
}

export default WalletActivities