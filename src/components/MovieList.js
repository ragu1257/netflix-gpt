import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div>
      <h1 className="text-3xl text-white font-bold py-3">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hidden">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} image={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
