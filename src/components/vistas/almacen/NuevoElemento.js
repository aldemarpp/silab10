import React, { Component } from "react";
import {
  Container,
  Paper,
  Grid,
  Breadcrumbs,
  Link,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ImageUploader from "react-images-upload";
import uuid from "uuid";
import { Autocomplete } from "@material-ui/lab";

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
  },
  foto: {
    height: "100px"
  }
};

class NuevoElemento extends Component {
  state = {
    elemento: {
      codigo: "",
      nombre: "",
      stock: "",
      horas_uso: "",
      estado: "",
      categoria: "",
      tiempo_prestamo: "",
      sancion: "",
      multa: "",
      fotos: []
    },
    archivos: []
  };

  entraDatoEnEstado = e => {
    let elemento_ = Object.assign({}, this.state.elemento);
    elemento_[e.target.name] = e.target.value;
    this.setState({
      elemento: elemento_
    });
  };

  subirFotos = documentos => {
    Object.keys(documentos).forEach(function(key) {
      documentos[key].urlTemp = URL.createObjectURL(documentos[key]);
    });

    this.setState({
      archivos: this.state.archivos.concat(documentos)
    });
  };

  guardarElemento = () => {
    const { archivos, elemento } = this.state;

    //Crearle a cada image(archivo) un alias, ese alias es la referencia con la cual posteriormente lo invocaras
    //Ademas ese alias sera almacenado en la base de datos(firestore/firebase)

    Object.keys(archivos).forEach(function(key) {
      let valorDinamico = Math.floor(new Date().getTime() / 1000);
      let nombre = archivos[key].name;
      let extension = nombre.split(".").pop();
      archivos[key].alias = (
        nombre.split(".")[0] +
        "_" +
        valorDinamico +
        "." +
        extension
      )
        .replace(/\s/g, "_")
        .toLowerCase();
    });

    this.props.firebase.guardarDocumentos(archivos).then(arregloUrls => {
      elemento.fotos = arregloUrls;
      elemento.propietario = this.props.firebase.auth.currentUser.uid;

      this.props.firebase.db
        .collection("Elementos")
        .add(elemento)
        .then(success => {
          this.props.history.push("/");
        });
    });
  };

  eliminarFoto = nombreFoto => () => {
    this.setState({
      archivos: this.state.archivos.filter(archivo => {
        return archivo.name !== nombreFoto;
      })
    });
  };

  render() {
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

    let imagenKey = uuid.v4();

    return (
      <Container style={style.container} component="main" maxWidth="md" justify="center">
        <Paper style={style.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={10}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" style={style.link} href="/elementos">
                  <HomeIcon style={style.homeIcon} />
                  Elementos
                </Link>
                <Typography color="textPrimary">Actualizar Elemento</Typography>
              </Breadcrumbs>
            </Grid>

            <Grid item xs={6} md={4}>
              <TextField
                name="nombre"
                label="Nombre del elemento"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.elemento.nombre}
              />
            </Grid>

            <Grid item xs={6} md={4}>
              <TextField
                name="stock"
                label="Stock"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.elemento.stock}
              />
            </Grid>

            <Grid item xs={6} md={4}>
              <TextField
                name="horas de uso"
                label="Horas de uso"
                fullWidth
                onChange={this.entraDatoEnEstado}
                value={this.state.elemento.horas_uso}
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
          </Grid>

          <Grid container justify="center">
            <Grid item xs={6} sm={6}>
              <ImageUploader
                key={imagenKey}
                withIcon={true}
                buttonText="Seleccione imagenes"
                onChange={this.subirFotos}
                imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                maxFileSize={5242880}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Table>
                <TableBody>
                  {this.state.archivos.map((archivo, i) => (
                    <TableRow key={i}>
                      <TableCell align="left">
                        <img src={archivo.urlTemp} style={style.foto} />
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={this.eliminarFoto(archivo.name)}
                        >
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item xs={6} md={4}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                size="medium"
                color="primary"
                style={style.submit}
                onClick={this.guardarElemento}
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

export default NuevoElemento;
