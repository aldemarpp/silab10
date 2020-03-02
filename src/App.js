import React from "react";
import "./App.css";
import AppNavBar from "./components/layout/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme/theme";
import Grid from "@material-ui/core/Grid";
import Usuarios from "./components/seguridad/usuarios/Usuarios";
import Estudiantes from "./components/seguridad/personas/estudiantes/Estudiantes";
import UpdateEstudiante from "./components/seguridad/personas/estudiantes/UpdateEstudiante";
import Laboratorios from "./components/vistas/almacen/laboratorios/Laboratorios";
import UpdateLaboratorio from "./components/vistas/almacen/laboratorios/UpdateLaboratorio";
import NuevoUsuario from "./components/seguridad/usuarios/NuevoUsuario";
//import RegistrarUsuario from "./components/seguridad/usuarios/RegistrarUsuario";
import PerfilUsuario from "./components/seguridad/usuarios/PerfilUsuario";
import Login from "./components/seguridad/Login";
import NuevoElemento from "./components/vistas/almacen/NuevoElemento";
import EditarElemento from "./components/vistas/almacen/EditarElemento";
import Elementos from "./components/vistas/almacen/Elementos";
import Mantenimientos from "./components/vistas/bitacora/mantenimientos/Mantenimientos";
import NuevoMantenimiento from "./components/vistas/bitacora/mantenimientos/NuevoMantenimiento";
import EditarMantenimiento from "./components/vistas/bitacora/mantenimientos/EditarMantenimiento";
import Trabajos from "./components/vistas/bitacora/trabajos/Trabajos";
import NuevoTrabajo from "./components/vistas/bitacora/trabajos/NuevoTrabajo";
import EditarTrabajo from "./components/vistas/bitacora/trabajos/EditarTrabajo";
import NuevoPrestamo from "./components/vistas/bitacora/prestamos/NuevoPrestamo";

function App(props) {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppNavBar />

        <Grid container>
          <Switch>
            <Route path="/elementos" exact component={Elementos}></Route>
            <Route
              path="/elemento/nuevo"
              exact
              component={NuevoElemento}
            ></Route>
            <Route
              path="/elemento/editar"
              exact
              component={EditarElemento}
            ></Route>

            <Route path="/prestamo/nuevo" exact component={NuevoPrestamo} />
            <Route path="/auth/login" exact component={Login}></Route>
            <Route path="/auth/perfil" exact component={PerfilUsuario}></Route>
            <Route path="/usuarios" exact component={Usuarios}></Route>
            <Route path="/usuario/nuevo" exact component={NuevoUsuario}></Route>
            <Route path="/estudiantes" exact component={Estudiantes}></Route>
            <Route
              path="/estudiante/update"
              exact
              component={UpdateEstudiante}
            ></Route>
            <Route path="/laboratorios" exact component={Laboratorios}></Route>
            <Route
              path="/laboratorio/update"
              exact
              component={UpdateLaboratorio}
            ></Route>
            <Route
              path="/mantenimientos"
              exact
              component={Mantenimientos}
            ></Route>
            <Route
              path="/mantenimiento/nuevo"
              exact
              component={NuevoMantenimiento}
            ></Route>
            <Route
              path="/mantenimiento/editar"
              exact
              component={EditarMantenimiento}
            ></Route>
            <Route path="/trabajos" exact component={Trabajos}></Route>
            <Route path="/trabajo/nuevo" exact component={NuevoTrabajo}></Route>
            <Route
              path="/trabajo/editar"
              exact
              component={EditarTrabajo}
            ></Route>
          </Switch>
        </Grid>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
