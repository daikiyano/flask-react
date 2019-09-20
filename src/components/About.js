import React from 'react';
import { white } from 'ansi-colors';
import { flexbox } from '@material-ui/system';




export default class About extends React.Component {
    render() {
      return (
        <div className='container' style={{height: '400px',backgroundColor: 'white',margin: '100px',display: 'flex'}}>
         
             <div className='intro_left' style={{height: '100%',width: '50%',backgroundColor: 'red'}}>
            </div>
            <div className='intro_right' style={{height: '100%',width: '50%',backgroundColor: 'green'}}>

            </div>
         

        </div>
      );
    }
  }