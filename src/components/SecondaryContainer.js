import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  return (
    <div className="bg-black -mt-8 relative">
      <MovieList title="Now Playing" movies={movies} />
      <MovieList title="Trending" movies={movies} />
      <MovieList title="Popular" movies={movies} />
      <MovieList title="Horror" movies={movies} />
    </div>
  );
}

export default SecondaryContainer;
