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
import { Alert, Autocomplete } from "@material-ui/lab";
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
    marginTop: 20,
    marginBottom: 20
  }
};

const UpdateEstudiante = props => {
  //crear state de usuario
  const [perfil, cambiarPerfil] = useState({
    codigo: "",
    nombre: "",
    apellidos: "",
    programa: "",
    tipodoc: "",
    documento: "",
    dirección: "",
    email: "",
    telefono: "",
    estado: "",
    sancion: "",
    multa: "",
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
    programa,
    tipodoc,
    documento,
    dirección,
    email,
    telefono,
    estado,
    sancion,
    multa
  } = perfil;

  //funcion para cuando el usuario envia la informacion
  const submitPerfil = e => {
    e.preventDefault();
    if (
      codigo === "" ||
      nombre === "" ||
      apellidos === "" ||
      programa === "" ||
      tipodoc === "" ||
      documento === "" ||
      dirección === "" ||
      email === "" ||
      telefono === "" ||
      estado === "" ||
      sancion === "" ||
      multa === ""
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
      programa: "",
      tipodoc: "",
      documento: "",
      dirección: "",
      email: "",
      telefono: "",
      estado: "",
      sancion: "",
      multa: ""
    });
  };

  const programas = [
    { state: "Ingeniería Civil" },
    { state: "Ingeniería Mecánica" },
    { state: "Ingeniería de Sistemas" }
  ];
  const documentos = [{ state: "CC" }, { state: "TI" }];
  const estados = [{ state: "Activo" }, { state: "Inactivo" }];
  const detalles = [
    { state: "1 Semana" },
    { state: "1 Mes" },
    { state: "1 Semestre" }
  ];
  const detalles1 = [
    { state: "$1000" },
    { state: "$2000" },
    { state: "$5000" }
  ];

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
                <Link color="inherit" style={style.link} href="/estudiantes">
                  <HomeIcon style={style.homeIcon} />
                  Estudiantes
                </Link>
                <Typography color="textPrimary">
                  Actualizar Estudiante
                </Typography>
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
                  name="apellidos"
                  value={apellidos}
                  onChange={cambiarDato}
                  fullWidth
                  label="Apellidos"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <Autocomplete
                  id="combo-box-demo"
                  name="programa"
                  options={programas}
                  onChange={(event, value) => {
                    cambiarPerfil(prev => ({
                      ...prev,
                      programa: value.state
                    }));
                  }}
                  getOptionLabel={option => option.state}
                  renderInput={params => (
                    <TextField {...params} label="Programa" />
                  )}
                />
              </Grid>

              <Grid item md={6} xs={6}>
                <Autocomplete
                  id="combo-box-demo"
                  name="tipodoc"
                  options={documentos}
                  onChange={(event, value) => {
                    cambiarPerfil(prev => ({
                      ...prev,
                      tipodoc: value.state
                    }));
                  }}
                  getOptionLabel={option => option.state}
                  renderInput={params => (
                    <TextField {...params} label="Tipo de Documento" />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="documento"
                  value={documento}
                  onChange={cambiarDato}
                  fullWidth
                  label="N° de documento"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="dirección"
                  value={dirección}
                  onChange={cambiarDato}
                  fullWidth
                  label="Dirección"
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  name="email"
                  value={email}
                  onChange={cambiarDato}
                  fullWidth
                  label="E-mail"
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
                <Autocomplete
                  id="combo-box-demo"
                  name="estado"
                  options={estados}
                  onChange={(event, value) => {
                    cambiarPerfil(prev => ({
                      ...prev,
                      estado: value.state
                    }));
                  }}
                  getOptionLabel={option => option.state}
                  renderInput={params => (
                    <TextField {...params} label="Estado" />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <Autocomplete
                  id="combo-box-demo"
                  name="sancion"
                  options={detalles}
                  onChange={(event, value) => {
                    cambiarPerfil(prev => ({
                      ...prev,
                      sancion: value.state
                    }));
                  }}
                  getOptionLabel={option => option.state}
                  renderInput={params => (
                    <TextField {...params} label="Sanción" />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <Autocomplete
                  id="combo-box-demo"
                  name="multa"
                  options={detalles1}
                  onChange={(event, value) => {
                    cambiarPerfil(prev => ({
                      ...prev,
                      multa: value.state
                    }));
                  }}
                  getOptionLabel={option => option.state}
                  renderInput={params => (
                    <TextField {...params} label="Multa" />
                  )}
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
export default UpdateEstudiante;
