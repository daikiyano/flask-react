import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './NavBar.js';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typist from 'react-typist';

export default class Header extends React.Component {

    render() {

      return (
        <div>


            <AppBar color="primary" position="static">
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <TypoGraphy variant="title"
              color="inherit"
            >
              GitHub Page
           </TypoGraphy>
           <NavBar/>
          </Toolbar>
                
          </AppBar>
          


      
        </div>
      );
    }
  }