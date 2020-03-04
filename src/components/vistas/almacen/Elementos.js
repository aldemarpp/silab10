import React, { Component } from "react";
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
  space: {
    paddingTop: "20px"
  }
};

function createData(id, imagen, stock, horas, categoria, estado) {
  return { id, imagen, stock, horas, categoria, estado };
}

const rows = [
  createData("Pedro", 60, 24, 20, 30, 20, 30),
  createData("Armando", 237, 9.0, 37, 4.3, 20, 30),
  createData("Pedro2", 237, 9.0, 37, 4.3, 20, 30),
  createData("Aldemar", 237, 9.0, 37, 4.3, 20, 30)
];

function searchingFor(term) {
  return function(x) {
    return x.id.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export default class Elementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: rows,
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { term, rows } = this.state;

    return (
      <Container
        style={style.container}
        component="main"
        maxWidth="md"
        justify="center"
      >
        <Paper style={style.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" style={style.link} href="">
                  <HomeIcon style={style.homeIcon} />
                  Elementos
                </Link>
                <Link color="inherit" style={style.link} href="/elemento/nuevo">
                  <Typography color="textPrimary">Nuevo Elemento</Typography>
                </Link>
              </Breadcrumbs>
            </Grid>
          </Grid>

          <div className="App">
            <form>
              <input
                type="text"
                onChange={this.searchHandler}
                value={term}
              ></input>
            </form>
            <TableContainer component={Paper} style={style.space}>
              <Table style={style.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Elemento</TableCell>
                    <TableCell align="center">Imagen</TableCell>
                    <TableCell align="center">Stock</TableCell>
                    <TableCell align="center">Horas de Uso</TableCell>
                    <TableCell align="center">Categoría</TableCell>
                    <TableCell align="center">Estado</TableCell>
                    <TableCell align="center">Opciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.filter(searchingFor(term)).map(person => (
                    <TableRow key={person.id}>
                      <TableCell align="center">{person.id}</TableCell>
                      <TableCell align="center">{person.imagen}</TableCell>
                      <TableCell align="center">{person.stock}</TableCell>
                      <TableCell align="center">{person.horas}</TableCell>
                      <TableCell align="center">{person.categoria}</TableCell>
                      <TableCell align="center">{person.estado}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Paper>
      </Container>
    );
  }
}
