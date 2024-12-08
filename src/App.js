import { Box, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline'
import Home from './pages/Home.js';
import D13Medical from './pages/D13.js'
import ButtonAppBar from './Navbar.js';
import Toolkit from './pages/Toolkit.js';
import Legislation from './pages/Legislation.js';
import Documents from './pages/Documents.js';
import TORCodes from './pages/TORCodes.js'

  export default function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
              main: '#1976d2',
            },
            secondary: {
              main: '#f50057',
            },
            info: {
                main: '#2196f3',
              },
          },
      });

    return (

        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
        <Router>
            <ButtonAppBar />
            <Box>
                <Box>
                    <Routes>
                        <Route exact path="/PoliceGuide" element={<Home />} />
                        <Route path="/d13" element={<D13Medical />} />
                        <Route path="/toolkit" element={<Toolkit />} />
                        <Route path="/legislation" element={<Legislation />} />
                        <Route path="/documents" element={<Documents />} />
                        <Route path="/torcodes" element={<TORCodes />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
        </ThemeProvider>
    );
}
