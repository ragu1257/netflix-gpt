import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
function MainContainer() {
  const movies = useSelector((store) => store.movies.nowPlaying);

  if (!movies) {
    return <div>Loading...</div>;
  }
  const { original_title, overview, id } = movies[0];

  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </>
  );
}

export default MainContainer;
