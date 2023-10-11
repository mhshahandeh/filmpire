import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, styled, useMediaQuery, Box } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Sidebar } from '..';

const drawerWidth = 240;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0',
    flexWrap: 'wrap',
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const LinkButton = styled(Button)({
  '&:hover': {
    color: 'white',
    textDecoration: 'none',
  },
});

const Nav = styled('nav')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: '0',
  },
}));

// const StyledDrawer = styled(Drawer)(({ theme }) => ({
//   [theme.breakpoints.up('sm')]: {
//     width: drawerWidth,
//     flexShrink: '0',
//   },
//   '& .MuiDrawer-paper': { width: drawerWidth },
// }));

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          {isMobile && (
          <MenuButton
            color="inherit"
            edge="start"
            sx={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
          >
            <Menu />
          </MenuButton>
          )}
          <IconButton color="inherit" sx={{ ml: '1' }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <Box>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <LinkButton
                color="inherit"
                component={Link}
                to="/profile/:id"
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar sx={{ width: '30px', height: '30px' }} alt="profile" />
              </LinkButton>
            )}
          </Box>
          {isMobile && 'Search...'}
        </StyledToolbar>
      </AppBar>
      <Box>
        <Nav>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              ModalProps={{ keepMounted: true }}
              sx={{ '& .MuiDrawer-paper': { width: drawerWidth } }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              open
              sx={{ '& .MuiDrawer-paper': { width: drawerWidth } }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </Nav>
      </Box>
    </>
  );
}

export default NavBar;
