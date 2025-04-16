import { Box, Typography } from '@mui/material';
import DisableZELSPanel from '../components/cards/DisableZELSPanel';
import FMSGenerator from '../components/cards/FMSGenerator.tsx';
import DecisionEngine from "../components/DecisionEngine";

const Toolkit = () => {
    return (
        <Box padding={1.5}>
            <Typography color='primary' variant="h4" sx={{ paddingBottom: '12px' }}>Toolkit</Typography>
            <FMSGenerator />
            <DisableZELSPanel />
        </Box>,
            <div className="mt-10">
            <h1 className="text-3xl font-bold text-center mb-6">Decision Assistant</h1>
            <DecisionEngine />
          </div>
      
        
    );
}

export default Toolkit;

