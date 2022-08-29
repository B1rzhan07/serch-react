import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const UrlofMovie = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const simpleUrl = `/movie/:${movie.id}`;
  return (
    <div>
      <div className="col-lg-2 col-md-2 col-2 my-2">
        <div className="card">
          <img
            src={UrlofMovie}
            className="card-img-top"
            alt={movie.original_title}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={simpleUrl} className="btn btn-primary">
              Show More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
