import React, { useState, Fragment } from "react";
import {
  Container,
  Typography,
  TextField,
  Avatar,
  Grid,
  Button
} from "@material-ui/core";
import reactFoto from "../../logo.svg";
import ImageUploader from "react-images-upload";

const style = {
  paper: {
    margin: 9,
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
    marginTop: 15
  },
  submit: {
    marginTop: 30,
    marginBottom: 20
  },
  error: {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    fontSize: "20px",
    textAlign: "center"
  }
};

const PerfilUsuario = () => {
  //crear state de usuario
  const [perfil, cambiarPerfil] = useState({
    codigo: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    telefono: "",
    foto: ""
  });

  //crear state de error
  const [error, actualizarError] = useState(false);

  //funcion para cuando el usuario escribe en los inputs
  const cambiarDato = e => {
    const { name, value } = e.target;
    cambiarPerfil(prev => ({
      ...prev,
      [name]: value
    }));
  };

  //Extraer los valores de los inputs
  const { codigo, nombre, apellido, email, password, telefono } = perfil;

  //funcion para cuando el usuario envia la informacion
  const submitPerfil = e => {
    e.preventDefault();
    if (
      codigo === "" ||
      nombre === "" ||
      apellido === "" ||
      email === "" ||
      password === "" ||
      telefono === ""
    ) {
      actualizarError(true);
      return;
    }

    console.log(perfil);
    actualizarError(false);

    //Agregar Usuario o Actualizar

    //Reiniciar el form
    cambiarPerfil({
      codigo: "",
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      telefono: ""
    });
  };

  return (
    <Fragment>
      <Container component="main" maxWidth="md" justify="center">
        <div style={style.paper}>
          {error ? (
            <p style={style.error}>¡Todos los campos son obligatorios!</p>
          ) : null}
          <Avatar style={style.avatar} src={perfil.foto || reactFoto} />
          <Typography component="h1" variant="h5">
            Perfil de Cuenta
          </Typography>
          <form style={style.form} onSubmit={submitPerfil}>
            <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
                <TextField
                  variant="outlined"
                  name="codigo"
                  fullWidth
                  label="Codigo"
                  value={codigo}
                  onChange={cambiarPerfil}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  variant="outlined"
                  name="nombre"
                  fullWidth
                  label="Nombre"
                  value={nombre}
                  onChange={cambiarPerfil}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  variant="outlined"
                  name="apellido"
                  fullWidth
                  label="Apellidos"
                  value={apellido}
                  onChange={cambiarPerfil}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  variant="outlined"
                  name="email"
                  fullWidth
                  label="Correo"
                  value={email}
                  onChange={cambiarPerfil}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  variant="outlined"
                  type="password"
                  name="password"
                  fullWidth
                  label="Contraseña"
                  value={password}
                  onChange={cambiarPerfil}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  variant="outlined"
                  name="telefono"
                  fullWidth
                  label="Teléfono"
                  value={telefono}
                  onChange={cambiarPerfil}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <ImageUploader
                  withIcon={false}
                  key={1000}
                  singleImage={true}
                  buttonText="Seleccione su imagen de perfil"
                  //onChange={subirFoto}
                  imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                  maxFileSize={5242880}
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} md={6}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="medium"
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
    </Fragment>
  );
};
export default PerfilUsuario;
