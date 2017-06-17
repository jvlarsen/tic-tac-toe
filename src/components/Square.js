import React from 'react';

export default class Square extends React.Component {
  render() {
    return (
      //The 'this.props.onClick()' is the function passed in as a prop from Board.
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
      );
  }
}