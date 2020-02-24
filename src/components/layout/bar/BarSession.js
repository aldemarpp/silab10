import React, { Component } from "react";
import {
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { MenuDerecha } from "./menuDerecha";
import { MenuIzquierda } from "./menuIzquierda";
import fotoUsuarioTemp from "../../../logo.svg";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  grow: {
    flexGrow: 1
  },
  avatarSize: {
    width: 40,
    height: 40
  },
  listItemText: {
    fontSize: "14px",
    fontWeight: 600,
    paddingLeft: "15px",
    color: "#212121"
  },
  list: {
    width: 250
  }
});

class BarSession extends Component {
  state = {
    right: false,
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    // let textoUsuario = usuario.nombre + " " + usuario.apellido;

    return (
      <div>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
          anchor="left"
        >
          <div
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            <MenuIzquierda classes={classes} />
          </div>
        </Drawer>

        <Drawer
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
          anchor="right"
        >
          <div
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            <MenuDerecha
              classes={classes}
              //textoUsuario={textoUsuario}
              fotoUsuario={fotoUsuarioTemp}
              salirSesion={this.salirSesion}
            />
          </div>
        </Drawer>

        <Toolbar>
          <IconButton color="inherit" onClick={this.toggleDrawer("left", true)}>
            <i className="material-icons">menu</i>
          </IconButton>
          <Typography variant="h6">Silab</Typography>
          <div className={classes.grow}></div>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" component={Link} to="">
              <i className="material-icons">mail_outline</i>
            </IconButton>
            <Button color="inherit" onClick={this.salirSesionApp}>
              Cerrar Sesión
            </Button>
            <Button color="inherit">Login</Button>
            <Avatar src={fotoUsuarioTemp}></Avatar>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              color="inherit"
              onClick={this.toggleDrawer("right", true)}
            >
              <i className="material-icons">more_vert</i>
            </IconButton>
          </div>
        </Toolbar>
      </div>
    );
  }
}

export default compose(withRouter, withStyles(styles))(BarSession);
