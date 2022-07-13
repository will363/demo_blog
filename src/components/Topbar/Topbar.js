import React from 'react';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import './Topbar.css';

const Topbar = () => {
  return (
    <div>
      <header className='topbar'>
        <nav>
           <a href='home'>Accueil</a>
           <a className='active' href='articles'>Articles</a>
           <a href='a-propos'>A propos</a>
           <a href='contact'>Contact</a> 
        </nav>
        <div className='social'>
            <a href='#' title='Facebook'><img src={Facebook} title='Facebook' /></a>
            <a href='#' title='Twitter'><img src={Twitter} title='Twitter' /></a>
        </div>
      </header>
      <div className='bannière'></div>
    </div>
  )
}

export default Topbar
