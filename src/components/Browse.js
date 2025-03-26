import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
function Browse() {
  useNowPlayingMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
}

export default Browse;
