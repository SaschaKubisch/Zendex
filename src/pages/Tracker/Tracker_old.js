import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux"
import { isEmpty } from "lodash"
//import { Container, Row, Col, Card, CardBody } from "reactstrap"
import { withRouter } from "react-router-dom"
import "assets/scss/datatables.scss"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import { getWallet } from "store/actions"
import WalletActivities from "./walletActivities"
import WalletStats from "./walletStats"
import WalletOverView from "./walletOverView"

import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardBody,
  Media,
  Table,
  Nav,
  TabContent,
  TabPane,
  Label,
  Button,
  NavItem,
  NavLink,
  Input,
  InputGroup,
} from "reactstrap"

import { Link } from "react-router-dom"
import classnames from "classnames";

class Tracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenu: false,
      activeTab: "1",
      availableAssets: [
        {
          icon: "mdi mdi-usdt",
          color: "warning",
          title: "USDT",
          price: "7525.47",
          totalRate: "4.2562",
          totalPrice: "6425.42",
        },
        {
          icon: "mdi mdi-ethereum",
          color: "primary",
          title: "ETH",
          investRate: "0.0814",
          investPrice: "3256.29",
          price: "4235.78",
          loansRate: "0.0253",
          loansPrice: "675.04",
          totalRate: "0.0921",
          totalPrice: "4536.24",
        },
        {
          icon: "mdi mdi-avax",
          color: "info",
          title: "AVAX",
          price: "3726.06",
          totalRate: "0.0823",
          totalPrice: "3254.23",
        },
      ],
      indexedAssets: [
        {
          icon: "mdi mdi-bitcoin",
          color: "warning",
          title: "BTC",
          investRate: "1.2601",
          investPrice: "6225.74",
          price: "7525.47",
          loansRate: "0.1512",
          loansPrice: "742.32",
          totalRate: "4.2562",
          totalPrice: "6425.42",
        },
        {
          icon: "mdi mdi-ethereum",
          color: "primary",
          title: "ETH",
          investRate: "0.0814",
          investPrice: "3256.29",
          price: "4235.78",
          loansRate: "0.0253",
          loansPrice: "675.04",
          totalRate: "0.0921",
          totalPrice: "4536.24",
        },
      ]
    }

    this.toggleTab = this.toggleTab.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    const { onGetWallet } = this.props
    onGetWallet()
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenu: !prevState.isMenu,
    }))
  }

  render() {
    const {
      wallet,
      wallet: { walletHistory },
    } = this.props
    const { activeTab, isMenu } = this.state

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Your Wallet</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            {/* <Breadcrumbs title="Crypto" breadcrumbItem="Wallet" /> */}
            {!isEmpty(wallet) && (
              <Row>               
                 <Col xl="12">
                  <WalletOverView wallet={wallet} />
                </Col>              
              
              </Row>

            )}
            {/* <Row>
              <Col lg="12">
                {!isEmpty(walletHistory) && (
                  <WalletActivities
                    walletHistory={walletHistory}
                    activeTab={activeTab}
                    toggleTab={this.toggleTab}
                  />
                )}
              </Col>
            </Row> */}
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

Tracker.propTypes = {
  wallet: PropTypes.any,
  onGetWallet: PropTypes.func,
}

const mapStateToProps = ({ crypto }) => ({
  wallet: crypto.wallet,
})

const mapDispatchToProps = dispatch => ({
  onGetWallet: () => dispatch(getWallet()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Tracker))