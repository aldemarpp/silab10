import React from "react";
import { List, Link, ListItem, ListItemText, Avatar } from "@material-ui/core";

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
      <ListItem buton onClick={salirSesion}>
        <ListItemText
          classes={{ primary: classes.ListItemText }}
          primary="Salir"
        />
      </ListItem>
    </List>
  </div>
);
