import React, { useState, Fragment } from "react";
import {
  Container,
  Paper,
  Grid,
  Breadcrumbs,
  Link,
  Avatar,
  IconButton,
  Collapse,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Alert, Autocomplete } from "@material-ui/lab";
import { Close as CloseIcon } from "@material-ui/icons";
import fotoUsuarioTemp from "../../../logo.svg";
import ImageUploader from "react-images-upload";
import { v4 as uuidv4 } from "uuid";

const style = {
  container: {
    paddingTop: "20px"
  },
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5"
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
    width: "100%"
  },
  submit: {
    marginTop: 30,
    marginBottom: 20
  },
  foto: {
    height: "100px"
  },
  avatar: {
    margin: 25,
    backgroundColor: "#e53935"
  },
  error: {
    marginTop: 20
  }
};

const NuevoUsuario = props => {
  //crear state de usuario
  const [perfil, cambiarPerfil] = useState({
    codigo: "",
    nombre: "",
    apellidos: "",
    nickname: "",
    email: "",
    password: "",
    tipo: "",
    telefono: "",
    registro: "",
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
  const {
    codigo,
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
      codigo === "" ||
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
      codigo: "",
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
  const estadoele = [{ state: "Activo" }, { state: "Inactivo" }];

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

  return (
    <Fragment>
      <Container
        style={style.container}
        component="main"
        maxWidth="lg"
        justify="center"
      >
        <Paper style={style.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" style={style.link} href="/usuarios">
                  <HomeIcon style={style.homeIcon} />
                  Usuarios
                </Link>
                <Typography color="textPrimary">Registrar Usuario</Typography>
              </Breadcrumbs>
            </Grid>
          </Grid>
          <Avatar style={style.avatar} src={fotoUsuarioTemp}></Avatar>

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

          <form style={style.form} onSubmit={submitPerfil}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={6}>
                <TextField
                  name="codigo"
                  value={codigo}
                  onChange={cambiarDato}
                  fullWidth
                  label="Ingrese su Código"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="nombre"
                  value={nombre}
                  onChange={cambiarDato}
                  fullWidth
                  label="Ingrese su Nombre"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="apellidos"
                  value={apellidos}
                  onChange={cambiarDato}
                  fullWidth
                  label="Ingrese sus apellidos"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="nickname"
                  value={nickname}
                  onChange={cambiarDato}
                  fullWidth
                  label="Ingrese su Nickname"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="email"
                  value={email}
                  onChange={cambiarDato}
                  fullWidth
                  label="Ingrese su e-mail"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  type="password"
                  name="password"
                  value={password}
                  onChange={cambiarDato}
                  fullWidth
                  label="Ingrese su password"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <Autocomplete
                  id="combo-box-demo"
                  options={tipos}
                  onChange={cambiarDato}
                  getOptionLabel={option => option.clase}
                  renderInput={params => (
                    <TextField
                      {...params}
                      name="tipo"
                      value={tipos}
                      label="Tipo de Usuario"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Autocomplete
                  id="combo-box-demo"
                  options={estadoele}
                  getOptionLabel={option => option.state}
                  renderInput={params => (
                    <TextField {...params} label="Seleccione un estado" />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="telefono"
                  fullWidth
                  label="Teléfono"
                  value={telefono}
                  onChange={cambiarDato}
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="registro"
                  fullWidth
                  label="Registrado por"
                  value={registro}
                  onChange={cambiarDato}
                />
              </Grid>
              <Grid container justify="center">
                <Grid item md={6} xs={6}>
                  <ImageUploader
                    withIcon={false}
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
                <Grid item xs={6} md={4}>
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
            </Grid>
          </form>
        </Paper>
      </Container>
    </Fragment>
  );
};
export default NuevoUsuario;
