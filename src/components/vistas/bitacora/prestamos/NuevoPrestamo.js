import React, { useState, Fragment } from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Grid,
  Button,
  Breadcrumbs,
  Link,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  Collapse
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import { Close as CloseIcon } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { CancelRounded } from "@material-ui/icons";

const style = {
  container: {
    paddingTop: "8px"
  },
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#E8E8E8"
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
    width: "90%",
    marginTop: 15
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
  },
  table: {
    minWidth: 650
  },
  tableHead: {
    color: "#ffffff",
    backgroundColor: "#E2001A"
  },
  tableCell: {
    color: "#ffffff"
  }
};

const NuevoPrestamo = () => {
  //crear state de usuario
  const [prestamo, cambiarPrestamo] = useState({
    idEstudiante: "",
    idUsuario: "",
    asignatura: "",
    observaciones: "",
    idElemento: "",
    stock: "",
    cantidad: ""
  });

  //crear state de error
  const [errorP, actualizarErrorP] = useState(false);

  //funcion para cuando el usuario escribe en los inputs
  const cambiarDatoP = e => {
    const { name, value } = e.target;
    cambiarPrestamo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  //Extraer los valores de los inputs
  const {
    idEstudiante,
    idUsuario,
    asignatura,
    observaciones,
    idElemento,
    stock,
    cantidad
  } = prestamo;

  //funcion para cuando el usuario envia la informacion
  const submitPrestamo = e => {
    e.preventDefault();
    if (
      idEstudiante === "" ||
      idUsuario === "" ||
      asignatura === "" ||
      observaciones === "" ||
      idElemento === "" ||
      stock === "" ||
      cantidad === ""
    ) {
      actualizarErrorP(true);
      return;
    }

    console.log(prestamo);
    actualizarErrorP(false);

    //Agregar Usuario o Actualizar

    //Reiniciar el form
    cambiarPrestamo({
      idEstudiante: "",
      idUsuario: "",
      asignatura: "",
      observaciones: "",
      idElemento: "",
      stock: "",
      cantidad: ""
    });
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Arduino Mini CF240", 20),
    createData("Arduino Nano BT142", 12),
    createData("Nano Resistor", 30)
  ];

  function agregarFila() {
    document.getElementById();
  }

  function historyBack() {
    window.history.back();
  }

  return (
    <Fragment>
      <Container style={style.container}>
        <Paper style={style.paper}>
          <Collapse in={errorP} style={style.error}>
            <Alert
              variant="filled"
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  onClick={() => {
                    actualizarErrorP(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              ¡Tiene que llenar todos los campos!
            </Alert>
          </Collapse>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" style={style.link} href="/">
                    <HomeIcon style={style.homeIcon} />
                    Home
                  </Link>
                  <Typography color="textPrimary">Nuevo Prestamo</Typography>
                </Breadcrumbs>
              </Grid>
              <Grid item md={12} xs={12}>
                <Divider />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  name="idEstudiante"
                  fullWidth
                  label="Estudiante"
                  value={idEstudiante}
                  onChange={cambiarDatoP}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  name="idUsuario"
                  fullWidth
                  label="Registrado por"
                  value={idUsuario}
                  onChange={cambiarDatoP}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  name="asignatura"
                  fullWidth
                  label="asignatura"
                  value={asignatura}
                  onChange={cambiarDatoP}
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <TextField
                  name="observaciones"
                  fullWidth
                  label="Observaciones"
                  value={observaciones}
                  onChange={cambiarDatoP}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={style.grid}>
              <Grid item md={12} xs={12}>
                <Divider />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField
                  name="idElemento"
                  fullWidth
                  floatingLabelText="Elementos"
                  label="Elementos"
                  value={idElemento}
                  onChange={cambiarDatoP}
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField
                  name="cantidad"
                  fullWidth
                  label="Cantidad"
                  value={cantidad}
                  onChange={cambiarDatoP}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  name="stock"
                  fullWidth
                  label="Stock"
                  value={stock}
                  onChange={cambiarDatoP}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="small"
                  color="primary"
                  style={style.submit}
                  onClick={agregarFila}
                >
                  Agregar
                </Button>
              </Grid>
              <Grid item xs={12} md={2}>
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
            <Grid container spacing={2}>
              <TableContainer component={Paper}>
                <Table style={style.table}>
                  <TableHead style={style.tableHead}>
                    <TableRow>
                      <TableCell style={style.tableCell}>Elemento</TableCell>
                      <TableCell style={style.tableCell} align="right">
                        Cantidad
                      </TableCell>
                      <TableCell style={style.tableCell} align="right">
                        Opciones
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                          >
                            <CancelRounded fontSize="inherit" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid container spacing={2} justify="left">
              <Grid item xs={12} md={3}>
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  color="primary"
                  style={style.submit}
                  onClick={submitPrestamo}
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
export default NuevoPrestamo;
