import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

class Header extends React.Component {
    render() {
      return (
        <div>
          <h2>TEST</h2>
        </div>
      );
    }
  }
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
</div>
  ,
  document.getElementById('root')
);