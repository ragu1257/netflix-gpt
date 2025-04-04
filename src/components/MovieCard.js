import { TMDB_IMAGE_URL } from "../utils/constants";

function MovieCard({ image }) {
  if (!image) return null;
  return (
    <div className="w-48 pr-4">
      <img className="w-full" alt="movie-title" src={TMDB_IMAGE_URL + image} />
    </div>
  );
}

export default MovieCard;
