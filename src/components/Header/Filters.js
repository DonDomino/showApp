import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadGenres, loadMovies } from '../../actionCreators';
import { url } from '../consts/Urls';

class Searchbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      genre: "elija",
      year: ""
    }
  }

  componentDidMount(){
    this.props.loadGenres(url);
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });

    let index = event.target.selectedIndex;
    let id = event.target.childNodes[index].getAttribute('data-id');
    this.props.loadMovies(id);    
  }

  render() {
    return (
      <div className="filterContainer container">
        <div className="filterWrapper">
          <p>Año</p>
          <div className="customSelect">
            <select>
              <option>Elija</option>
            </select>
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
        <div className="filterWrapper">
          <p>Género</p>
          <div className="customSelect">
            <select name="genre" value={this.state.genre} onChange={this.handleChange}>
              <option disabled value='elija'>Elija...</option>
              {this.props.genres.map((genre, index) => 
                <option data-id={genre.id} key={index}>{genre.name}</option>
              )}
            </select>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.genres
});
    
const mapDispatchToProps = {  
  loadGenres,
  loadMovies
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
