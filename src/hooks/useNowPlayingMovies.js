import { useDispatch } from "react-redux";
import { API_OPTIONS, NOWPLAYING_MOVIE } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and Update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOWPLAYING_MOVIE, API_OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
