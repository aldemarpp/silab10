import React, { useState, Fragment } from "react";
import {
  Container,
  Paper,
  Grid,
  Breadcrumbs,
  Link,
  IconButton,
  Collapse,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Alert } from "@material-ui/lab";
import { Close as CloseIcon } from "@material-ui/icons";
//import fotoUsuarioTemp from "../../../../logo.svg";
//import ImageUploader from "react-images-upload";
//import { v4 as uuidv4 } from "uuid";

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
const UpdateLaboratorio = props => {
  //crear state de usuario
  const [perfil, cambiarPerfil] = useState({
    codigo: "",
    nombre: "",
    ubicacion: "",
    registro: "",
    observacion: ""
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
  const { codigo, nombre, ubicacion, registro, observacion } = perfil;

  //funcion para cuando el usuario envia la informacion
  const submitPerfil = e => {
    e.preventDefault();
    if (
      codigo === "" ||
      nombre === "" ||
      ubicacion === "" ||
      registro === "" ||
      observacion === ""
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
      ubicacion: "",
      registro: "",
      observacion: ""
    });
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
                <Link color="inherit" style={style.link} href="/laboratorios">
                  <HomeIcon style={style.homeIcon} />
                  Laboratorios
                </Link>
                <Typography color="textPrimary">Agregar Laboratorio</Typography>
              </Breadcrumbs>
            </Grid>
          </Grid>

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
                  label="Código"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="nombre"
                  value={nombre}
                  onChange={cambiarDato}
                  fullWidth
                  label="Nombre"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="ubicacion"
                  value={ubicacion}
                  onChange={cambiarDato}
                  fullWidth
                  label="Ubicación"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="observacion"
                  value={observacion}
                  onChange={cambiarDato}
                  fullWidth
                  label="Observaciones"
                />
              </Grid>

              <Grid item md={6} xs={6}>
                <TextField
                  name="registro"
                  value={registro}
                  onChange={cambiarDato}
                  fullWidth
                  label="Registrado Porregistro"
                />
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
export default UpdateLaboratorio;
