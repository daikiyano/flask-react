import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './NavBar.js';


export default class Header extends React.Component {

    render() {

      return (
        <div>
            <AppBar color="inherit" position="fixed">
            <Toolbar>
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