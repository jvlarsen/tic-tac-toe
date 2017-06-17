import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';

//ReactDOM.render tager to parametre:
//HVAD der skal renderes, og
//HVOR det skal renderes.
//Her er det Game, der skal vises i root.
ReactDOM.render(
  <Game />,
  document.getElementById('root')
  );
// Vi vil rendere Game component. Man kan vælge at sende en property med:
// <Game name="Jesper"/>
// Så kan man i class Game ovenfor lave:
// <p>{this.props.name}</p>