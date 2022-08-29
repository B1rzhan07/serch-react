import React from "react";
// Api KEY:  aef41840a99b5b133635b9ea9c13f87c

// https://api.themoviedb.org/3/search/movie?api_key=aef41840a99b5b133635b9ea9c13f87c&language=en-US&query=Star%20Wars&page=1&include_adult=false

const Hero = (props) => {
  return (
    <div className="bg-dark text-white p-4">
      <h1>{props.text}</h1>
    </div>
  ); 
};

export default Hero;
