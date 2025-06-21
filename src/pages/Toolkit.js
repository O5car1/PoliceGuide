import { Box, Typography } from '@mui/material';
import DisableZELSPanel from '../components/cards/DisableZELSPanel';

const Toolkit = () => {
    return (
        <Box padding={1.5}>
            <Typography color='primary' variant="h4" sx={{ paddingBottom: '12px' }}>Toolkit</Typography>
            <DisableZELSPanel />
        </Box>
    );
}

export default Toolkit;

