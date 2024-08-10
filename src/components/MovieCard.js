import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, cardMovieTitle }) => {
  // console.log(posterPath, cardMovieTitle);
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN + posterPath} alt={cardMovieTitle} />
    </div>
  );
};

export default MovieCard;
