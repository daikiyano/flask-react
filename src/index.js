// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Header from './components/Header.js';
import Posts from './components/Posts.js';
import About from './components/About.js';
import Top from './components/Top.js';



ReactDOM.render(
<React.Fragment>
<Header/>
<Top/>
<About/>
<Posts/>
</React.Fragment>
 ,
  document.getElementById('root')
);