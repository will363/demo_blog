import React from 'react';
import './sidebar.css';

function sidebar() {
  return (
    <div className='sidebar'>
      <h4 className='sidebar-title'>Catégories</h4>
      <ul>
        <li><a href='#'>High-Tech</a></li>
        <li><a href='#'>Concentré du Web</a></li>
        <li><a href='#'>A propos</a></li>
        <li><a href='#'>Astuces pour développeurs</a></li>
        <li><a href='#'>Ressources</a></li>
        <li><a href='#'>Bonnes pratiques</a></li>
      </ul>
      <hr/>
      <h4 className='sidebar-title'>Auteurs</h4>
      <ul>
        <li><a href='#'>William</a></li>
      </ul>
    </div>
  )
}

export default sidebar
