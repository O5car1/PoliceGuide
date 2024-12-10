import { Box, Typography } from '@mui/material';
import D13TrainingPDF from '../content/D13Training.pdf'

const D13Medical = () => {
    return (
        <Box>
            <Typography variant="h4" padding={'1%'}>D13 Medical</Typography>
            <Box sx={{ width: '100%', height: '83vh' }}>
                <iframe width='100%' height='100%' href="D13TrainingPDF"/>
            </Box>
        </Box>
    );
}

export default D13Medical;
