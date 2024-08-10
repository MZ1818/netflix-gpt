import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //fetch Data from TMDB API & update store

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* Main Container
            - VideoBackground
            -Video Title
          Secondary Container
             -Movies List*n 
               - cards * n */}
    </div>
  );
};

export default Browse;
