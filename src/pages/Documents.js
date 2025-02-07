import { Grid as Grid2, Box, Typography, Button } from '@mui/material';
import { useState } from 'react';

const Documents = () => {
  const [PDFUrl, setPDFUrl] = useState(null);

  // Define document data
  const documents = [
    {
      label: 'D13 Medical',
      url: 'https://drive.google.com/file/d/1cQNlUEoYyJExEcUqkrSmXPK-JtMz5uIv/view?usp=sharing',
    },
    {
      label: 'IFC Quick Sheet',
      url: 'https://drive.google.com/file/d/1rDqRpkZTLCQAN1MD9Z0y2bRScao7ZdKn/view?usp=sharing',
    },
    {
      label: 'MO8 Introduction',
      url: 'https://drive.google.com/file/d/12Qsilo9E0sPRbYXFt1tz4b3CoIbxrIFP/view?usp=sharing',
    },
    {
      label: 'IFC Full Training',
      url: 'https://drive.google.com/file/d/1qnyFe2cKYQFGrMgz5Hc7rfPkD8MhPJdO/view?usp=sharing',
    },
    {
      label: 'TPAC Training',
      url: 'https://drive.google.com/file/d/1gYgALSBDufMc6DgxpbNQ7rh09gTBFmTb/view?usp=sharing',
    },
    {
      label: 'Stinger Training',
      url: 'https://drive.google.com/file/d/1kwAsoDqrzrDQbzI6kmZSN05GF0tm4e5D/view?usp=sharing',
    },
    {
      label: 'TSG POL1 Training',
      url: 'https://drive.google.com/file/d/13NsV8a4pUerjIqKUEhTixeueZwpnxgHY/view?usp=sharing',
    },
    {
      label: 'TOR Code Quick',
      url: 'https://drive.google.com/file/d/1UZZfKXubNcPLvw-CxJ_hPYARKdH9YiiP/view?usp=sharing',
    },
  ];

  // Simple helper to convert Google Drive "view?..." links into "preview" links
  const getPreviewLink = (driveLink) => {
    return driveLink.replace('/view?usp=sharing', '/preview');
  };

  return (
    <Box padding={1.5}>
      <Box sx={{ paddingBottom: '12px' }}>
        <Typography color='primary' variant='h4' sx={{ paddingBottom: '12px' }}>
          Documents
        </Typography>
        <Grid2 sx={{ justifyContent: 'center' }} container spacing={1.5}>
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
            src={getPreviewLink(PDFUrl)}
            title='Document Viewer'
            style={{ border: 'none' }}
          />
        ) : (
          <Typography
            variant='h6'
            align='center'
            sx={{ paddingTop: '20px', color: 'secondary.main' }}
          >
            No document selected. Please select a document.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Documents;
