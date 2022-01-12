import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";
import { Link } from "react-router-dom";
import DualListbox from "./DualListbox";
import ProjectsList from "./ProjectsList";


class FormWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeTabVartical: 1,
      passedSteps: [1],
      passedStepsVertical: [1]
    };
    this.toggleTab.bind(this);
    this.toggleTabVertical.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        var modifiedSteps = [...this.state.passedSteps, tab];
        this.setState({
          activeTab: tab,
          passedSteps: modifiedSteps
        });
      }
    }
  }

  toggleTabVertical(tab) {
    if (this.state.activesTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        var modifiedSteps = [...this.state.passedStepsVertical, tab];
        this.setState({
          activeTabVartical: tab,
          passedStepsVertical: modifiedSteps
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Index Setup</h4>
                  <div className="wizard clearfix">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({
                            current: this.state.activeTab === 1,
                          })}>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === 1,
                            })}
                            onClick={() => {
                              this.toggleTab(1);
                            }}
                          >
                            <span className="number">1.</span>{" "}
                            Assets
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: this.state.activeTab === 2,
                          })}>
                          <NavLink
                            disabled={!(this.state.passedSteps || []).includes(2)}
                            className={classnames({
                              active: this.state.activeTab === 2,
                            })}
                            onClick={() => {
                              this.toggleTab(2);
                            }}
                          >
                            <span className="number">2.</span>{" "}
                            <span>Weightings</span>
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: this.state.activeTab === 3,
                          })}>
                          <NavLink
                            disabled={!(this.state.passedSteps || []).includes(3)}
                            className={classnames({
                              active: this.state.activeTab === 3,
                            }), 'done'}
                            onClick={() => {
                              this.toggleTab(3);
                            }}
                          >
                            <span className="number">3.</span>{" "}
                            Trigger
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: this.state.activeTab === 4,
                          })}>
                          <NavLink
                            disabled={!(this.state.passedSteps || []).includes(4)}
                            className={classnames({
                              active: this.state.activeTab === 4,
                            }), 'done'}
                            onClick={() => {
                              this.toggleTab(4);
                            }}
                          >
                            <span className="number">4.</span>{" "}
                            Overview
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <TabContent
                        activeTab={this.state.activeTab}
                        className="body"
                      >
                        <TabPane tabId={1}>
                          <Form>
                            <Row>
                              <DualListbox />
                            </Row>
                            <Row>
                              <ProjectsList />
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-pancard-input5">
                                      PAN Card
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-pancard-input5"
                                      placeholder="Enter Your PAN No."
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-vatno-input6">
                                      VAT/TIN No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-vatno-input6"
                                      placeholder="Enter Your VAT/TIN No."
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-cstno-input7">
                                      CST No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-cstno-input7"
                                      placeholder="Enter Your CST No."
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-servicetax-input8">
                                      Service Tax No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-servicetax-input8"
                                      placeholder="Enter Your Service Tax No."
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-companyuin-input9">
                                      Company UIN
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-companyuin-input9"
                                      placeholder="Enter Your Company UIN"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-declaration-input10">
                                      Declaration
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-Declaration-input10"
                                      placeholder="Declaration Details"
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={3}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-namecard-input11">
                                      Name on Card
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-namecard-input11"
                                      placeholder="Enter Your Name on Card"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>Credit Card Type</Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select Card Type
                                      </option>
                                      <option value="AE">
                                        American Express
                                      </option>
                                      <option value="VI">Visa</option>
                                      <option value="MC">MasterCard</option>
                                      <option value="DI">Discover</option>
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-cardno-input12">
                                      Credit Card Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-cardno-input12"
                                      placeholder="Credit Card Number"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-card-verification-input0">
                                      Card Verification Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-card-verification-input0"
                                      placeholder="Credit Verification Number"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-expiration-input13">
                                      Expiration Date
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-expiration-input13"
                                      placeholder="Card Expiration Date"
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={4}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  <i className="mdi mdi-check-circle-outline text-success display-4" />
                                </div>
                                <div>
                                  <h5>Confirm Detail</h5>
                                  <p className="text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            this.state.activeTab === 1
                              ? "previous disabled"
                              : "previous"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              this.toggleTab(this.state.activeTab - 1);
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={
                            this.state.activeTab === 4
                              ? "next disabled"
                              : "next"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              this.toggleTab(this.state.activeTab + 1);
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default FormWizard;
