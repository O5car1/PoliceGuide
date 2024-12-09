import {  Typography, Grid2, Box, Item } from '@mui/material';
import React from "react";
import Necessities from '../components/cards/Necessities';
import ICCodes from '../components/cards/IC-Codes';
import IPP from '../components/cards/Initial-Phase-Pursuit';
import DrugClasses from '../components/cards/Drugs-Classes';
import GOWISELY from '../components/cards/GOWISELY';
import Notes from '../components/cards/Notes';

const Home = () => {
    return (
        <Grid2 padding={1.5}>
            <Typography color='primary' variant="h4" sx={{ paddingBottom: '12px' }}>Crib Sheet</Typography>
            <Grid2 container spacing={1.5}>
                <Grid2 sx={{width: '25.7%',  display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} container columns={1}>
                    <ICCodes />
                    <DrugClasses />
                </Grid2>
                <Grid2 sx={{width: '17%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} container columns={1}>
                    <Necessities />
                    <IPP />
                </Grid2>
                <Grid2><GOWISELY /></Grid2>
                <Grid2><Notes /></Grid2>
            </Grid2>
        </Grid2>
    );
}

export default Home;
