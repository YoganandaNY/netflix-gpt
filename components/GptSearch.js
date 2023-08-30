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
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={BG_IMAGE_URL}
          alt="Movie-logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
