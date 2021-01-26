import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';


export default function SavedList(props) {
  
  let history = useHistory();

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie" key={movie.id}>
          <NavLink 
            key={movie.id}
            to={`/movies/${movie.id}`} >{movie.title}
          </NavLink>
          </span>
      ))}
      <div className="home-button" onClick={() => history.push("/")}>Home</div>
    </div>
  );
}
