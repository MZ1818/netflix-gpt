import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-60 relative z-20 pl-4 md:pl-14">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>

      {/* 
    MovieList -Popular
       - Movie Cards * n
    MovieList -Now Playing
    MovieList -Trending
    MovieList -
    */}
    </div>
  );
};

export default SecondaryContainer;
