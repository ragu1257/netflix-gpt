import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addVideoTrailer } from "../utils/moviesSlice";
import { useCallback, useEffect } from "react";

function useTrailerVideo(id) {
  const dispatch = useDispatch();
  const getVideoTrailer = useCallback(async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );

    const resJSON = await res.json();

    const filterredTrailer = resJSON.results.filter(
      (video) => video.type === "Trailer"
    );
    dispatch(addVideoTrailer(filterredTrailer[0]));
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      getVideoTrailer();
    }
  }, [getVideoTrailer, id]);
}

export default useTrailerVideo;
