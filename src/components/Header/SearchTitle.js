import React from 'react';

function Searchbar() {
  return (
   <React.Fragment>
      <div className="searchbar">
        <i className="fas fa-search"></i>
        <input type="text" className="longSearch" placeholder="Search for a movie, series and videos"></input>
      </div>
      <h4 className="container">Descubra nuevas películas y programas de televisión</h4>
    </React.Fragment>
  );
}

export default Searchbar;