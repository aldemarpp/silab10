import React, { useState } from "react";
import {
  Paper,
  Divider,
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
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

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
    marginTop: 20,
    marginBottom: 20
  },
  error: {
    marginTop: 20
  },
  grid: {
    marginBottom: 20,
    marginTop: 30,
    backgroundColor: "#fff",
    borderRadius: "5px"
  }
};

const NuevoPrestamo = ({ crearPrestamo }) => {
  //crear state de usuario
  const [prestamo, cambiarPrestamo] = useState({
    elemento: "",
    cantidad: "",
    stock: ""
  });

  //crear state de error
  const [error, actualizarError] = useState(false);

  //funcion para cuando el usuario escribe en los inputs
  const cambiarDato = e => {
    const { name, value } = e.target;
    cambiarPrestamo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  //Extraer los valores de los inputs
  const { elemento, cantidad, stock } = prestamo;

  //funcion para cuando el usuario envia la informacion
  const submitPrestamo = e => {
    e.preventDefault();

    //Validar
    if (elemento === "" || cantidad === "" || stock === "") {
      actualizarError(true);
      return;
    }

    //Eliminar el msj previo
    actualizarError(false);

    //Asignar Id
    prestamo.id = uuidv4();
    console.log(prestamo);

    //Crear prestamo
    crearPrestamo(prestamo);

    //Reiniciar el form
    cambiarPrestamo({
      elemento: "",
      cantidad: "",
      stock: ""
    });
  };

  function historyBack() {
    window.history.back();
  }

  return (
    <Paper style={style.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" style={style.link} href="/prestamos">
              <HomeIcon style={style.homeIcon} />
              Préstamos
            </Link>
            <Typography color="textPrimary">Registrar Préstamo</Typography>
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

      <form style={style.form} onSubmit={submitPrestamo}>
        <Grid container spacing={2} style={style.grid}>
          <Grid item md={12} xs={12}>
            <Divider />
          </Grid>
          <Grid item md={4} xs={7}>
            <TextField
              name="elemento"
              fullWidth
              label="Elemento"
              value={elemento}
              onChange={cambiarDato}
            />
          </Grid>
          <Grid item md={2} xs={7}>
            <TextField
              name="cantidad"
              fullWidth
              label="Cantidad"
              value={cantidad}
              onChange={cambiarDato}
            />
          </Grid>
          <Grid item md={2} xs={7}>
            <TextField
              name="stock"
              fullWidth
              label="Stock"
              value={stock}
              onChange={cambiarDato}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="small"
              color="primary"
              style={style.submit}
            >
              Agregar
            </Button>
          </Grid>
          <Grid item xs={6} md={2}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="small"
              color="secondary"
              style={style.submit}
              onClick={historyBack}
            >
              Cancelar
            </Button>
          </Grid>
          <Grid item md={12} xs={12}>
            <Divider />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

NuevoPrestamo.propTypes = {
  crearPrestamo: PropTypes.func.isRequired
};

export default NuevoPrestamo;
