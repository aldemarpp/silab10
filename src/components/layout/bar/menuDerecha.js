import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";

export const MenuDerecha = ({
  classes,
  textoUsuario,
  fotoUsuario,
  salirSesion
}) => (
  <div className={classes.list}>
    <List>
      <ListItem button component={Link} to="/auth/registrarUsuario">
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
    </List>
    <Divider />
    <list>
      <ListItem component={Link} button to="/inmueble/nuevo">
        <i className="material-icons">add_box</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Nuevo Inmueble"
        />
      </ListItem>
      <ListItem component={Link} button to="">
        <i className="material-icons">business</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Inmuebles"
        />
      </ListItem>
      <ListItem component={Link} button to="/inmueble/editar">
        <i className="material-icons">mail_outline</i>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Mensajes"
        />
      </ListItem>
      <Divider />
      <List>
        <ListItem component={Link} button to="Cerrar Sesión">
          <i className="material-icons">account_box</i>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Cerrar Sesión"
          />
        </ListItem>
      </List>
    </list>
  </div>
);
