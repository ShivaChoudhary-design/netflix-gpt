import React, { useRef, useState } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const [loader, setLoader] = useState(false);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    setLoader(true);
    // API call to OPENAI GPT
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query : " +
      searchText.current.value +
      " only give names of five movies, comma seperated like the example result ahead. Example Result: Interstellar, Inception, ZNMD, YZHD, Golmaal";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    // For each movie search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    setLoader(false);
  };

  return (
    <>
      <div className="pt-[60%] md:pt-[10%] flex justify-center">
        <form
          className="bg-black w-full md:w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="py-2 md:p-4 my-4 mx-2 md:m-4 grid col-span-9 text-xs md:text-base"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />

          <button
            className="py-2 px-1 md:px-4 m-4 col-span-3 bg-red-700 text-white rounded-md text-xs md:text-base"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
      {loader ? (
        <div className="py-2 flex justify-center items-center px-1 md:px-4 m-4 bg-black bg-opacity-50 text-white rounded-md text-base md:text-2xl">
          <div>Loading....</div>
        </div>
      ) : null}
    </>
  );
};

export default GptSearchBar;
