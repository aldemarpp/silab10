import React, { Component } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Avatar,
  Typography
} from "@material-ui/core";
import fotoUsuarioTemp from "../../logo.svg";
import ImageUploader from "react-images-upload";
import uuid from "uuid";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%",
    marginTop: 20
  },
  submit: {
    marginTop: 15,
    marginBottom: 20
  }
};

class PerfilUsuario extends Component {
  state = {
    usuario: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      id: "",
      foto: ""
    }
  };

  onChange2 = e => {
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({
      usuario: usuario
    });
  };

  perfilUsuario = e => {
    e.preventDefault();
    console.log("imprimir objeto usuario del state", this.state.usuario);
  };

  render() {
    const subirFoto = fotos => {
      const foto = fotos[0];
      const claveUnicaFoto = uuid.v4();
      const nombreFoto = foto.name;
      const extensionFoto = nombreFoto.split(".").pop();
      const alias = (
        nombreFoto.split(".")[0] +
        "_" +
        claveUnicaFoto +
        "." +
        extensionFoto
      )
        .replace(/\s/g, "_")
        .toLowerCase();
    };

    let fotoKey = uuid.v4();

    return (
      <Container component="main" maxWidth="md" justify="center">
        <div style={style.paper}>
          <Avatar src={fotoUsuarioTemp}></Avatar>
          <Typography component="h1" variant="h5">
            Perfil de Usuario
          </Typography>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="nombre"
                  variant="outlined"
                  fullWidth
                  label="Nombre"
                  onChange={this.onChange2}
                  value={this.state.usuario.nombre}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="apellido"
                  variant="outlined"
                  fullWidth
                  label="Apellidos"
                  onChange={this.onChange2}
                  value={this.state.usuario.apellido}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  variant="outlined"
                  fullWidth
                  label="E-mail"
                  onChange={this.onChange2}
                  value={this.state.usuario.email}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="telefono"
                  variant="outlined"
                  fullWidth
                  label="Telefono"
                  onChange={this.onChange2}
                  value={this.state.usuario.telefono}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <ImageUploader
                  withIcon={false}
                  key={fotoKey}
                  singleImage={true}
                  buttonText="Seleccione una imagen"
                  onChange={subirFoto}
                  imgExtension={[".jgp", ".gif", ".png", ".jpeg"]}
                  maxFileSize={5242880}
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} md={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  color="primary"
                  style={style.submit}
                  onClick={this.perfilUsuario}
                >
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default PerfilUsuario;
