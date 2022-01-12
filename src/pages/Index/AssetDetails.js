import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
} from "reactstrap"
import classnames from "classnames"
import { isEmpty } from "lodash"

//Import Star Ratings
import StarRatings from "react-star-ratings"

//Import Product Images
// import { assetImages } from "../../../assets/images/asset/"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import actions
// import { getProductDetail } from "../../../store/e-commerce/actions"


class AssetDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "1",
      asset: {},
    }
    this.toggleTab = this.toggleTab.bind(this)
    this.imageShow = this.imageShow.bind(this)
  }

  componentDidMount() {
    const {
      match: { params },
      onGetAssetDetails,
    } = this.props
    if (params && params.id) {
      onGetAssetDetails(params.id)
    }
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  imageShow(img, id) {
    const expandImg = document.getElementById("expandedImg" + id)
    expandImg.src = img
  }

  render() {
    const { asset } = this.props

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Products Details | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Ecommerce" breadcrumbItem="Product Details" />
            {!isEmpty(asset) && (
              <Row>
                <Col>
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xl="6">
                          <div className="asset-detai-imgs">
                            <Row>
                              <Col md="2" xs="3">
                                <Nav className="flex-column" pills>
                                  <NavItem>
                                    <NavLink
                                      className={classnames({
                                        active: this.state.activeTab === "1",
                                      })}
                                      onClick={() => {
                                        this.toggleTab("1")
                                      }}
                                    >
                                      <img
                                        src={asset['subImage'][0]}
                                        alt=""
                                        onClick={() => {
                                          this.imageShow(
                                            asset['subImage'][0],
                                            1
                                          )
                                        }}
                                        className="img-fluid mx-auto d-block rounded"
                                      />
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink
                                      className={classnames({
                                        active: this.state.activeTab === "2",
                                      })}
                                      onClick={() => {
                                        this.toggleTab("2")
                                      }}
                                    >
                                      <img
                                        src={asset['subImage'][1]}
                                        alt=""
                                        onClick={() => {
                                          this.imageShow(
                                            asset['subImage'][1],
                                            2
                                          )
                                        }}
                                        className="img-fluid mx-auto d-block rounded"
                                      />
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink
                                      className={classnames({
                                        active: this.state.activeTab === "3",
                                      })}
                                      onClick={() => {
                                        this.toggleTab("3")
                                      }}
                                    >
                                      <img
                                        src={asset['subImage'][2]}
                                        alt=""
                                        onClick={() => {
                                          this.imageShow(
                                            asset['subImage'][2],
                                            3
                                          )
                                        }}
                                        className="img-fluid mx-auto d-block rounded"
                                      />
                                    </NavLink>
                                  </NavItem>
                                </Nav>
                              </Col>
                              <Col md={{ size: 7, offset: 1 }} xs="9">
                                <TabContent activeTab={this.state.activeTab}>
                                  <TabPane tabId="1">
                                    <div>
                                      <img
                                        src={assetImages[asset.image]}
                                        alt=""
                                        id="expandedImg1"
                                        className="img-fluid mx-auto d-block"
                                      />
                                    </div>
                                  </TabPane>
                                  <TabPane tabId="2">
                                    <div>
                                      <img
                                        src={assetImages[asset.image]}
                                        id="expandedImg2"
                                        alt=""
                                        className="img-fluid mx-auto d-block"
                                      />
                                    </div>
                                  </TabPane>
                                  <TabPane tabId="3">
                                    <div>
                                      <img
                                        src={assetImages[asset.image]}
                                        id="expandedImg3"
                                        alt=""
                                        className="img-fluid mx-auto d-block"
                                      />
                                    </div>
                                  </TabPane>
                                  <TabPane tabId="4">
                                    <div>
                                      <img
                                        src={assetImages[asset.image]}
                                        id="expandedImg4"
                                        alt=""
                                        className="img-fluid mx-auto d-block"
                                      />
                                    </div>
                                  </TabPane>
                                </TabContent>
                                <div className="text-center">
                                  <Button
                                    type="button"
                                    color="primary"
                                    className="btn mt-2 me-1"
                                  >
                                    <i className="bx bx-cart me-2" /> Add to
                                    cart
                                  </Button>
                                  <Button
                                    type="button"
                                    color="success"
                                    className="ml-1 btn  mt-2"
                                  >
                                    <i className="bx bx-shopping-bag me-2" />
                                    Buy now
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>

                        <Col xl="6">
                          <div className="mt-4 mt-xl-3">
                            <Link to="#" className="text-primary">
                              {asset.category}
                            </Link>
                            <h4 className="mt-1 mb-3">{asset.name}</h4>

                            <div className="text-muted float-start me-3">
                              <StarRatings
                                rating={4}
                                starRatedColor="#F1B44C"
                                starEmptyColor="#2D363F"
                                numberOfStars={5}
                                name="rating"
                                starDimension="14px"
                                starSpacing="3px"
                              />
                            </div>
                            <p className="text-muted mb-4">
                              ( {asset.reviews} Customers Review )
                            </p>

                            {!!asset.isOffer && (
                              <h6 className="text-success text-uppercase">
                                {asset.offer} % Off
                              </h6>
                            )}
                            <h5 className="mb-4">
                              Price :{" "}
                              <span className="text-muted me-2">
                                <del>${asset.oldPrice} USD</del>
                              </span>{" "}
                              <b>${asset.newPrice} USD</b>
                            </h5>
                            <p className="text-muted mb-4">
                              To achieve this, it would be necessary to have
                              uniform grammar pronunciation and more common
                              words If several languages coalesce
                            </p>
                            <Row className="mb-3">
                              <Col md="6">
                                {asset.features &&
                                  asset.features.map((item, i) => (
                                    <div key={i}>
                                      <p className="text-muted">
                                        <i
                                          className={classnames(
                                            item.icon,
                                            " font-size-16 align-middle text-primary me-2"
                                          )}
                                        />
                                        {item.type && `${item.type}: `}
                                        {item.value}
                                      </p>
                                    </div>
                                  ))}
                              </Col>
                              <Col md="6">
                                {asset.features &&
                                  asset.features.map((item, i) => (
                                    <div key={i}>
                                      <p className="text-muted">
                                        <i
                                          className={classnames(
                                            item.icon,
                                            " font-size-16 align-middle text-primary me-2"
                                          )}
                                        />
                                        {item.type && `${item.type}:`}
                                        {item.value}
                                      </p>
                                    </div>
                                  ))}
                              </Col>
                            </Row>

                            <div className="asset-color">
                              <h5 className="font-size-15">Color :</h5>
                              {asset.colorOptions &&
                                asset.colorOptions.map((option, key) => (
                                  <Link to="#" className="active" key={key}>
                                    <div className="asset-color-item border rounded">
                                      <img
                                        src={assetImages[option.image]}
                                        alt=""
                                        className="avatar-md"
                                      />
                                    </div>
                                    <p>{option.color}</p>
                                  </Link>
                                ))}
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <div className="mt-5">
                        <h5 className="mb-3">Specifications :</h5>

                        <div className="table-responsive">
                          <Table className="table mb-0 table-bordered">
                            <tbody>
                              {asset.specification &&
                                asset.specification.map(
                                  (specification, i) => (
                                    <tr key={i}>
                                      <th
                                        scope="row"
                                        style={{ width: "400px" }}
                                        className={"text-capitalize"}
                                      >
                                        {specification.type}
                                      </th>
                                      <td>{specification.value}</td>
                                    </tr>
                                  )
                                )}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                      {/* <Reviews comments={asset.comments} /> */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )}
            {/* <RecentProducts recentProducts={asset.recentProducts} /> */}
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

AssetDetails.propTypes = {
  asset: PropTypes.object,
  match: PropTypes.object,
  onGetAssetDetails: PropTypes.func,
}

const mapStateToProps = ({ ecommerce }) => ({
  asset: indexSetup.assets,
})

const mapDispatchToProps = dispatch => ({
  onGetAssetDetails: id => dispatch(getAssetDetails(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetDetails)
