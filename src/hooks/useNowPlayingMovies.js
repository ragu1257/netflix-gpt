import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const result = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const jsonRes = await result.json();
      dispatch(addNowPlayingMovies(jsonRes.results));
    };
    getNowPlayingMovies();
  }, [dispatch]);
}

export default useNowPlayingMovies;
