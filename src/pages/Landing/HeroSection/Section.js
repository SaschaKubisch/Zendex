import React, { Component } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Countdown
import Countdown from "react-countdown"

class Section extends Component {



  render() {
    return (
      <React.Fragment>
        <section className="section hero-section bg-ico-hero" id="home">
          <div className="bg-overlay bg-primary"/>
          <Container>
            <Row className="align-items-center">
              <Col lg="5">
                <div className="text-white-50">
                  <h1 className="text-white font-weight-semibold mb-3 hero-title">
                    Zendex - Build your custom crypto index
                  </h1>
                  <p className="font-size-14">
                    With Zendex you can set up your own index with innovative and transparant rebalancing mechanisms.
                  </p>

                  <div className="button-items mt-4">
                    <Link to="#" className="btn btn-success">
                      Get Whitepaper
                    </Link>{" "}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default Section
