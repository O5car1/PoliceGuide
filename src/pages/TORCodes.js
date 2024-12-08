import { Box, Typography } from '@mui/material';

const TORCodes = () => {
    return (
        <Box>
            <Typography variant="h4" padding={'1%'}>TOR Codes</Typography>
            <Box sx={{ width: '100%', height: '100vh' }}>
                <iframe width='100%' height='100%' fill src="https://offencecode.uk/categories/traffic-offence-codes/"/>
            </Box>
        </Box>
    );
}

export default TORCodes;
