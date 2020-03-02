import React, { useState, Fragment } from "react";
import {
  Container,
  Typography,
  TextField,
  Avatar,
  Grid,
  Button,
  IconButton,
  Collapse,
  Paper
} from "@material-ui/core";
import reactFoto from "../../../logo.svg";
import { Close as CloseIcon } from "@material-ui/icons";
import { Alert, Autocomplete } from "@material-ui/lab";
import ImageUploader from "react-images-upload";
import { v4 as uuidv4 } from "uuid";

const style = {
  paper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#E8E8E8"
  },
  avatar: {
    margin: 8,
    backgroundColor: "#e53935"
  },
  form: {
    width: "90%",
    marginTop: 15
  },
  submit: {
    marginTop: 30,
    marginBottom: 20
  },
  error: {
    marginTop: 20
  }
};

const PerfilUsuario = props => {
  //crear state de usuario
  const [perfil, cambiarPerfil] = useState({
    codigo: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    telefono: "",
    foto: "",
    cargo: ""
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
  const { codigo, nombre, apellido, email, password, telefono, cargo } = perfil;

  //funcion para cuando el usuario envia la informacion
  const submitPerfil = e => {
    e.preventDefault();
    if (
      codigo === "" ||
      nombre === "" ||
      apellido === "" ||
      email === "" ||
      password === "" ||
      telefono === "" ||
      cargo === ""
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
      telefono: "",
      cargo: ""
    });
  };

  const subirFoto = fotos => {
    //1. Capturar la imagen
    const foto = fotos[0];
    //2. Generar codigo para la imagen
    const claveUnicaFoto = uuidv4();
    //3. Obtener el nombre de la foto
    const nombreFoto = foto.name;
    //4. Obtener la extencion de la imagen
    const extensionFoto = nombreFoto.split(".").pop();
    //5. Crear el nuevo nombre para la imagen
    //5.1 divide el nombre de la foto donde encuentra un punto y toma la primera parte => Imagen 1.png = 'image'+'png'
    //5.2 agrega un _ despues de la primera parte =>'imagen 1_'
    //5.3 agrega la clave unica => 'Imagen 1_51223678'
    //5.4 agrega la extencion => 'Imagen 1_51223678.png'
    //5.5 reemplaza el espacio con _ => 'Imagen_1_51223678.png'
    //5.6 cambia el nombre a minuscula => 'imagen_1_51223678.png'
    const alias = (
      nombreFoto.split(".")[0] +
      "_" +
      claveUnicaFoto +
      "." +
      extensionFoto
    ).replace(/\s/g, "_").toLowerCase;

    console.log(alias);
  };

  const cargos = [
    { nombre: "Administrador", descripcion: "Acceso Ilimitado" },
    { nombre: "Laboratorista", descripcion: "Acceso parcialmente limitado" },
    { nombre: "Beca-trabajo", descripcion: "Acceso muy limitado" }
  ];

  return (
    <Fragment>
      <Container component="main" maxWidth="md" justify="center">
        <Paper style={style.paper}>
          <Collapse in={error} style={style.error}>
            <Alert
              variant="filled"
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  onClick={() => {
                    actualizarError(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              ¡Tiene que llenar todos los campos!
            </Alert>
          </Collapse>
          <Avatar style={style.avatar} src={perfil.foto || reactFoto} />
          <Typography component="h1" variant="h5">
            Perfil de Cuenta
          </Typography>
          <form style={style.form} onSubmit={submitPerfil}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="codigo"
                  fullWidth
                  label="Codigo"
                  value={codigo}
                  onChange={cambiarDato}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="nombre"
                  fullWidth
                  label="Nombre"
                  value={nombre}
                  onChange={cambiarDato}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="apellido"
                  fullWidth
                  label="Apellidos"
                  value={apellido}
                  onChange={cambiarDato}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="email"
                  fullWidth
                  label="Correo"
                  value={email}
                  onChange={cambiarDato}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  type="password"
                  name="password"
                  fullWidth
                  label="Contraseña"
                  value={password}
                  onChange={cambiarDato}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="telefono"
                  fullWidth
                  label="Teléfono"
                  value={telefono}
                  onChange={cambiarDato}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  name="cargo"
                  fullWidth
                  options={cargos}
                  getOptionLabel={option => option.nombre}
                  renderInput={params => (
                    <TextField
                      {...params}
                      name="cargo"
                      value={cargos => cargos.nombre}
                      label="Seleccione un cargo"
                    />
                  )}
                  onChange={cambiarDato}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <ImageUploader
                  withIcon={true}
                  key={1000}
                  singleImage={true}
                  buttonText="Seleccione su imagen de perfil"
                  onChange={subirFoto}
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
        </Paper>
      </Container>
    </Fragment>
  );
};
export default PerfilUsuario;
