import React from "react";
import AlertForm from "./AlertForm";
import AlertManager from "./AlertManager";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <AlertForm></AlertForm>
      </Grid>
      <Grid item xs={4}>
        <AlertManager></AlertManager>
      </Grid>
    </Grid>
  );
}

export default App;
