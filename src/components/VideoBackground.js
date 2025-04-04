import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

function VideoBackground({ id }) {
  const trailer = useSelector((store) => store.movies?.videoTrailer);
  useTrailerVideo(id);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
