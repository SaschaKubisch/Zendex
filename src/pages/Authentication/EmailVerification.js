import React, { Component, useState } from "react"
import { Link } from "react-router-dom"
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Container, Row } from "reactstrap"

// import images
import logodark from "../../assets/images/zendex_logo_dark.svg"
import logolight from "../../assets/images/zendex_logo_light.svg"

export default class EmailVerification extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="account-pages my-5 pt-sm-5">
          <MetaTags>
            <title>Email Verification | Zendex</title>
          </MetaTags>
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card>
                  <CardBody>
                    <div className="p-2">
                      <div className="text-center">
                        <div className="avatar-md mx-auto">
                          <div className="avatar-title rounded-circle bg-light">
                          <img
                      src={logolight}
                      alt=""
                      height="100"
                      className="auth-logo-light mx-auto"
                    />
                          </div>
                        </div>
                        <div className="p-2 mt-4">
                          <h4>Verify your email</h4>
                          <p>
                            We have sent you verification email
                            {/* {" "}
                            <span className="font-weight-semibold" >
                            {email}
                            </span> */}
                            , please check it.
                          </p>
                          {/* <div className="mt-4">
                            <a
                              href="/"
                              className="btn btn-success w-md"
                            >
                              Verify email
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Didn&apos;t receive an email ?{" "}
                    <a href="/emailVerification" className="fw-medium text-primary">
                      {" "}
                      Resend{" "}
                    </a>{" "}
                  </p>
                  <p>
                    © {new Date().getFullYear()} Zendex.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}
