import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadGenres, handleType } from '../../actionCreators';

class Navbar extends Component{
  constructor(props){
    super(props);

    this.state = {
      activeTab: 0,
      tabs: ['Movies', 'Series', 'Favoritos']
    }
  }

  handleNav = index => {
    this.setState({
      activeTab: index
    });
    let type = "";
    if(this.state.activeTab === 1){
      type = 'movie';
    } else if(this.state.activeTab === 0){
      type = 'tv'
    }
    this.props.handleType(type);
    this.props.loadGenres(type);
  }

  render(){
    return(
      <div className="navbar container">
        <div className="logotype">
          <i className="fas fa-film"></i>
          <h2>Showapp</h2>
        </div>
        <div className="nav">
          <ul>
            {this.state.tabs.map((tab, index) => 
              <li onClick={this.handleNav.bind(this, index)} key={index}><span className={this.state.activeTab === index ? 'active' : ''}>{tab}</span></li>
            )}            
          </ul>
        </div>
      </div>
    );
  }  
}

const mapStateToProps = state => ({
  type: state.type
});
    
const mapDispatchToProps = {  
  handleType,
  loadGenres
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);