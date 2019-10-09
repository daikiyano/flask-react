import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from 'react-modal';

Modal.setAppElement('#root')


export default class Portfolio extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
          }
        
        
          this.openModal = this.openModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
      }
     
       closeModal = () => {
         this.setState({modalIsOpen: false});
       }
render(){
    return(
       <div>
        <Modal
        isOpen={this.state.modalIsOpen}
        contentLabel="Example Modal"
      >
      <button onClick={this.closeModal}>Close Modal</button>
      </Modal> 
         <div onClick={this.openModal}>
          
            {/* <button onClick={this.openModal}>Open Modal</button>  */}
          <Grid item>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={this.props.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.props.title}
                  </Typography>
                  <Typography component="p">{this.props.excerpt}</Typography>
                  <Fab color="primary" aria-label="add" >
                    <AddIcon />
                  </Fab>
                </CardContent>
              </CardActionArea>
              
              {/* <CardActions> */}
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                
              {/* </CardActions> */}
            </Card>
          </Grid>
          </div>
          </div>
    );
};


}