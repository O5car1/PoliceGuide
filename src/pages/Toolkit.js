import { Box, Typography } from '@mui/material';
import DisableZELSPanel from '../components/cards/DisableZELSPanel';
import FMSGenerator from '../components/cards/FMSGenerator.tsx';

const Toolkit = () => {
    return (
        <Box padding={1.5}>
            <Typography color='primary' variant="h4" sx={{ paddingBottom: '12px' }}>Toolkit</Typography>
            <FMSGenerator />
            <DisableZELSPanel />
        </Box>
    );
}

export default Toolkit;

