import React, { Component } from "react"
import PropTypes from "prop-types"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    let matchingMenuItem = null
    const ul = document.getElementById("navigation")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem)
    }
  }

  activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <div className="container-fluid">
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      to="/dashboard"
                    >
                      <i className="mdi mdi-view-dashboard-outline" />
                      {this.props.t("Dashboard")} 
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/wallet"
                      className="nav-link dropdown-toggle arrow-none"
                    >
                      <i className="mdi mdi-wallet-outline" />
                      {this.props.t("Wallet")}
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/index"
                      className="nav-link dropdown-toggle arrow-none"
                    >
                      <i className="mdi mdi-chart-donut-variant" />
                      {this.props.t("Index")}
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/tracker"
                      className="nav-link dropdown-toggle arrow-none"
                    >
                      <i className="mdi mdi-chart-multiple" />
                      {this.props.t("Analytics")}
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/transactions"
                      className="nav-link dropdown-toggle arrow-none"
                    >
                      <i className="mdi mdi-archive-outline" />
                      {this.props.t("Transactions")}
                    </Link>
                  </li>

                </ul>
              </Collapse>
            </nav>
          </div>
        </div>
      </React.Fragment >
    )
  }
}

Navbar.propTypes = {
  location: PropTypes.object,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(Navbar))
