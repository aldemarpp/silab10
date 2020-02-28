import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";

export const MenuDerecha = ({ classes, textoUsuario, fotoUsuario }) => (
  <div className={classes.list}>
    <List>
      <ListItem button component={Link} to="/auth/perfil">
        <Avatar src={fotoUsuario} />
        <ListItemText
          classes={{ primary: classes.ListItemText }}
          primary={textoUsuario}
        />
      </ListItem>
      <Divider />
      <ListItem component={Link} button to="/auth/perfil">
        <i className="material-icons">account_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Perfil"
        />
      </ListItem>
      <Divider />
      <ListItem component={Link} button to="/elementos">
        <i className="material-icons">business</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Elementos"
        />
      </ListItem>
      <ListItem component={Link} button to="/mantenimientos">
        <i className="material-icons">add_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Mantenimientos"
        />
      </ListItem>
      <ListItem component={Link} button to="/trabajos">
        <i className="material-icons">add_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Trabajos"
        />
      </ListItem>
      <ListItem component={Link} button to="/">
        <i className="material-icons">mail_outline</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Mensajes"
        />
      </ListItem>
      <ListItem component={Link} button to="/usuarios">
        <i className="material-icons">account_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Usuarios"
        />
      </ListItem>
      <Divider />
      <ListItem component={Link} button to="Cerrar Sesión">
        <i className="material-icons">account_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Cerrar Sesión"
        />
      </ListItem>
    </List>
  </div>
);
