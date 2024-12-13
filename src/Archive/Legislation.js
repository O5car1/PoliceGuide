import { Box, Typography } from '@mui/material';
import LegislationTable from '../components/cards/Legislation';

const Legislation = () => {
    return (
        <Box>
            <Typography color='primary' variant="h4" sx={{ padding: '12px' }}>Legislation</Typography>
            <LegislationTable />
        </Box>
    );
}

export default Legislation;
