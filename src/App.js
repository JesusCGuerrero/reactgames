import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Nav from './components/Nav/nav';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import Snake from './components/Snake/snake';
import Tetris from './components/Tetris/tetris';
import Minesweeper from './components/Minesweeper/minesweeper';
import Tictactoe from './components/Tictactoe/tictactoe';
import Flappybird from './components/Flappybird/flappybird';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/snake" component={Snake} />
        <Route exact path="/tetris" component={Tetris} />
        <Route exact path="/minesweeper" component={Minesweeper} />
        <Route exact path="/tic-tac-toe" component={Tictactoe} />
        <Route exact path="/flappy-bird" component={Flappybird} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
