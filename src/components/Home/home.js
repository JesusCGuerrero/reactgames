import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home">
        <h1 className='title-1'>Welcome To</h1>
        <h1 className='title-2'>React Games</h1>
        <p className='title-text'>This is an app I made to serve as an archive for all the different React games I build.<br/>I'll continue to add more games as time allows. Have fun!</p>
        <a className='portfolio-link' href='http://www.jesusguerrero.dev'>My Website</a>
    </div>
  );
}

export default Home;