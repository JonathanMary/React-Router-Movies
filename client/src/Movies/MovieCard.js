import React from 'react';
import { useHistory } from 'react-router-dom';

export default function MovieCard (props) {
    
  //console.log("MovieCard: ", props);
  
  const history = useHistory();

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <div className="movie-card" onClick={event => history.push(`/movies/${movie.id}`)} key={movie.id} >
          <h2>{movie.title}</h2>
          <div>
            <div className="movie-director">
              Director: <em>{movie.director}</em>
            </div>
            <div className="movie-metascore">
              Metascore: <strong>{movie.metascore}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

