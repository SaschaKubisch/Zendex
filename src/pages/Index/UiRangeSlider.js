import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

class UiRangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: 15,
      min_max: 70,
      step: 25,
      prefix: 50,
      postfix: 85,
      custom_val: 5,
      handleLabel: 10,
      float_val: 55.5,
      extra: 52,
      hide: 5,
      labels: {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
      },
    };
  }

  render() {
    const formatkg = value => "$ " + value;
    const formatdays = value => value + " Days";
    const extra_age = value => value + " Age";
    return (
      <React.Fragment>


   
      
            <Card>
              <CardBody>
                <CardTitle className="h4">Set Rebalancing Interval:</CardTitle>



                <Row>


                  <Col md={6}>
                    <div className="p-3">
                      <h5 className="font-size-14 mb-3 mt-0">Days:</h5>
                      <span className="float-start mt-4">0</span>{" "}
                      <span className="float-end  mt-4">365</span>
                      <Slider
                        min={0}
                        max={365}
                        format={formatdays}
                        value={this.state.postfix}
                        onChange={value => {
                          this.setState({ postfix: value });
                        }}
                      />
                    </div>
                  </Col>
                </Row>


              </CardBody>
            </Card>
          
        

      </React.Fragment>
    );
  }
}

export default UiRangeSlider;
