import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, cardMovieTitle }) => {
  if (!posterPath) return null;
  // console.log(posterPath, cardMovieTitle);
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMG_CDN + posterPath} alt={cardMovieTitle} />
    </div>
  );
};

export default MovieCard;
