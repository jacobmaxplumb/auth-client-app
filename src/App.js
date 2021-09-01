import React, { useState } from 'react';
import { signInUser, logout } from './api/user.api'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import HomePage from './components/HomePage';
import Protected from './components/Protected';
import Profile from './components/Profile';

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

function App(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className={classes}>
      <BrowserRouter>
        {localStorage.getItem('authToken') ? (
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
                <Link to="/profile">
                  <MenuItem onClick={handleClose}>
                    Profile
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <Typography variant="h6" className={classes.title}>
                My App
              </Typography>
              <Button color="inherit" onClick={() => logout()}>Logout</Button>
            </Toolbar>
          </AppBar>
        ) : (
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                My App
              </Typography>
              <Button color="inherit" onClick={() => signInUser()}>Login</Button>
            </Toolbar>
          </AppBar>
        )}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Protected path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
