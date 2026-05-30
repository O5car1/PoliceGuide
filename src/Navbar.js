import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Toolkit', to: 'PoliceGuide/toolkit' },
  { label: 'Legislation', to: 'PoliceGuide/legislation' },
  { label: 'Documents', to: 'PoliceGuide/documents' },
  { label: 'TOR Codes', to: 'PoliceGuide/torcodes' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(22,22,22,0.95)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 } }}>
          {/* Logo — desktop */}
          <Typography
            variant="h6"
            component="a"
            href="/PoliceGuide"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              letterSpacing: '-0.3px',
            }}
          >
            Police Guide
          </Typography>

          {/* Hamburger — mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
              PaperProps={{
                sx: { mt: 0.5, minWidth: 160, backgroundColor: 'background.paper' },
              }}
            >
              {navLinks.map((link) => (
                <MenuItem
                  key={link.label}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={link.to}
                  selected={location.pathname.includes(link.to)}
                >
                  <Typography>{link.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo — mobile */}
          <Typography
            variant="h6"
            component="a"
            href="/PoliceGuide"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            Police Guide
          </Typography>

          {/* Nav links — desktop */}
          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navLinks.map((link) => {
              const active = location.pathname.includes(link.to);
              return (
                <Button
                  key={link.label}
                  component={Link}
                  to={link.to}
                  color={active ? 'primary' : 'inherit'}
                  sx={{
                    px: 2,
                    borderRadius: 2,
                    backgroundColor: active ? 'rgba(20,177,255,0.1)' : 'transparent',
                    '&:hover': { backgroundColor: 'rgba(20,177,255,0.08)' },
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
