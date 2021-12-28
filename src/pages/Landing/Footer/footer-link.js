import React, { Component } from "react"
import { Row, Col } from "reactstrap"

//Import Images
import logolight from "../../../assets/images/zendex_logo_dark_text.svg"

class FooterLink extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="6">
            <div className="mb-4">
              <img src={logolight} alt="" height="60" />
            </div>

          </Col>
          <Col>
          <div className="mb-4">
          <p className="mb-4">
              2021 © Zendex
            </p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default FooterLink
