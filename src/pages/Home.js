import React from "react";
import { Typography, Grid, Divider, Box } from "@mui/material";
import Necessities from "../components/cards/Necessities";
import ICCodes from "../components/cards/IC-Codes";
import IPP from "../components/cards/Initial-Phase-Pursuit";
import DrugClasses from "../components/cards/Drugs-Classes";
import GOWISELY from "../components/cards/GOWISELY";
import Notes from "../components/cards/Notes";
import Documents from "../pages/Documents";

const Home = () => {
  return (
    <Grid container spacing={0} sx={{ minHeight: 'calc(100vh - 64px)' }}>
      {/* LEFT COLUMN: Crib Sheet */}
      <Grid
        item
        xs={12}
        lg={7}
        sx={{
          p: { xs: 2, sm: 3 },
          borderRight: { lg: '1px solid rgba(255,255,255,0.08)' },
          overflowY: 'auto',
        }}
      >
        <Typography color="primary" variant="h4" sx={{ mb: 0.5 }}>
          Crib Sheet
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
          Quick reference guide — hover items for more detail
        </Typography>

        <Grid container spacing={2}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <ICCodes />
            <DrugClasses />
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Necessities />
            <IPP />
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <GOWISELY />
            <Notes />
          </Grid>
        </Grid>
      </Grid>

      {/* RIGHT COLUMN: Documents */}
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          p: { xs: 2, sm: 3 },
          borderTop: { xs: '1px solid rgba(255,255,255,0.08)', lg: 'none' },
        }}
      >
        <Documents />
      </Grid>
    </Grid>
  );
};

export default Home;
