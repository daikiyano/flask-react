import React from "react";
import Portfolio from './portfolio.js';
 export default class Posts extends React.Component {

  render(){
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
    
    
  return (
    <div style={{ marginTop: 50, padding: 30 }}>
      <h1 style={{ margin: '50px 0',textAlign: 'center' }}>My Portfolio</h1>
       
      <Grid container spacing={40} justify="center">
        {posts.map((post) => (

      <Portfolio
          title={post.title}
          image={post.image}
          post={post.excerpt}
      />  
      ))}
      </Grid>
     </div>
  );
  
};

 }