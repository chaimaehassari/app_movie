import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`} className="no-underline">
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
