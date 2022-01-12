import React, { Component } from "react"
import { connect } from "react-redux"
import MetaTags from 'react-meta-tags';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Input,
  InputGroup,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"

import { map, isEmpty, size } from "lodash"

import { Link, withRouter } from "react-router-dom"

import classnames from "classnames"

import DualListbox from "./DualListbox";
import ProjectsList from "./ProjectsList";
import UiRangeSlider from "./UiRangeSlider";

import PropTypes from "prop-types"

import images from "../../assets/images"

import { getIndexSetup } from "../../store/actions"

class UiTabsAccordions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      assetList: [],
      activeTab: "1",
      activeTab1: "1",
      activeTab2: "2",
      activeTab3: "3",
      verticalActiveTab: "1",
      verticalActiveTabWithIcon: "1",
      customActiveTab: "1",
      customIconActiveTab: "1",
      activeTabJustify: "1",
      edit: true,
      // editButtonText: "Save",
      radio1: true,
      radio2: false,
      radio3: true,
      radio4: false,
      col1: true,
      col2: false,
      col3: false,
      col4: false,
      col5: true,
      col6: true,
      col7: true,
      col8: true,
      col9: true,
      col10: false,
      col11: false,
    }
    this.toggle = this.toggle.bind(this)
    this.toggle1 = this.toggle1.bind(this)

    // this.t_editButtonText = this.t_editButtonText.bind(this)
    this.t_edit = this.t_edit.bind(this)
    this.t_col1 = this.t_col1.bind(this)
    this.t_col2 = this.t_col2.bind(this)
    this.t_col3 = this.t_col3.bind(this)
    this.t_col4 = this.t_col4.bind(this)
    this.t_col5 = this.t_col5.bind(this)
    this.t_col6 = this.t_col6.bind(this)
    this.t_col7 = this.t_col7.bind(this)
    this.t_col8 = this.t_col8.bind(this)
    this.t_col9 = this.t_col9.bind(this)
    this.t_col10 = this.t_col10.bind(this)
    this.t_col11 = this.t_col11.bind(this)

    this.t_radio1 = this.t_radio1.bind(this)
    this.t_radio2 = this.t_radio2.bind(this)

    this.t_radio3 = this.t_radio3.bind(this)
    this.t_radio4 = this.t_radio4.bind(this)

    this.toggle2 = this.toggle2.bind(this)
    this.toggle3 = this.toggle3.bind(this)


    this.toggleVertical = this.toggleVertical.bind(this)
    this.toggleVerticalIcon = this.toggleVerticalIcon.bind(this)
    this.toggleCustom = this.toggleCustom.bind(this)
    this.toggleIconCustom = this.toggleIconCustom.bind(this)
  }




  t_radio1() {
    this.setState({
      radio1: true,
      radio2: false,
    })
  }

  t_radio2() {
    this.setState({
      radio1: false,
      radio2: true,
    })
  }

  t_radio3() {
    this.setState({
      radio3: true,
      radio4: false,
    })
  }

  t_radio4() {
    this.setState({
      radio3: false,
      radio4: true,
    })
  }



  t_edit() {
    this.setState({
      edit: !this.state.edit,
    })
  }

  // changeText = (editButtonText) => {
  //   if (edit == true) {
  //     this.setState({ "Save"});
  //   }
  //   else {
  //     this.setState({ "Edit"});
  //   }
  // }


  t_col1() {
    this.setState({
      col1: !this.state.col1,
    })
  }

  t_col2() {
    this.setState({
      col2: !this.state.col2,
    })
  }

  t_col3() {
    this.setState({
      col3: !this.state.col3
    })
  }

  t_col4() {
    this.setState({
      col4: !this.state.col4
    })
  }

  t_col5() {
    this.setState({ col5: !this.state.col5 })
  }

  t_col6() {
    this.setState({ col6: !this.state.col6 })
  }

  t_col7() {
    this.setState({ col7: !this.state.col7 })
  }

  t_col8() {
    this.setState({
      col6: !this.state.col6,
      col7: !this.state.col7
    })
  }

  t_col9() {
    this.setState({
      col9: !this.state.col9,
      col10: false,
      col11: false
    })
  }

  t_col10() {
    this.setState({
      col10: !this.state.col10,
      col9: false,
      col11: false
    })
  }

  t_col11() {
    this.setState({
      col11: !this.state.col11,
      col9: false,
      col10: false
    })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      })
    }
  }

  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      })
    }
  }

  toggle3(tab) {
    if (this.state.activeTab3 !== tab) {
      this.setState({
        activeTab3: tab,
      })
    }
  }

  toggleVertical(tab) {
    if (this.state.verticalActiveTab !== tab) {
      this.setState({
        verticalActiveTab: tab,
      })
    }
  }

  toggleVerticalIcon(tab) {
    if (this.state.verticalActiveTabWithIcon !== tab) {
      this.setState({
        verticalActiveTabWithIcon: tab,
      })
    }
  }

  toggleCustom(tab) {
    if (this.state.customActiveTab !== tab) {
      this.setState({
        customActiveTab: tab,
      })
    }
  }

  toggleIconCustom(tab) {
    if (this.state.customIconActiveTab !== tab) {
      this.setState({
        customIconActiveTab: tab,
      })
    }
  }


  // componentDidMount() {
  //   const {
  //     indexSetup: { assets },
  //     onGetIndexSetup,
  //   } = this.props
  //   onGetIndexSetup()
  //   this.setState({ assetList: assets })
  // }

  // componentDidUpdate(prevProps) {
  //   const {
  //     indexSetup: { assets },
  //   } = this.props
  //   if (
  //     !isEmpty(assets) &&
  //     size(assets) !== size(prevProps.indexSetup.assets)
  //   ) {
  //     this.setState({ assetList: assets })
  //   }
  // }

  removeCartItem = id => {
    let assetList = this.state.assetList
    const filtered = assetList.filter(function (item) {
      return item.id !== id
    })

    this.setState({ assetList: filtered })
  }

  countUP = (id, prev_data_attr) => {
    this.setState({
      assetList: this.state.assetList.map(p =>
        p.id === id ? { ...p, data_attr: prev_data_attr + 1 } : p
      ),
    })
  }

  countDown = (id, prev_data_attr) => {
    this.setState({
      assetList: this.state.assetList.map(p =>
        p.id === id ? { ...p, data_attr: prev_data_attr - 1 } : p
      ),
    })
  }

  myFunction = () => {

    var btn = document.getElementById("vbtn-radio");

    if (btn.value == "Open Curtain") {
      btn.value = "Close Curtain";
      btn.innerHTML = "Close Curtain";
    }
    else {
      btn.value = "Open Curtain";
      btn.innerHTML = "Open Curtain";
    }

  }

  render() {
    // const {indexData} = this.props
    // const { assetSelect } = this.state
    return (
      <React.Fragment>
        <Row>
          <Col lg={12}>
            <div className="accordion" id="accordion">
              <div className="accordion-item">
                <td>
                  <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-edit" autoComplete="off" defaultChecked />
                  <label className={this.state.edit ? "btn btn-warning m-2" : "btn btn-primary m-2"} htmlFor="vbtn-edit" onClick={this.t_edit}>{this.state.edit ? "Save" : "Edit"}</label>
                </td>
                <td>
                  <Collapse isOpen={this.state.edit} className="accordion-collapse">
                    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-edit" autoComplete="off" defaultChecked />
                    <label className="btn btn-outline-primary m-2" htmlFor="vbtn-edit" onClick={this.t_edit}>Cancel</label>
                  </Collapse>
                </td>
                <td>
                  <h5 className={this.state.edit ? "m-2" : "m-2"}>My Zendex</h5>
                </td>
                <Collapse isOpen={this.state.edit} className="accordion-collapse">
                  <Row>
                    <Col lg={12}>
                      <div className="accordion" id="accordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button fw-medium btn-outline-primary" type="button" onClick={this.t_col1} style={{ cursor: "pointer" }}>
                              Select Assets
                            </button>
                          </h2>
                          <Collapse isOpen={this.state.col1} className="accordion-collapse">
                            <div className="accordion-body">
                              <DualListbox />
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="accordion" id="accordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button fw-medium btn-outline-primary" type="button" onClick={this.t_col2} style={{ cursor: "pointer" }}>
                              Filter
                            </button>
                          </h2>
                          <Collapse isOpen={this.state.col2} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="btn-group-vertical">
                                <tr>
                                  <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autoComplete="off" defaultChecked />
                                  <label className="btn btn-outline-primary" htmlFor="vbtn-radio1" onClick={this.t_radio1}>Disabled</label>
                                </tr>
                                <tr>
                                  <td style={{ width: "180px" }} >
                                  <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off" />
                                  <label className="btn btn-outline-primary" htmlFor="vbtn-radio2" onClick={this.t_radio2}>Filter By Market Cap</label>
                                  </td>
                                  <td>
                                    <Collapse isOpen={this.state.radio2} className="accordion-collapse">
                                      <td style={{ width: "50px" }}>
                                        <h5 className="text-truncate font-size-14">Top {" "}</h5>
                                      </td>
                                      <td>
                                        <div style={{ width: "110px" }}>
                                          <InputGroup className="pl-3">
                                            <Button
                                              color="primary"
                                              onClick={() => {
                                                this.countUP(
                                                  // product.id,
                                                  // product.data_attr
                                                )
                                              }}
                                            >
                                              +
                                            </Button>
                                            <Input
                                              type="text"
                                              value={5}
                                              name="demo_vertical"
                                              readOnly
                                            />
                                            <Button
                                              color="primary"
                                              onClick={() => {
                                                this.countDown(
                                                  // product.id,
                                                  // product.data_attr
                                                )
                                              }}
                                            >
                                              -
                                            </Button>
                                          </InputGroup>
                                        </div>
                                      </td>
                                    </Collapse>
                                  </td>

                                </tr>
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="accordion" id="accordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button fw-medium btn-outline-primary" type="button" onClick={this.t_col3} style={{ cursor: "pointer" }}>
                              Allocation Method
                            </button>
                          </h2>
                          <Collapse isOpen={this.state.col3} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="btn-group-vertical">
                                <tr>
                                  <input type="radio" className="btn-check" name="vbtn-radio3" id="radio3" checked={this.state.radio3} autoComplete="off" defaultChecked />
                                  <label className="btn btn-outline-primary" htmlFor="vbtn-radio3" onClick={this.t_radio3}>Market Cap Proportional Weighting</label>
                                </tr>
                                <tr>
                                  <input type="radio" className="btn-check" name="vbtn-radio4" id="radio4" checked={this.state.radio4} autoComplete="off" />
                                  <label className="btn btn-outline-primary" htmlFor="vbtn-radio4" onClick={this.t_radio4}>Custom Weighting</label>

                                </tr>
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="accordion" id="accordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button fw-medium btn-outline-primary" type="button" onClick={this.t_col4} style={{ cursor: "pointer" }}>
                              Rebalancing Trigger
                            </button>
                          </h2>
                          <Collapse isOpen={this.state.col4} className="accordion-collapse">
                            <div className="accordion-body">
                              <UiRangeSlider />
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Collapse>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <ProjectsList />
        </Row>
      </React.Fragment >
    )
  }
}

UiTabsAccordions.propTypes = {
  indexSetup: PropTypes.any,
  onGetIndexSetup: PropTypes.func,
}

const mapStateToProps = state => ({
  indexSetup: state.ecommerce.indexSetup,
})

const mapDispatchToProps = dispatch => ({
  onGetIndexSetup: () => dispatch(getIndexSetup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UiTabsAccordions))
