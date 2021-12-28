import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import RightSidebar from '../CommonForBoth/RightSidebar';

import megamenuImg from "../../assets/images/megamenu-img.png";
import logo from "../../assets/images/zendex_logo_dark_text.svg";
import logoLight from "../../assets/images/zendex_logo_dark_text.png";
import logoLightSvg from "../../assets/images/zendex_logo_dark_text.svg";
import logoDark from "../../assets/images/zendex_logo_dark_text.png";

// import images
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";

// Redux Store
import { toggleRightSidebar } from "../../store/actions";

//i18n
import { withTranslation } from "react-i18next";
import { AccountBookFilled } from "@ant-design/icons";

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearch: false,
      open: false,
      position: 'right',
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleFullscreen = this.toggleFullscreen.bind(this)
    this.toggleSearch = this.toggleSearch.bind(this)
    this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch })
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.openLeftMenuCallBack()
  }

  /**
   * Toggles the sidebar
   */
  toggleRightDrawer() {
    this.setState({ position: 'right' });
    this.setState({ open: !this.state.open });
  }
  closeDrawer() {
    this.setState({ open: false });
  }
  onDrawerClose() {
    this.setState({ open: false });
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

 login() {
    let user = Moralis.User.current();
    if (!user) {
      user = Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console(error);
        });
    }
  }

  logout() {
    Moralis.User.logOut();
    console.log("logged out");
  }



  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logo} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoDark} alt="" height="100" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLightSvg} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="60" />
                  </span>
                </Link>
              </div>

              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
                data-toggle="collapse"
                onClick={this.toggleMenu}
                data-target="#topnav-menu-content"
              >
                <i className="fa fa-fw fa-bars" />
              </button>
            </div>

            <div className="d-flex">
              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  className="btn header-item noti-icon"
                  onClick={this.toggleFullscreen}
                  data-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen" />
                </button>
              </div>
              
            
            <div className="d-flex"/>
              <button
                onClick={this.login}>Connect</button>
            <div className="d-flex"/>
              <button
                onClick={this.logout}>Disconnect</button>

              {/* <Account /> */}


              <ProfileMenu />

            </div>
          </div>
        </header>
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
        >
          <RightSidebar onClose={this.onDrawerClose} />
        </ReactDrawer>
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  openLeftMenuCallBack: PropTypes.func,
  t: PropTypes.any,
  toggleRightSidebar: PropTypes.func
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout
  return { layoutType }
}

export default connect(mapStatetoProps, { toggleRightSidebar })(
  withTranslation()(Header)
)
