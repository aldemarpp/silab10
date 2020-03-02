import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Paper,
  Breadcrumbs,
  Link,
  Grid,
  Button
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import { Autocomplete } from "@material-ui/lab";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5"
  },
  container: {
    paddingTop: "8px"
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

const NuevoMantenimiento = () => {
  //crear state de usuario
  const [perfil, cambiarPerfil] = useState({
    elemento: "",
    tipo: "",
    observacion: "",
    notificar: "",
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
  const { elemento, tipo, observacion, notificar, registro } = perfil;

  //funcion para cuando el usuario envia la informacion
  const submitPerfil = e => {
    e.preventDefault();
    if (
      elemento === "" ||
      tipo === "" ||
      observacion === "" ||
      notificar === "" ||
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
      elemento: "",
      tipo: "",
      observacion: "",
      notificar: "",
      registro: ""
    });
  };

  const element = [{ state: "Activo" }, { state: "Inactivo" }];
  const tipos = [
    { clase: "Preventivo" },
    { clase: "Correctivo" },
    { clase: "Calibración" }
  ];

  return (
    <Container
      style={style.container}
      component="main"
      maxWidth="md"
      justify="center"
    >
      <Paper style={style.paper}>
        {error ? (
          <p style={style.error}>¡Todos los campos son obligatorios!</p>
        ) : null}
        <form style={style.form} onSubmit={submitPerfil}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={10}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" style={style.link} href="/mantenimientos">
                  <HomeIcon style={style.homeIcon} />
                  Mantenimientos
                </Link>
                <Typography color="textPrimary">
                  Registrar Mantenimiento
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item md={6} xs={6}>
              <Autocomplete
                id="combo-box-demo"
                options={element}
                getOptionLabel={option => option.state}
                renderInput={params => (
                  <TextField {...params} label="Seleccione un elemento" />
                )}
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <Autocomplete
                id="combo-box-demo"
                options={tipos}
                getOptionLabel={option => option.clase}
                renderInput={params => (
                  <TextField {...params} label="Tipo de Mantenimiento" />
                )}
              />
            </Grid>
            <Grid item md={5} xs={6}>
              <TextField
                name="observacion"
                fullWidth
                multiline
                label="Observaciones"
                value={observacion}
                onChange={cambiarPerfil}
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <TextField
                name="notificar"
                fullWidth
                label="Notificar a"
                value={notificar}
                onChange={cambiarPerfil}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <TextField
                name="registro"
                fullWidth
                label="Registrado por"
                value={registro}
                onChange={cambiarPerfil}
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
        </form>
      </Paper>
    </Container>
  );
};
export default NuevoMantenimiento;
