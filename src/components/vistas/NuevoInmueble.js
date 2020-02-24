import React, { Component } from "react";
import {
  Container,
  Grid,
  Breadcrumbs,
  Typography,
  Paper,
  Link,
  TextField,
  Button
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const style = {
  container: {
    paddingTop: "8px"
  },
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: " column",
    alignItems: "center",
    padding: "20",
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
  submit: {
    marginTop: 15,
    marginBottom: 10
  }
};

class NuevoInmueble extends Component {
  state = {
    inmueble: {
      direccion: "",
      ciudad: "",
      pais: "",
      descripcion: "",
      interior: ""
    }
  };

  entraDatoEnEstado = e => {
    let inmueble_ = Object.assign({}, this.state.inmueble);
    inmueble_[e.target.name] = e.target.value;
    this.setState({
      inmueble: inmueble_
    });
  };

  registrarInmueble = e => {
    e.preventDefault();
    console.log("imprimir objeto inmueble del state", this.state.inmueble);
  };

  render() {
    return (
      <Container style={style.container}>
        <Paper style={style.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Breadcrumbs arial-label="breadcrumbs">
                <Link color="inherit" style={style.link} href="/">
                  <HomeIcon style={style.homeIcon} />
                  Home
                </Link>
                <Typography color="textPrimary">Nuevo Inmueble</Typography>
              </Breadcrumbs>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                name="direccion"
                label="Direccion del Inmueble"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.inmueble.direccion}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="ciudad"
                label="Ciudad"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.inmueble.ciudad}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="pais"
                label="Pais del Inmueble"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.inmueble.pais}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                name="descripcion"
                label="Descripción del Inmueble"
                fullWidth
                multiline
                onChange={this.entraDatoEnEstado}
                value={this.state.inmueble.descripcion}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                name="interior"
                label="Interior del Inmueble"
                fullWidth
                multiline
                onChange={this.entraDatoEnEstado}
                value={this.state.inmueble.interior}
              />
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item xs={12} sm={12}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                style={style.submit}
                onClick={this.registrarInmueble}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default NuevoInmueble;
