import React from "react";
import { Typography, Grid2 } from "@mui/material";
import Necessities from "../components/cards/Necessities";
import ICCodes from "../components/cards/IC-Codes";
import IPP from "../components/cards/Initial-Phase-Pursuit";
import DrugClasses from "../components/cards/Drugs-Classes";
import GOWISELY from "../components/cards/GOWISELY";
import Notes from "../components/cards/Notes";

const Home = () => {
  return (
    <Grid2 container spacing={2} padding={1.5}>
      {/* LEFT HALF */}
      <Grid2 item xs={6}>
        <Typography color="primary" variant="h4" sx={{ mb: 2 }}>
          Crib Sheet
        </Typography>

        {/* Your existing 4-column layout inside this half */}
        <Grid2 container spacing={1}>
          {/* First Column */}
          <Grid2
            item
            xs={12}
            md={3} // or just xs={12} for smaller columns
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <ICCodes />
            <DrugClasses />
          </Grid2>

          {/* Second Column */}
          <Grid2
            item
            xs={12}
            md={3}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Necessities />
            <IPP />
          </Grid2>

          {/* Third Column */}
          <Grid2
            item
            xs={12}
            md={3}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <GOWISELY />
          </Grid2>

          {/* Fourth Column */}
          <Grid2
            item
            xs={12}
            md={3}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Notes />
          </Grid2>
        </Grid2>
      </Grid2>

      {/* RIGHT HALF - Iframe */}
      <Grid2
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // optional
          justifyContent: "flex-start", // optional
        }}
      >
        <iframe
          title="External Site"
          src="https://example.com"
          style={{
            width: "100%",
            height: "80vh",
            border: "1px solid #ccc",
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default Home;
