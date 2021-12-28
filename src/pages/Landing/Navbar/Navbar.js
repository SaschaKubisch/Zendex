import PropTypes from 'prop-types';
import React, { Component } from "react";
import {
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "./scrollSpy";

//Import Images
import logodark from "../../../assets/images/zendex_logo_light_text_transparent.svg";
import logolight from "../../../assets/images/zendex_logo_dark_text_transparent.svg";

class Navbar_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "features", navheading: "Features" },
        { id: 3, idnm: "roadmap", navheading: "Roadmap" },
        { id: 4, idnm: "team", navheading: "Team" },,
      ],
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let TargetId = this.state.navItems.map(item => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <nav
          className={"navbar navbar-expand-lg navigation fixed-top sticky " + this.props.navClass}
        >
          <Container>
            <Link className="navbar-logo" to="/">
              <img src={logodark} alt="" height="150" className="logo logo-dark" />
              <img src={logolight} alt="" height="150" className="logo logo-light" />
            </Link>

            <NavbarToggler className="p-0" onClick={this.toggle}>
              <i className="fa fa-fw fa-bars" />
            </NavbarToggler>

            <Collapse
              id="topnav-menu-content"
              isOpen={this.state.isOpenMenu}
              navbar
            >
              <ScrollspyNav
                scrollTargetIds={TargetId}
                scrollDuration="300"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav className="ms-auto navbar-nav" id="topnav-menu">
                  {this.state.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink href={"#" + item.idnm}>
                        {" "}
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </ScrollspyNav>
              <div className="ms-lg-2">
                <Link to="/login" className="btn btn-outline-success w-xs">
                  Launch App
                </Link>
              </div>
            </Collapse>
          </Container>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar_Page;

Navbar_Page.propTypes = {
  imglight: PropTypes.bool,
  navClass: PropTypes.string
};