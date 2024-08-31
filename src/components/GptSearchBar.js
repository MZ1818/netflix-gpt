import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    //console.log(searchText.current.value);

    //make an api call to opnAiGpt and get movies result

    const gptQuery =
      "Act as a movie reccomentation system and suggest some movies for the query :" +
      searchText.current.value +
      "only give me names of 5 movies, coma separated like the examples given ahead. Example:Gadar, Sholey, Don, Golmal, Koi Mil Gaya";

    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    //console.log(getResults.choices?.[0]?.message?.content);
    const gptMovies = getResults.choices?.[0]?.message?.content.split(",");

    //for each movie, search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[Promise, Promise, Promise, Promise, Promise]

    const tmbdResults = await Promise.all(promiseArray);
    //console.log(tmbdResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmbdResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 bg-gray-600 text-white rounded-md col-span-9"
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-md col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
