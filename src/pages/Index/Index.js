import React, { Component } from "react"
import {
  Card, CardBody, CardTitle, Col, Container, Row, Input,
  InputGroup, Button, Collapse
} from "reactstrap"
import MetaTags from 'react-meta-tags';

//Import Breadcrumb

// Charts
import Doughnut from "./doughnutchart"
import Pie from "../../assets/AllCharts/echart/piechart"

// Formwizard
import DualListbox from "./DualListbox";
import ProjectsList from "./ProjectsList";
import FormWizard from "./FormWizard";
import UiTabsAccordions from "./UiTabsAccordions";


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.state = {
      ctrl1: false,
      ctrl2: false,
      ctrl3: false
    }


    this.t_ctrl1 = this.t_ctrl1.bind(this)
    this.t_ctrl2 = this.t_ctrl2.bind(this)
    this.t_ctrl3 = this.t_ctrl3.bind(this)
    this.myTimer = this.myTimer.bind(this)
  }

  t_ctrl1() {
    this.setState({
      ctrl1: !this.state.ctrl1,
    })
    setInterval(this.myTimer, 1000)
  }

  t_ctrl2() {
    this.setState({
      ctrl2: !this.state.ctrl2,
    })
  }

  t_ctrl3() {
    this.setState({
      ctrl3: !this.state.ctrl3,
    })
  }

  myTimer() {
    var countDownDate = new Date("Jan 25, 2022 16:37:52").getTime();
    // Run myfunc every second
    var myfunc = setInterval(function () {

      var now = new Date().getTime();
      var timeleft = countDownDate - now;

      // Calculating the days, hours, minutes and seconds left
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      // Result is output to the specific element
      document.getElementById("days").innerHTML = days + "d "
      document.getElementById("hours").innerHTML = hours + "h "
      document.getElementById("minutes").innerHTML = minutes + "m "
      document.getElementById("seconds").innerHTML = seconds + "s "

      // Display the message when countdown is over
      if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("seconds").innerHTML = ""
        // document.getElementById("end").innerHTML = "TIME UP!!";
      }
    }, 1000);
    // const d = new Date();
    // const miliseconds = new 1641727114363 + 604800000 - d.getTime()
    // document.getElementById("demo").innerHTML = miliseconds;
  }


  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Index</title>
          </MetaTags>
          <Container fluid={true}>
            <Row>
              <Col lg="4">
                <Card>
                  <Row>
                    <CardBody>
                      <CardTitle className="mb-4 h4">Allocations</CardTitle>
                      <div id="doughnut-chart" className="e-chart">
                        <Doughnut />
                      </div>
                    </CardBody>
                  </Row>
                  <Row>
                    <CardBody>
                      <div id="index-control">
                        <div className="btn-group-horizontal">
                          <td>
                            <input type="radio" className="btn-check" name="vbtn-ctrl" id="vbtn-ctrl1" autoComplete="off" defaultChecked />
                            <label className={this.state.ctrl1 ? "btn btn-danger m-2" : "btn btn-success m-2"} htmlFor="vbtn-ctrl1" onClick={this.t_ctrl1}>{this.state.ctrl1 ? "Stop" : "Start"}</label>
                          </td>
                          <td>
                            <Collapse isOpen={this.state.ctrl1} className="accordion-collapse">
                              <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-edit" autoComplete="off" defaultChecked />
                              <label className="btn btn-warning m-2 text-right" htmlFor="vbtn-edit" onClick={this.ctrl2}>Rebalance Now</label>
                            </Collapse>
                          </td>
                          <td>
                            <Collapse isOpen={this.state.ctrl1} className="accordion-collapse">
                              <td>
                                <h5>{"Next Rebalancing in:  "} </h5>
                              </td>
                              <td>
                                <h5 id="days">{ }</h5>
                                <h5>{" "}</h5>
                              </td>
                              <td>
                                <h5 id="hours">{ }</h5>
                                <h5>{" "}</h5>
                              </td>
                              <td>
                                <h5 id="minutes">{ }</h5>
                                <h5>{" "}</h5>
                              </td>
                              <td>
                                <h5 id="seconds">{ }</h5>
                                <h5>{" "}</h5>
                              </td>
                            </Collapse>
                          </td>
                        </div>
                      </div>
                    </CardBody>
                  </Row>
                </Card>
              </Col>
              <Col lg="8">
                <Card>
                  <CardBody>
                    <UiTabsAccordions />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment >
    )
  }
}

export default Index
