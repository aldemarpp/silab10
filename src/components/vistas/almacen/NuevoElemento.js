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

const NuevoElemento = props => {
  //crear state de usuario
  const [perfil, cambiarPerfil] = useState({
    codigo: "",
    nombre: "",
    stock: "",
    horas_uso: "",
    estado: "",
    categoria: "",
    tiempo_prestamo: "",
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
    stock,
    horas_uso,
    estado,
    categoria,
    tiempo_prestamo,
    sancion,
    multa
  } = perfil;

  //funcion para cuando el usuario envia la informacion
  const submitPerfil = e => {
    e.preventDefault();
    if (
      codigo === "" ||
      nombre === "" ||
      stock === "" ||
      horas_uso === "" ||
      estado === "" ||
      categoria === "" ||
      tiempo_prestamo === "" ||
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
      stock: "",
      horas_uso: "",
      estado: "",
      categoria: "",
      tiempo_prestamo: "",
      sancion: "",
      multa: ""
    });
  };

  const estadoele = [{ state: "Activo" }, { state: "Inactivo" }];
  const detalles = [{ category: "A" }, { category: "B" }, { category: "C" }];
  const detalles1 = [
    { time: "2 Horas" },
    { time: "4 Horas" },
    { time: "1 Día" }
  ];
  const detalles2 = [
    { sancions: "1 Semana" },
    { sancions: "1 Mes" },
    { sancions: "1 Semestre" }
  ];
  const detalles3 = [{ mult: "$1000" }, { mult: "$2000" }, { mult: "$5000" }];

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
        maxWidth="md"
        justify="center"
      >
        <Paper style={style.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" style={style.link} href="/elementos">
                  <HomeIcon style={style.homeIcon} />
                  Elementos
                </Link>
                <Typography color="textPrimary">Actualizar Elemento</Typography>
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
              <Grid item xs={6} md={4}>
                <TextField
                  name="nombre"
                  label="Nombre del elemento"
                  fullWidth
                  value={nombre}
                  onChange={cambiarDato}
                />
              </Grid>

              <Grid item xs={6} md={4}>
                <TextField
                  name="stock"
                  label="Stock"
                  fullWidth
                  value={stock}
                  onChange={cambiarDato}
                />
              </Grid>

              <Grid item xs={6} md={4}>
                <TextField
                  name="horas de uso"
                  label="Horas de uso"
                  fullWidth
                  value={horas_uso}
                  onChange={cambiarDato}
                />
              </Grid>

              <Grid item xs={6} md={4}>
                <Autocomplete
                  id="combo-box-demo"
                  options={estadoele}
                  getOptionLabel={option => option.state}
                  renderInput={params => (
                    <TextField {...params} label="Seleccione un estado" />
                  )}
                />
              </Grid>

              <Grid item xs={6} md={4}>
                <Autocomplete
                  id="combo-box-demo"
                  options={detalles}
                  getOptionLabel={option => option.category}
                  renderInput={params => (
                    <TextField {...params} label="Seleccione una categoria" />
                  )}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Autocomplete
                  id="combo-box-demo"
                  options={detalles1}
                  getOptionLabel={option => option.time}
                  renderInput={params => (
                    <TextField {...params} label="Seleccione el tiempo" />
                  )}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Autocomplete
                  id="combo-box-demo"
                  options={detalles2}
                  getOptionLabel={option => option.sancions}
                  renderInput={params => (
                    <TextField {...params} label="Seleccione la sanción" />
                  )}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Autocomplete
                  id="combo-box-demo"
                  options={detalles3}
                  getOptionLabel={option => option.mult}
                  renderInput={params => (
                    <TextField {...params} label="Seleccione la multa" />
                  )}
                />
              </Grid>

              <Grid container justify="center">
                <Grid item xs={6} sm={6}>
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

export default NuevoElemento;
