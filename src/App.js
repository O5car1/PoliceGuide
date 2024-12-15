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
            primary: {
              main: '#14B1FF',
            },
            secondary: {
              main: '#FF055D',
            },
            info: {
                main: '#2196f3',
              },
              error: {
                main: '#d50000',
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
                        <Route path="PoliceGuide/toolkit" element={<Toolkit />} />
                        <Route path="PoliceGuide/legislation" element={<Legislation />} />
                        <Route path="PoliceGuide/documents" element={<Documents />} />
                        <Route path="PoliceGuide/torcodes" element={<TORCodes />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
        </ThemeProvider>
    );
}
