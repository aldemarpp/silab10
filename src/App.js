import React, { Component } from "react";
import "./App.css";
import ListaInmuebles from "./components/vistas/ListaInmuebles";
import AppNavBar from "./components/layout/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme/theme";
import Grid from "@material-ui/core/Grid";
import RegistrarUsuario from "./components/seguridad/RegistrarUsuario";
import Login from "./components/seguridad/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavBar />

          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
              <Route
                path="/auth/registrarUsuario"
                exact
                component={RegistrarUsuario}
              ></Route>
              <Route path="/auth/login" exact component={Login}></Route>
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
