import React from 'react';
import Main from '../Home/components/main/main';
import Sidebar from '../Home/components/sidebar/sidebar';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Main />
      <Sidebar />
    </div>
  )
}

export default Home
