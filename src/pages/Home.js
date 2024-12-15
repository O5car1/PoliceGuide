import { Typography, Grid2 } from '@mui/material';
import React from "react";
import Necessities from '../components/cards/Necessities';
import ICCodes from '../components/cards/IC-Codes';
import IPP from '../components/cards/Initial-Phase-Pursuit';
import DrugClasses from '../components/cards/Drugs-Classes';
import GOWISELY from '../components/cards/GOWISELY';
import Notes from '../components/cards/Notes';

const Home = () => {
    return (
        <Grid2
            container
            direction="column" // Ensure vertical stacking of title and content
            spacing={2}
            padding={1.5}
        >
            {/* Title Section */}
            <Grid2
                item
                xs={12} // Full width
            >
                <Typography color="primary" variant="h4">
                    Crib Sheet
                </Typography>
            </Grid2>

            {/* Main Content Section */}
            <Grid2 container spacing={1}>
                {/* First Column */}
                <Grid2
                    item
                    xs={12} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <ICCodes />
                    <DrugClasses />
                </Grid2>

                {/* Second Column */}
                <Grid2
                    item
                    xs={12} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Necessities />
                    <IPP />
                </Grid2>

                {/* Third Column */}
                <Grid2
                    item
                    xs={12} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <GOWISELY />
                </Grid2>

                {/* Fourth Column */}
                <Grid2
                    item
                    xs={12} md={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Notes />
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default Home;
