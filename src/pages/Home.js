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
        <Box>
            <Typography color='primary' variant="h4" padding={'1%'}>Crib Sheet</Typography>
            <Grid2 container spacing={1.5}>
                <Grid2 sx={{width: '30.1%', display: 'flex'}} container columns={1}>
                    <ICCodes />
                    <DrugClasses />
                </Grid2>
                <Grid2 sx={{width: '16.8%', display: 'flex'}} container columns={1}>
                    <Necessities />
                    <IPP />
                </Grid2>
                <Grid2><GOWISELY /></Grid2>
                <Grid2><Notes /></Grid2>
            </Grid2>
        </Box>
    );
}

export default Home;
