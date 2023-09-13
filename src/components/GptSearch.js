import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BAC_IMG } from "../constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BAC_IMG} alt="bac-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
