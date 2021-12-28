import React, { Component } from "react"
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap"
import MetaTags from 'react-meta-tags';

//Import Breadcrumb

// Charts
import Doughnut from "./doughnutchart"
import Pie from "../../assets/AllCharts/echart/piechart"



class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
            <Col lg="6">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4 h4">Your Index</CardTitle>
                    <div id="pie-chart" className="e-chart">
                      {/* <Pie /> */}
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4 h4">Allocations</CardTitle>
                    <div id="doughnut-chart" className="e-chart">
                      <Doughnut />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Index
