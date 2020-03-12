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
    marginTop: 20
  }
};

const UpdateEstudiante = props => {
  //crear state de usuario
  const [perfil, cambiarPerfil] = useState({
    codigo: "",
    nombre: "",
    apellidos: "",
    programa: "",
    dirección: "",
    email: "",
    documento: "",
    tipodoc: "",
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
    nombre,
    apellidos,
    dirección,
    email,
    documento,
    tipodoc,
    telefono,
    estado,
    sancion,
    multa
  } = perfil;

  //funcion para cuando el usuario envia la informacion
  const submitPerfil = e => {
    e.preventDefault();
    if (
      nombre === "" ||
      apellidos === "" ||
      dirección === "" ||
      email === "" ||
      documento === "" ||
      tipodoc === "" ||
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
      nombre: "",
      apellidos: "",
      dirección: "",
      email: "",
      documento: "",
      tipodoc: "",
      telefono: "",
      estado: "",
      sancion: "",
      multa: ""
    });
  };

  const programas = [
    { clase: "Ingeniería Civil" },
    { clase: "Ingeniería Mecánica" },
    { clase: "Ingeniería de Sistemas" }
  ];
  const documentos = [{ clase: "CC" }, { clase: "TI" }];
  const estados = [{ condicion: "Activo" }, { condicion: "Inactivo" }];

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
                <Autocomplete
                  id="combo-box-demo"
                  disable
                  onChange={cambiarDato}
                  getOptionLabel={option => option.clase}
                  renderInput={params => (
                    <TextField {...params} name="codigo" label="Código" />
                  )}
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
                  options={programas}
                  onChange={cambiarDato}
                  getOptionLabel={option => option.clase}
                  renderInput={params => (
                    <TextField
                      {...params}
                      name="programa"
                      value={programas}
                      label="Programa"
                    />
                  )}
                />
              </Grid>

              <Grid item md={6} xs={6}>
                <Autocomplete
                  id="combo-box-demo"
                  options={documentos}
                  onChange={cambiarDato}
                  getOptionLabel={option => option.clase}
                  renderInput={params => (
                    <TextField
                      {...params}
                      name="tipodoc"
                      value={documentos}
                      label="Tipo de Documento"
                    />
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
                  options={estados}
                  onChange={cambiarDato}
                  getOptionLabel={option => option.condicion}
                  renderInput={params => (
                    <TextField
                      {...params}
                      name="estado"
                      value={estados}
                      label="Estado"
                    />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <Autocomplete
                  id="combo-box-demo"
                  onChange={cambiarDato}
                  getOptionLabel={option => option.condicion}
                  renderInput={params => (
                    <TextField {...params} name="sancion" label="Sanción" />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <Autocomplete
                  id="combo-box-demo"
                  onChange={cambiarDato}
                  getOptionLabel={option => option.condicion}
                  renderInput={params => (
                    <TextField {...params} name="multa" label="Multa" />
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
