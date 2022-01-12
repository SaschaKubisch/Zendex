import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
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
  Row,
  TabContent,
  TabPane,
} from "reactstrap"

import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import classnames from "classnames"

class UiTabsAccordions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "1",
      activeTab1: "5",
      activeTab2: "9",
      activeTab3: "13",
      verticalActiveTab: "1",
      verticalActiveTabWithIcon: "1",
      customActiveTab: "1",
      customIconActiveTab: "1",
      activeTabJustify: "5",
      col1: true,
      col2: false,
      col3: false,
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

    this.t_col1 = this.t_col1.bind(this)
    this.t_col2 = this.t_col2.bind(this)
    this.t_col3 = this.t_col3.bind(this)
    this.t_col5 = this.t_col5.bind(this)
    this.t_col6 = this.t_col6.bind(this)
    this.t_col7 = this.t_col7.bind(this)
    this.t_col8 = this.t_col8.bind(this)
    this.t_col9 = this.t_col9.bind(this)
    this.t_col10 = this.t_col10.bind(this)
    this.t_col11 = this.t_col11.bind(this)

    this.toggle2 = this.toggle2.bind(this)
    this.toggle3 = this.toggle3.bind(this)

    this.toggleVertical = this.toggleVertical.bind(this)
    this.toggleVerticalIcon = this.toggleVerticalIcon.bind(this)
    this.toggleCustom = this.toggleCustom.bind(this)
    this.toggleIconCustom = this.toggleIconCustom.bind(this)
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false
    })
  }

  t_col2() {
    this.setState({
      col1: false,
      col2: !this.state.col2,
      col3: false
    })
  }

  t_col3() {
    this.setState({
      col1: false,
      col2: false,
      col3: !this.state.col3
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

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Tabs & Accordions | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs
              title="UI Elements"
              breadcrumbItem="Tabs & Accordions"
            />

            <Row>
                    <Col lg={6}>

                      <CardTitle className="h4">Accordion</CardTitle>
                      <p className="card-title-desc">
                        Extend the default collapse behavior to create an
                        accordion.
                      </p>

                      <div className="accordion" id="accordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button fw-medium" type="button" onClick={this.t_col1} style={{ cursor: "pointer" }}>
                              Accordion Item #1
                            </button>
                          </h2>


                          <Collapse isOpen={this.state.col1} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="text-muted">
                                <strong className="text-dark">This is the first item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button fw-medium collapsed" type="button" onClick={this.t_col2} style={{ cursor: "pointer" }}>
                              Accordion Item #2
                            </button>
                          </h2>

                          <Collapse isOpen={this.state.col2} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="text-muted">
                                <strong className="text-dark">This is the second item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button fw-medium collapsed" type="button" onClick={this.t_col3} style={{ cursor: "pointer" }}>
                              Accordion Item #3
                            </button>
                          </h2>
                          <Collapse isOpen={this.state.col3} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="text-muted">
                                <strong className="text-dark">This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="mt-4">
                        <CardTitle className="h4">Flush</CardTitle>
                        <p className="card-title-desc">Add <code>.accordion-flush</code> to remove the default <code>background-color</code>, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</p>

                        <div className="accordion accordion-flush" id="accordionFlushExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFlushOne">
                              <button className="accordion-button fw-medium" type="button" onClick={this.t_col9} style={{ cursor: "pointer" }}>
                                Accordion Item #1
                              </button>
                            </h2>


                            <Collapse isOpen={this.state.col9} className="accordion-collapse">
                              <div className="accordion-body">
                                <div className="text-muted">
                                  <strong className="text-dark">This is the first item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                              </div>
                            </Collapse>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFlushTwo">
                              <button className="accordion-button fw-medium collapsed" type="button" onClick={this.t_col10} style={{ cursor: "pointer" }}>
                                Accordion Item #2
                              </button>
                            </h2>

                            <Collapse isOpen={this.state.col10} className="accordion-collapse">
                              <div className="accordion-body">
                                <div className="text-muted">
                                  <strong className="text-dark">This is the second item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                              </div>
                            </Collapse>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFlushThree">
                              <button className="accordion-button fw-medium collapsed" type="button" onClick={this.t_col11} style={{ cursor: "pointer" }}>
                                Accordion Item #3
                              </button>
                            </h2>
                            <Collapse isOpen={this.state.col11} className="accordion-collapse">
                              <div className="accordion-body">
                                <div className="text-muted">
                                  <strong className="text-dark">This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                              </div>
                            </Collapse>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default UiTabsAccordions
