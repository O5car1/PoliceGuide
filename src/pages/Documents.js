import { Grid, Box, Typography, Button, Paper } from '@mui/material';
import { useState } from 'react';
import ArticleIcon from '@mui/icons-material/Article';

const Documents = () => {
  const [PDFUrl, setPDFUrl] = useState(null);
  const [activeLabel, setActiveLabel] = useState(null);

  const documents = [
    { label: 'D13 Medical', url: 'https://drive.google.com/file/d/1cQNlUEoYyJExEcUqkrSmXPK-JtMz5uIv/view?usp=sharing' },
    { label: 'IFC Quick Sheet', url: 'https://drive.google.com/file/d/1rDqRpkZTLCQAN1MD9Z0y2bRScao7ZdKn/view?usp=sharing' },
    { label: 'MO8 Introduction', url: 'https://drive.google.com/file/d/12Qsilo9E0sPRbYXFt1tz4b3CoIbxrIFP/view?usp=sharing' },
    { label: 'IFC Full Training', url: 'https://drive.google.com/file/d/1qnyFe2cKYQFGrMgz5Hc7rfPkD8MhPJdO/view?usp=sharing' },
    { label: 'TPAC Training', url: 'https://drive.google.com/file/d/1gYgALSBDufMc6DgxpbNQ7rh09gTBFmTb/view?usp=sharing' },
    { label: 'Stinger Training', url: 'https://drive.google.com/file/d/1kwAsoDqrzrDQbzI6kmZSN05GF0tm4e5D/view?usp=sharing' },
    { label: 'TSG POL1 Training', url: 'https://drive.google.com/file/d/13NsV8a4pUerjIqKUEhTixeueZwpnxgHY/view?usp=sharing' },
    { label: 'TOR Code Quick', url: 'https://drive.google.com/file/d/1UZZfKXubNcPLvw-CxJ_hPYARKdH9YiiP/view?usp=sharing' },
  ];

  const getPreviewLink = (driveLink) => driveLink.replace('/view?usp=sharing', '/preview');

  const handleSelect = (doc) => {
    setPDFUrl(doc.url);
    setActiveLabel(doc.label);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Typography color="primary" variant="h4" sx={{ mb: 0.5 }}>
        Documents
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
        Select a document to preview
      </Typography>

      <Grid container spacing={1} sx={{ mb: 2 }}>
        {documents.map((doc) => {
          const active = activeLabel === doc.label;
          return (
            <Grid item xs={6} sm={4} lg={6} key={doc.label}>
              <Button
                onClick={() => handleSelect(doc)}
                variant={active ? 'contained' : 'outlined'}
                color="secondary"
                fullWidth
                startIcon={<ArticleIcon />}
                sx={{
                  py: 1.2,
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  fontSize: '0.8rem',
                  borderRadius: 2,
                  ...(active && { boxShadow: '0 0 12px rgba(255,5,93,0.3)' }),
                }}
              >
                {doc.label}
              </Button>
            </Grid>
          );
        })}
      </Grid>

      <Box
        sx={{
          flexGrow: 1,
          minHeight: { xs: '50vh', lg: 0 },
          borderRadius: 2,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: 'background.paper',
        }}
      >
        {PDFUrl ? (
          <iframe
            width="100%"
            height="100%"
            src={getPreviewLink(PDFUrl)}
            title="Document Viewer"
            style={{ border: 'none', display: 'block', minHeight: '500px' }}
          />
        ) : (
          <Box
            sx={{
              height: '100%',
              minHeight: 200,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              color: 'text.disabled',
            }}
          >
            <ArticleIcon sx={{ fontSize: 48, opacity: 0.3 }} />
            <Typography variant="body2">
              Select a document above to preview it here
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Documents;
