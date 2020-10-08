import React, { useEffect } from 'react';
import './nav.css';

function Nav() {

    useEffect(() => {
        if (window.location.href.includes('snake')) {
            const element = document.getElementById("nav-item-1")
            element.classList.add("active")
        } else if (window.location.href.includes('tetris')) {
            const element = document.getElementById("nav-item-2")
            element.classList.add("active")
        } else if (window.location.href.includes('minesweeper')) {
            const element = document.getElementById("nav-item-3")
            element.classList.add("active")
        } else if (window.location.href.includes('tic-tac-toe')) {
            const element = document.getElementById("nav-item-4")
            element.classList.add("active")
        } else if (window.location.href.includes('flappy-bird')) {
            const element = document.getElementById("nav-item-5")
            element.classList.add("active")
        } else {
            const element = document.getElementById("nav-home")
            element.classList.add("active")
        }
    }, [])

  return (
    <div className="nav">
        <div className='left-nav'>
            <a href="/" id='nav-home'>React Games</a>
        </div>
        <div className='right-nav'>
            <a href='/snake' id="nav-item-1">Snake</a>
            <a href='/tetris' id='nav-item-2'>Tetris</a>
            <a href='/minesweeper' id='nav-item-3'>Minesweeper</a>
            <a href='/tic-tac-toe' id='nav-item-4'>Tic Tac Toe</a>
            <a href='/flappy-bird' id='nav-item-5'>Flappy Bird</a>
        </div>
    </div>
  );
}

export default Nav;