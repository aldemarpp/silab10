import React, { Component, Fragment } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import {
  Container,
  Paper,
  IconButton,
  InputAdornment,
  TextField
} from "@material-ui/core";
import Icon from "@mdi/react";
import {
  mdiEye,
  mdiImage,
  mdiCheckboxMarkedCircle,
  mdiCardSearch
} from "@mdi/js";
//import HomeIcon from "@material-ui/icons/Home";
//import DetallesLaboratorio from "./DetallesLaboratorio";

const style = {
  table: {
    minWidth: 650
  },
  container: {
    paddingTop: "20px"
  },
  paper: {
    marginTop: 40,
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
  },
  divider: {
    marginBottom: 20
  },
  search: {
    width: 400,
    marginBottom: 20,
    marginTop: 40
  }
};

function createData(id, stock, horas_uso, categoria, estado) {
  return { id, stock, horas_uso, categoria, estado };
}

const rows = [
  createData("23546 - Arduino Nano", "12abv", "20", "A", "Activo"),
  createData("35484 - Arduino Mega", "10", "5", "A", "Activo"),
  createData("56842 - Tester Hx12", "7", "45", "B", "Desactivado"),
  createData("74325 - Alineador estatio", "13", "100", "C", "Activo"),
  createData("29886 - Teodolito", "20", "200", "C", "Activo"),
  createData("12325 - Osciloscopio", "4", "150", "C", "Activo")
];

function searchingFor(term) {
  return function(x) {
    return (
      x.id.toLowerCase().includes(term.toLowerCase()) ||
      x.stock.toLowerCase().includes(term.toLowerCase()) ||
      x.horas_uso.toLowerCase().includes(term.toLowerCase()) ||
      x.categoria.toLowerCase().includes(term.toLowerCase()) ||
      x.estado.toLowerCase().includes(term.toLowerCase()) ||
      !term
    );
  };
}

export default class TablaLaboratorio extends Component {
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
      <Fragment>
        <Container
          style={style.container}
          component="main"
          maxWidth="lg"
          justify="center"
        >
          <div className="App">
            <form>
              <TextField
                fullWidth
                placeholder="Buscar..."
                onChange={this.searchHandler}
                value={term}
                style={style.search}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon path={mdiCardSearch} size={1.5} color="red" />
                    </InputAdornment>
                  )
                }}
              />
            </form>
          </div>

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
                    <TableCell component="th" scope="row" align="left">
                      {person.id}
                    </TableCell>
                    <TableCell align="center">
                      <Icon path={mdiImage} size={1} color="red" />
                    </TableCell>
                    <TableCell align="center">{person.stock}</TableCell>
                    <TableCell align="center">{person.horas_uso}</TableCell>
                    <TableCell align="center">{person.categoria}</TableCell>
                    <TableCell align="center">{person.estado}</TableCell>
                    <TableCell align="center">
                      <IconButton>
                        <Icon path={mdiEye} size={1} color="red" />
                      </IconButton>
                      <IconButton>
                        <Icon
                          path={mdiCheckboxMarkedCircle}
                          size={1}
                          color="red"
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Fragment>
    );
  }
}
