import React from "react";
import { ING_API_URL } from "../constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-44 pr-4">
      <img alt="movie-logo" src={ING_API_URL + poster_path}></img>
    </div>
  );
};

export default MovieCard;
