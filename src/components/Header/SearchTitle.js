import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSearch } from '../../actionCreators';

class Searchbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchText: ""
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  handleSubmit = e => {
    e.preventDefault();
    let type = this.props.type, query = this.state.searchText;
    this.props.loadSearch(type, query);
  }

  render() {
    return (
      <React.Fragment>
        <div className="searchbar">
          <form onSubmit={this.handleSubmit}>
            <i className="fas fa-search"></i>
            <input onChange={this.handleChange} name="searchText" value={this.state.searchText} type="text" className="longSearch" placeholder="Search for a movie, series and videos"></input>
          </form>
        </div>
        <h4 className="container">Descubra nuevas películas y programas de televisión</h4>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  type: state.type
});

const mapDispatchToProps = {
  loadSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);