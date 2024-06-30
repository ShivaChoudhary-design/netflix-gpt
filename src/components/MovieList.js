import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-6 text-white">{title}</h1>
      <div className="flex no-scrollbar overflow-x-scroll">
        <div className="flex">
          {title !== "Horror"
            ? movies?.map((movie) => (
                <MovieCard key={movie.id} poster_path={movie.poster_path} />
              ))
            : movies
                .slice(8)
                .map((movie) => (
                  <MovieCard key={movie.id} poster_path={movie.poster_path} />
                ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
