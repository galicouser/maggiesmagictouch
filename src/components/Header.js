import React, { useState } from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// Styled components
const NavLinks = styled.nav`
  a {
    color: #000;
    margin-right: 15px;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const DrawerNavLinks = styled(List)`
  width: 250px;
`;

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = (
    <DrawerNavLinks onClick={toggleDrawer(false)}>
      <ListItem button component="a" href="#services">
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button component="a" href="#contact">
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem button component="a" href="#about">
        <ListItemText primary="About" />
      </ListItem>
    </DrawerNavLinks>
  );

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <NavLinks>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </NavLinks>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {navLinks}
      </Drawer>
    </>
  );
};

export default Header;
