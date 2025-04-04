import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestions() {
  const { gptMovies, gptMoviesDetails } = useSelector((store) => store.gpt);
  if (!gptMovies) return null;

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {gptMovies.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMoviesDetails[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestions;
