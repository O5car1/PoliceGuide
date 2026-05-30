import { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MG3Builder from './MG3_Builder';

const sites = [
  { label: 'MG3 Builder', component: <MG3Builder /> },
  { label: 'PostImages', url: 'https://postimages.org/' },
];

function EmbeddedSites() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = sites[activeIndex];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Typography color="primary" variant="h4" sx={{ mb: 0.5 }}>
        Sites
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Embedded tools and resources
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
        {sites.map((site, i) => (
          <Button
            key={site.label}
            variant={activeIndex === i ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setActiveIndex(i)}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              ...(activeIndex === i && { boxShadow: '0 0 12px rgba(20,177,255,0.3)' }),
            }}
          >
            {site.label}
          </Button>
        ))}
      </Stack>

      <Box
        sx={{
          position: 'relative',
          flexGrow: 1,
          minHeight: { xs: '60vh', lg: 0 },
          borderRadius: 2,
          overflow: 'auto',
          border: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: active.component ? 'background.default' : 'background.paper',
        }}
      >
        {active.component ? (
          active.component
        ) : (
          <>
            <iframe
              key={active.url}
              src={active.url}
              title={active.label}
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block', minHeight: '500px' }}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
            <Button
              size="small"
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<OpenInNewIcon fontSize="small" />}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'rgba(22,22,22,0.85)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'text.secondary',
                textTransform: 'none',
                fontSize: '0.75rem',
                '&:hover': { backgroundColor: 'rgba(40,40,40,0.9)', color: 'text.primary' },
              }}
            >
              Open in tab
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}

export default EmbeddedSites;
