import React, { Component } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Breadcrumbs,
  Link,
  TextField,
  CardActions,
  Button
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const style = {
  cardGrid: {
    paddingTop: 8,
    paddingBottom: 8
  },
  paper: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    minHeight: 650
  },
  link: {
    display: "flex"
  },
  gridTextField: {
    marginTop: "20px"
  }
};

class ListaInmuebles extends Component {
  render() {
    return (
      <Container style={style.cardGrid}>
        <Paper style={style.paper}>
          <Grid item xs={12} sm={12}>
            <Breadcrumbs arial-label="breadcrumbs">
              <Link color="inherit" style={style.link} href="/">
                <HomeIcon />
                Home
              </Link>
              <Typography color="textPrimary">Mis Inmuebles</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12} sm={6} style={style.gridTextField}>
            <TextField
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              name="textoBusqueda"
              variant="outlined"
              label="Ingrese el inmueble a buscar"
            />
          </Grid>
          <CardActions>
            <Button size="small" color="e8E8E8">
              Editar
            </Button>
            <Button size="small" color="primary">
              Eliminar
            </Button>
          </CardActions>
        </Paper>
      </Container>
    );
  }
}

export default ListaInmuebles;
