import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
      return (
        <div>
          <h2>Treact-Flaskテスト</h2>
        </div>
      );
    }
  }


class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>react-Flask</h2>
      </div>
    );
  }
}
ReactDOM.render(
<div>
<Index/>
<Header/>
</div>
  ,
  document.getElementById('root')
);