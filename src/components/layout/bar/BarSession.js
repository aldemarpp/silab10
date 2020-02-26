import React, { Component } from "react";
import {
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Avatar
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { MenuDerecha } from "./menuDerecha";
//import { MenuIzquierda } from "./menuIzquierda";
import { Link } from "react-router-dom";
import fotoUsuarioTemp from "../../../logo.svg";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
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
    fontWeight: 200,
    paddingLeft: "5px",
    color: "#212121"
  },
  list: {
    width: 200
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
    let textoUsuario = "@aldemarpp";

    return (
      <div>
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
              textoUsuario={textoUsuario}
              fotoUsuario={fotoUsuarioTemp}
              salirSesion="Cerrar Sesion"
            />
          </div>
        </Drawer>

        <Toolbar>
          <Typography variant="h6">Silab</Typography>
          <div className={classes.grow}></div>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" component={Link} to="/inmueble/editar">
              <i className="material-icons">mail_outline</i>
            </IconButton>
            <Button color="inherit" onClick="">
              Salir
            </Button>
            <Button color="inherit">{textoUsuario}</Button>
            <Avatar src={fotoUsuarioTemp}></Avatar>

            <IconButton
              color="inherit"
              onClick={this.toggleDrawer("right", true)}
            >
              <i className="material-icons">menu</i>
            </IconButton>
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
