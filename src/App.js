import { Box, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline'
import Home from './pages/Home.js';
import ButtonAppBar from './Navbar.js';
import Toolkit from './pages/Toolkit.js';
import Legislation from './pages/Legislation.js';
import Documents from './pages/Documents.js';
import TORCodes from './pages/TORCodes.js'

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#14B1FF' },
      secondary: { main: '#FF055D' },
      info: { main: '#2196f3' },
      error: { main: '#d50000' },
      background: {
        default: '#0e0e0e',
        paper: '#161616',
      },
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h4: { fontWeight: 700, letterSpacing: '-0.5px' },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'border-color 0.2s',
            '&:hover': { borderColor: 'rgba(20,177,255,0.35)' },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 500 },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { fontWeight: 600, textTransform: 'none', letterSpacing: '0.3px' },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: { borderBottom: '1px solid rgba(255,255,255,0.06)' },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <ButtonAppBar />
        <Box sx={{ minHeight: '100vh' }}>
          <Routes>
            <Route exact path="/PoliceGuide" element={<Home />} />
            <Route path="PoliceGuide/toolkit" element={<Toolkit />} />
            <Route path="PoliceGuide/legislation" element={<Legislation />} />
            <Route path="PoliceGuide/documents" element={<Documents />} />
            <Route path="PoliceGuide/torcodes" element={<TORCodes />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
