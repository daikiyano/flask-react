import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Header from './components/Header.js';


// class Index extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>react-Flask</h2>
//       </div>
//     );
//   }
// }
ReactDOM.render(
<div>
<Header/>
</div> ,
  document.getElementById('root')
);