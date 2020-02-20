import React, { Component } from "react";
import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import LockOutLineIcon from "@material-ui/icons/LockOutlined";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 8,
    backgroundColor: "#e53935"
  },
  form: {
    width: "100%",
    marginTop: 10
  },
  submit: {
    marginTop: 15,
    marginBotton: 20
  }
};

class RegistrarUsuario extends Component {
  state = {
    usuario: {
      nombre: "",
      apellido: "",
      email: "",
      password: ""
    }
  };

  onchange = e => {
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({
      usuario: usuario
    });
  };

  registrarUsuario = e => {
    e.preventDefault();
    console.log("imprimir objeto usuario del state", this.state.usuario);
  };

  render() {
    return (
      <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutLineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre su cuenta
          </Typography>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="nombre"
                  fullWidth
                  onChange={this.onChange}
                  value={this.state.usuario.nombre}
                  label="Ingrese su nombre"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  item
                  name="apellido"
                  fullWidth
                  label="Ingrese sus apellidos"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  item
                  name="email"
                  fullWidth
                  label="Ingrese su e-mail"
                ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  item
                  type="password"
                  name="password"
                  fullWidth
                  label="Ingrese su password"
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} md={6}>
                <Button
                  type="submit"
                  onClick={this.registrarUsuario}
                  variant="contained"
                  fullWidth
                  size="large"
                  color="primary"
                  style={style.submit}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default RegistrarUsuario;
