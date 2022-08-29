import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./components/Music/Hero";

const MovieView = () => {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=<<api_key>>&language=en-US`
    );
  }, [id])
    .then((response) => response.json())
    .then((data) => {
      setMovieDetail(data);
      setIsLoading(false);
    });
  function Loading() {
    if (isLoading) {
      return <Hero text="Loading.." />;
    }
    if (movieDetail) {
      return (
        <>
          <Hero text={movieDetail.original_title} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">left column</div>
              <div className="col-md-9">right column</div>
            </div>
          </div>
        </>
      );
    }

    return Loading();
  }

  return (
    <div>
      <Hero text={movieDetail.original_title} />
    </div>
  );
};

export default MovieView;
