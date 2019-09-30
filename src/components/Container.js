import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import EllipsisText from "react-ellipsis-text";

class Container extends Component {

  handleFavs = (id, e) => {
    e.target.nextSibling.classList.add('fav')
    localStorage.setItem(id, this.props.type);
  }

  render() {
    return (
      <div className="main container">
        {this.props.movies.map((movie, index) =>
          <div key={index} className="movieWrapper">
            <div className="left">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""></img>
            </div>
            <div className="right">
              <div>
                <div>
                  <div className="titleWrapper">
                    <h5>{movie.original_title || movie.original_name}</h5>
                    <span>{movie.vote_average}</span>
                  </div>
                  <div className="infoWrapper">
                    <span>2h 16min </span>
                    <span>{moment(movie.release_date).format("D MMM YYYY")} (USA)</span>
                    <span>Accion y Aventura</span>
                  </div>
                </div>
                <div className="description">
                  <p><EllipsisText text={movie.overview} length={150} /></p>
                </div>
              </div>
              <div className="movieFooter">
                <button className="button">Ver Trailer</button>
                <div onClick={this.handleFavs.bind(this, movie.id)} className="favWrapper">
                  <span>Agregar a favoritos</span>
                  <i className={localStorage[movie.id] ? "fas fa-heart fav" : "fas fa-heart" } ></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  type: state.type
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);