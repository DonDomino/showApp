import React from 'react';

export default function Navbar(){
  return(
    <div className="navbar container">
      <div className="logotype">
        <i className="fas fa-film"></i>
        <h2>Showapp</h2>
      </div>
      <div className="nav">
        <ul>
          <li><a href="/" className="active">Movies</a></li>
          <li><a href="/">Series</a></li>
          <li><a href="/">Favoritos</a></li>
        </ul>
      </div>
    </div>
  );
}