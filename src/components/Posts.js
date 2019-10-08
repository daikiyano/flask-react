import React from "react";
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
// import { posts } from "./PostInfo";
import Modal from 'react-modal';

Modal.setAppElement('#root')

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


const posts = [

  {
   title: "Media Page",
   excerpt: "HTML,CSS,JavaScript,Ruby,Ruby on rails",
   image: "https://bit.ly/2WNi2Ml"
  },
 
  {
   title: "My second post",
   excerpt: "This is my second post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  },
 
  {
   title: "My third post",
   excerpt: "This is my third post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  },
 
  {
   title: "My fourth post",
   excerpt: "This is my fourth post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  },
 
  {
   title: "My fifth post",
   excerpt: "This is my fifth post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  },
 
  {
   title: "My sixth post",
   excerpt: "This is my sixth post with more content inside",
   image: "https://bit.ly/2WNi2Ml"
  }
 ]


 
 

function Posts(props) {

//   constructor() {
//     super();
  
  // this.state = {
  //   modalIsOpen: true
  // }

//   this.openModal = this.openModal.bind(this);
// }
//   openModal = () => {
//    this.setState({modalIsOpen: true});
//  }
  const classes = useStyles();
  return (
    <div style={{ marginTop: 50, padding: 30 }}>
      <h1 style={{ margin: '50px 0',textAlign: 'center' }}>My Portfolio</h1>
       {/* <button onClick={this.openModal}>Open Modal</button> 
       <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Example Modal"
        >
        </Modal>  */}
      <Grid container spacing={40} justify="center">
        {posts.map(post => (
          <div>
          <Grid item key={post.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={post.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                  <Fab color="primary" aria-label="add" className={classes.fab}>
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
        ))}
      </Grid>
    </div>
  );
}

export default Posts;