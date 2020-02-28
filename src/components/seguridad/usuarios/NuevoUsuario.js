import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Paper,
  Breadcrumbs,
  Link,
  Avatar,
  Grid,
  Button
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Autocomplete } from "@material-ui/lab";
import fotoUsuarioTemp from "../../../logo.svg";
import ImageUploader from "react-images-upload";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5"
  },
  avatar: {
    margin: 8,
    backgroundColor: "#e53935"
  },
  link: {
    display: "flex"
  },
  homeIcon: {
    width: 20,
    height: 20,
    marginRight: "4px"
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

const NuevoUsuario = () => {
  //crear state de usuario
  const [perfil, cambiarPerfil] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    tipo: "",
    telefono: "",
    registro: ""
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
  const {
    nombre,
    apellidos,
    nickname,
    email,
    password,
    tipo,
    telefono,
    registro
  } = perfil;

  //funcion para cuando el usuario envia la informacion
  const submitPerfil = e => {
    e.preventDefault();
    if (
      nombre === "" ||
      apellidos === "" ||
      nickname === "" ||
      email === "" ||
      password === "" ||
      tipo === "" ||
      telefono === "" ||
      registro === ""
    ) {
      actualizarError(true);
      return;
    }

    console.log(perfil);
    actualizarError(false);

    //Agregar Usuario o Actualizar

    //Reiniciar el form
    cambiarPerfil({
      nombre: "",
      apellidos: "",
      nickname: "",
      email: "",
      password: "",
      tipo: "",
      telefono: "",
      registro: ""
    });
  };

  const tipos = [
    { clase: "Administrador" },
    { clase: "Laboratorista" },
    { clase: "Beca-Trabajo" }
  ];

  return (
    <Container style={style.container}>
      <Paper style={style.paper}>
        {error ? (
          <p style={style.error}>¡Todos los campos son obligatorios!</p>
        ) : null}

        <form style={style.form} onSubmit={submitPerfil}>
          <Grid container spacing={2}>
            <Grid item xs={10} md={12}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" style={style.link} href="/usuarios">
                  <HomeIcon style={style.homeIcon} />
                  Usuarios
                </Link>
                <Typography color="textPrimary">Registrar Usuario</Typography>
              </Breadcrumbs>
            </Grid>

            <Grid item md={6} xs={6}>
              <TextField
                name="nombre"
                value={nombre}
                onChange={cambiarPerfil}
                fullWidth
                label="Ingrese su nombre"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                name="apellidos"
                value={apellidos}
                onChange={cambiarPerfil}
                fullWidth
                label="Ingrese sus apellidos"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                name="nickname"
                value={nickname}
                onChange={cambiarPerfil}
                fullWidth
                label="Ingrese su Nickname"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                name="email"
                value={email}
                onChange={cambiarPerfil}
                fullWidth
                label="Ingrese su e-mail"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                type="password"
                name="password"
                value={password}
                onChange={cambiarPerfil}
                fullWidth
                label="Ingrese su password"
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <Autocomplete
                id="combo-box-demo"
                options={tipos}
                getOptionLabel={option => option.clase}
                renderInput={params => (
                  <TextField {...params} label="Tipo de Usuario" />
                )}
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                name="telefono"
                fullWidth
                label="Teléfono"
                value={telefono}
                onChange={cambiarPerfil}
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                name="registro"
                fullWidth
                label="Registrado por"
                value={registro}
                onChange={cambiarPerfil}
              />
            </Grid>
            <Grid item md={12} xs={6}>
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
            <Grid item xs={6} md={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="medium"
                color="primary"
                style={style.submit}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export default NuevoUsuario;
