import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE_URL } from "../utils/constant";

const GptSearch = () => {
  /**
   * GPT Search Bar
   * GPT Movie Suggestions
   */
  return (
    <>
      <div>
        <div className="absolute -z-10">
          <img src={BG_IMAGE_URL} alt="Movie-logo" />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
