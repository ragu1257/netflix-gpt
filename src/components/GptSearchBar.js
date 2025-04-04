import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

function GptSearchBar() {
  // const []
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const fetchMovieDetail = async (name) => {
    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const resultJSON = await result.json();
    return resultJSON.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      " . Only give me top 5 movies, comma separated like the example given ahead. Example Hera Pheri, Don...";

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });
    const movieList = completion.choices[0]?.message.content.split(",");
    const promiseArray = movieList.map((name) => fetchMovieDetail(name));
    const tmdbMoviesDetails = await Promise.all(promiseArray);
    dispatch(
      addGptMovies({ movies: movieList, moviesDetails: tmdbMoviesDetails })
    );
  };
  return (
    <div className="pt-[10%] flex- justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black align-middle grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
        >
          search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
