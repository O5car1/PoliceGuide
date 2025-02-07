import React from "react";
import { Typography, Grid } from "@mui/material";
import Necessities from "../components/cards/Necessities";
import ICCodes from "../components/cards/IC-Codes";
import IPP from "../components/cards/Initial-Phase-Pursuit";
import DrugClasses from "../components/cards/Drugs-Classes";
import GOWISELY from "../components/cards/GOWISELY";
import Notes from "../components/cards/Notes";
import Documents from "../pages/Documents";

const Home = () => {
  return (
    <Grid container spacing={2} padding={2}>
      {/* LEFT COLUMN: Existing “crib sheet” content */}
      <Grid item xs={12} md={6}>
        <Typography color="primary" variant="h4" sx={{ mb: 2 }}>
          Crib Sheet
        </Typography>

        {/* You can keep your original 4-column logic here */}
        <Grid container spacing={2}>
          {/* First Column */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <ICCodes />
            <DrugClasses />
          </Grid>

          {/* Second Column */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Necessities />
            <IPP />
          </Grid>

          {/* Third Column */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <GOWISELY />
          </Grid>

          {/* Fourth Column */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Notes />
          </Grid>
        </Grid>
      </Grid>

      {/* RIGHT COLUMN: Iframe to another site */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // optional
        }}
      >
        <Documents />
      </Grid>
    </Grid>
  );
};

export default Home;
