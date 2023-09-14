import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className=" m-4 bg-black text-white opacity-90">
      {movieNames.map((movieName, i) => (
        <MovieList key={movieName} title={movieName} movies={movieResults[i]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
