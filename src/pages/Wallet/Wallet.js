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

class Wallet extends Component {
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
    this.deposit = this.deposit.bind(this)
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
  // HERE RAED
  deposit() {
    let options = {
     contractAddress: "",
     functionName:"newDeposit",
     abi: "",
     params: {note: "Success"},
     msgValue: Moralis.Units.ETH(10)

    }
    Moralis.executeFunction(options);
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
            {!isEmpty(wallet) && (
              <Row>
              <Col xl="4">
                <Card>
                  <CardBody>

                    <div className="mt-4">
                      <Nav pills className="bg-light rounded" role="tablist">
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                              this.toggleTab("1");
                            }}
                          >
                            Deposit
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.toggleTab("2");
                            }}
                          >
                            Withdraw
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "3",
                            })}
                            onClick={() => {
                              this.toggleTab("3");
                            }}
                          >
                            Transfer
                          </NavLink>
                        </NavItem>
                      </Nav>

                      <TabContent
                        activeTab={this.state.activeTab}
                        className="mt-4"
                      >
                        <TabPane tabId="1" id="buy-tab">
                          {/* <h5 className="font-size-14 mb-4">Stake</h5> */}

                          <div>
                            <div>
                              <Label>Enter Amount :</Label>
                              <InputGroup className="mb-3">
                                <Label className="input-group-text">
                                  Amount
                                </Label>
                                <select
                                  className="form-select"
                                  style={{ maxWidth: "90px" }}
                                >
                                  <option value="1">USDT</option>
                                  <option value="2">ETH</option>
                                </select>
                                <Input type="text" className="form-control" />
                              </InputGroup>
                            </div>
                            
                            <div className="text-center">
                              <Button
                                id = "btn-deposit"
                                type="button"
                                color="success"
                                className="w-md"
                                onClick={
                                  this.deposit()}
                              > 
                               Deposit
                              </Button>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="2" id="sell-tab">
                          {/* <h5 className="font-size-14 mb-4">Unstake</h5> */}
                          <div>
                            <div>
                              <Label>Enter Amount :</Label>
                              <InputGroup className="mb-3">
                                <Label className="input-group-text">
                                  Amount
                                </Label>
                                <select
                                  className="form-select"
                                  style={{ maxWidth: "90px" }}
                                >
                                  <option>USDT</option>
                                  <option>ETH</option>
                                </select>
                                <Input type="text" className="form-control" />
                              </InputGroup>

                            </div>

                            <div className="text-center">
                              <Button
                                type="button"
                                color="danger"
                                className="w-md"
                              >
                                Withdraw
                              </Button>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tabId="3" id="transfer-tab" role="tabpanel">
                          <div>
                            <div className="form-group mb-3">
                              <Label>From :</Label>
                              <select className="form-select">
                                <option>Liquid</option>
                                <option>Index</option>
                              </select>
                            </div>
                            <div className="form-group mb-3">
                              <Label>To :</Label>
                              <select className="form-select">
                                <option>Index</option>
                                <option>Liquid</option>
                              </select>
                            </div>

                            <div>
                              <Label>Enter Amount :</Label>
                              <InputGroup className="mb-3">
                                <Label className="input-group-text">
                                  Amount
                                </Label>
                                <select
                                  className="form-select"
                                  style={{ maxWidth: "90px" }}
                                >
                                  <option>USDT</option>
                                  <option>ETH</option>
                                  <option>AVAX</option>
                                </select>
                                <Input type="text" className="form-control" />
                              </InputGroup>

                            </div>

                            <div className="text-center">
                              <Button
                                type="button"
                                color="secondary"
                                className="w-md"
                              >
                                Transfer
                              </Button>
                            </div>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                  </CardBody>
                </Card>
              </Col> 
                  
                <Col xl="4">
                  {/* <Row>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-bitcoin h2 text-warning mb-0" />
                            </div>
                            <div className="flex-grow-1">
                              <p className="text-muted mb-2">Bitcoin Wallet</p>
                              <h5 className="mb-0">
                                1.02356 BTC{" "}
                                <span className="font-size-14 text-muted">
                                  = $ 9148.00
                                </span>
                              </h5>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-ethereum h2 text-primary mb-0" />
                            </div>
                            <div className="flex-grow-1">
                              <p className="text-muted mb-2">Ethereum Wallet</p>
                              <h5 className="mb-0">
                                0.04121 ETH{" "}
                                <span className="font-size-14 text-muted">
                                  = $ 8235.00
                                </span>
                              </h5>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-litecoin h2 text-info mb-0" />
                            </div>
                            <div className="flex-grow-1">
                              <p className="text-muted mb-2">litecoin Wallet</p>
                              <h5 className="mb-0">
                                0.00356 BTC{" "}
                                <span className="font-size-14 text-muted">
                                  = $ 4721.00
                                </span>
                              </h5>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row> */}

                  {/* <WalletOverView wallet={wallet} /> */}
                  <Card>
                  <CardBody>
                    <h4 className="card-title mb-4">Liquid</h4>

                    <div className="table-responsive">
                      <Table className="table-nowrap align-middle mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Token</th>
                            <th scope="col">Price</th>
                            {/* <th scope="col">Available</th>
                            <th scope="col">Indexed</th> */}
                            <th scope="col" colSpan="2">
                              Balance
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.availableAssets.map((asset, key) => (
                            <tr key={key}>
                              <th scope="row">
                                <div className="d-flex align-items-center">
                                  <div className="avatar-xs me-3">
                                    <span
                                      className={
                                        "avatar-title rounded-circle bg-soft bg-" +
                                        asset.color +
                                        " text-" +
                                        asset.color +
                                        " font-size-18"
                                      }
                                    >
                                      <i className={asset.icon}></i>
                                    </span>
                                  </div>
                                  <span>{asset.title}</span>
                                </div>
                              </th>
                              <td>
                                <div className="text-muted">
                                  $ {asset.price}
                                </div>
                              </td>
                              {/* <td>
                                <h5 className="font-size-14 mb-1">
                                  {asset.investRate}
                                </h5>
                                <div className="text-muted">
                                  ${asset.investPrice}
                                </div>
                              </td> */}
                              {/* <td>
                                <h5 className="font-size-14 mb-1">
                                  {asset.loansRate}
                                </h5>
                                <div className="text-muted">
                                  ${asset.loansPrice}
                                </div>
                              </td> */}
                              <td>
                                <h5 className="font-size-14 mb-1">
                                  {asset.totalRate}
                                </h5>
                                <div className="text-muted">
                                  ${asset.totalPrice}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
                </Col>
                <Col xl="4">
                  {/* <Row>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-bitcoin h2 text-warning mb-0" />
                            </div>
                            <div className="flex-grow-1">
                              <p className="text-muted mb-2">Bitcoin Wallet</p>
                              <h5 className="mb-0">
                                1.02356 BTC{" "}
                                <span className="font-size-14 text-muted">
                                  = $ 9148.00
                                </span>
                              </h5>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-ethereum h2 text-primary mb-0" />
                            </div>
                            <div className="flex-grow-1">
                              <p className="text-muted mb-2">Ethereum Wallet</p>
                              <h5 className="mb-0">
                                0.04121 ETH{" "}
                                <span className="font-size-14 text-muted">
                                  = $ 8235.00
                                </span>
                              </h5>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-litecoin h2 text-info mb-0" />
                            </div>
                            <div className="flex-grow-1">
                              <p className="text-muted mb-2">litecoin Wallet</p>
                              <h5 className="mb-0">
                                0.00356 BTC{" "}
                                <span className="font-size-14 text-muted">
                                  = $ 4721.00
                                </span>
                              </h5>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row> */}

                  {/* <WalletOverView wallet={wallet} /> */}
                  <Card>
                  <CardBody>
                    <h4 className="card-title mb-4">Index</h4>

                    <div className="table-responsive">
                      <Table className="table-nowrap align-middle mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Token</th>
                            <th scope="col">Price</th>
                            {/* <th scope="col">Available</th>
                            <th scope="col">Indexed</th> */}
                            <th scope="col" colSpan="2">
                              Balance
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.indexedAssets.map((asset, key) => (
                            <tr key={key}>
                              <th scope="row">
                                <div className="d-flex align-items-center">
                                  <div className="avatar-xs me-3">
                                    <span
                                      className={
                                        "avatar-title rounded-circle bg-soft bg-" +
                                        asset.color +
                                        " text-" +
                                        asset.color +
                                        " font-size-18"
                                      }
                                    >
                                      <i className={asset.icon}></i>
                                    </span>
                                  </div>
                                  <span>{asset.title}</span>
                                </div>
                              </th>
                              <td>
                                <div className="text-muted">
                                  $ {asset.price}
                                </div>
                              </td>
                              {/* <td>
                                <h5 className="font-size-14 mb-1">
                                  {asset.investRate}
                                </h5>
                                <div className="text-muted">
                                  ${asset.investPrice}
                                </div>
                              </td> */}
                              {/* <td>
                                <h5 className="font-size-14 mb-1">
                                  {asset.loansRate}
                                </h5>
                                <div className="text-muted">
                                  ${asset.loansPrice}
                                </div>
                              </td> */}
                              <td>
                                <h5 className="font-size-14 mb-1">
                                  {asset.totalRate}
                                </h5>
                                <div className="text-muted">
                                  ${asset.totalPrice}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
                </Col>              
              
              </Row>

            )}
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

Wallet.propTypes = {
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
)(withRouter(Wallet))