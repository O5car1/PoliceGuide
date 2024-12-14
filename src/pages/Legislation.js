import { Box, Typography } from '@mui/material';
import LegislationTable from '../components/cards/LegislationTable';

const Legislation = () => {
    return (
        <Box>
            <Typography color='primary' variant="h4" sx={{ padding: '12px' }}>Legislation</Typography>
            <Box padding={1.5}>
                <LegislationTable />
            </Box>
        </Box>
    );
}

export default Legislation;
