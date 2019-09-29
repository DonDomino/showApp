import React from 'react';
import Navbar from './Header/Navbar';
import SearchTitle from './Header/SearchTitle';
import Filters from './Header/Filters';

export default function Header(){
  return(
    <React.Fragment>
      <Navbar />
      <SearchTitle />
      <Filters />
    </React.Fragment>
  )
}