import { Grid2, Box, Typography, Button } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { useState } from 'react';

const Documents = () => {
  const [PDFUrl, setPDFUrl] = useState(null);

  // Define document data
  const documents = [
    {
      label: 'D13 Medical',
      url: 'https://oscar-dixon.github.io/PoliceGuide/content/D13Training.pdf',
    },
    {
      label: 'IFC Quick Sheet',
      url: 'https://oscar-dixon.github.io/PoliceGuide/content/IFCQuickSheet.pdf',
    },
    {
      label: 'MO8 Introduction',
      url: 'https://oscar-dixon.github.io/PoliceGuide/content/MO8Introduction.pdf',
    },
    {
        label: 'IFC Full Training',
        url: 'https://oscar-dixon.github.io/PoliceGuide/content/IFCTraining.pdf',
    },
    {
        label: 'TPAC Training',
        url: 'https://oscar-dixon.github.io/PoliceGuide/content/TPACTraining.pdf',
    },
    {
        label: 'Stinger Training',
        url: 'https://oscar-dixon.github.io/PoliceGuide/content/StingerTraining.pdf',
    },
    {
        label: 'TSG POL1 Training',
        url: 'https://oscar-dixon.github.io/PoliceGuide/content/MO7POL1Training.pdf',
    },
  ];

  return (
    <Box padding={1.5}>
      <Box sx={{ paddingBottom: '12px' }}>
        <Typography color='primary' variant='h4' sx={{ paddingBottom: '12px' }}>
          Documents
        </Typography>
        <Grid2 sx={{ justifyContent: 'center'}} container spacing={1.5}>
          {documents.map((doc, index) => (
            <Grid2 key={index}>
              <Button
                onClick={() => setPDFUrl(doc.url)}
                color='secondary'
                variant='outlined'
                sx={{ width: 200, height: 50 }}
              >
                {doc.label}
              </Button>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Box sx={{ width: '100%', height: '77.5vh' }}>
        {PDFUrl ? (
          <iframe
            width='100%'
            height='100%'
            src={PDFUrl}
            title='Document Viewer'
            style={{ border: 'none' }}
          />
        ) : (
          <Typography
            variant='h6'
            align='center'
            sx={{
              paddingTop: '20px',
              color: 'secondary',
            }}
          >
            No document selected. Please select a document.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Documents;
