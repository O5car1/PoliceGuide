import { Box, Typography } from '@mui/material';

const D13Medical = () => {
    return (
        <Box>
            <Typography variant="h4" padding={'1%'}>D13 Medical</Typography>
            <Box sx={{ width: '100%', height: '92vh' }}>
                <object width='100%' height='100%' src="../content/D13Training.pdf"/>
            </Box>
        </Box>
    );
}

export default D13Medical;
