import React, { useState, useEffect } from "react";
import { Container, Paper, Grid, Table, TableBody } from "@material-ui/core";

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
  }
};

const ListaElementos = props => {
  return (
    <Container style={style.container}>
      <Paper style={style.paper}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12}>
            <Table>
              <TableBody></TableBody>
            </Table>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ListaElementos;
