import React from 'react';
import AppBar from '@material-ui/core/AppBar';



export default class Header extends React.Component {
    render() {
      return (
        <div>
            <AppBar color="primary" position="static">
                <h1>Port Forio</h1>
          </AppBar>
        </div>
      );
    }
  }