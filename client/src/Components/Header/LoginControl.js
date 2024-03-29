import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
    
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <Logout onClick={this.handleLogoutClick} />;
    } else {
      button = <Login onClick={this.handleLoginClick} />;
    }

    return <div>{button}</div>;
  }
}

export default LoginControl;
