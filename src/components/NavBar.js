import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Book, AccountBox } from '@material-ui/icons'

export default class Header extends React.Component {
    render() {
      return (
        <div>
            <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Home <Home />
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Posts <Book />
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Contact <AccountBox />
               </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
        </div>
      );
    }
  }