import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
//import Toolbar from "@material-ui/core/Toolbar";
import BarSession from "./bar/BarSession";

export default class AppNavbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <BarSession />
        </AppBar>
      </div>
    );
  }
}
