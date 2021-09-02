import React, { useState } from 'react';
import { signInUser, logout } from './api/user.api'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Landing from './components/Landing';
import { Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleOpen = e => {
    setAnchorEl(e.currentTarget);
  }



  return (
    <div className={classes}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <Button color="inherit" onClick={() => signInUser()}>Login</Button>
        </Toolbar>
      </AppBar>
      <Landing />
    </div>
  );
}

export default App;
