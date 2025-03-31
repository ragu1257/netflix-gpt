import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
function Browse() {
  useNowPlayingMovies();
  const gptView = useSelector((store) => store.gpt.showGptSearch);

  return (
    <>
      <Header />
      {gptView && <GptSearch />}
      {!gptView && (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
}

export default Browse;
