import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Container,
  Paper,
  Grid,
  Breadcrumbs,
  Link,
  Typography
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";

const style = {
  table: {
    minWidth: 650,
    paddingTop: "40px"
  },
  container: {
    paddingTop: "8px"
  },
  paper: {
    marginTop: 20,
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
  space: {
    paddingTop: "10px"
  }
};

function createData(name, calories, fat, carbs, Activo) {
  return { name, calories, fat, carbs, Activo };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

function Usuarios() {
  return (
    <Container component="main" maxWidth="md" justify="center">
      <Paper style={style.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" style={style.link} href="">
                <HomeIcon style={style.homeIcon} />
                Estudiantes
              </Link>
              <Link
                color="inherit"
                style={style.link}
                href="/estudiante/update"
              >
                <Typography color="textPrimary">
                  Actualizar Estudiante
                </Typography>
              </Link>
            </Breadcrumbs>
          </Grid>
        </Grid>

        <TableContainer component={Paper} style={style.space}>
          <Table style={style.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Estudiante</TableCell>
                <TableCell align="center">Programa</TableCell>
                <TableCell align="center">Documento</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Teléfono</TableCell>
                <TableCell align="center">Estado</TableCell>
                <TableCell align="center">Opciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.Activo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default Usuarios;
