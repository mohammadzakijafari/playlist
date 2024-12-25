import { createRandomMovie } from "../data";

function MoviePlaylist() {
  // To Do:
  // Get list of movies
  const moviePlaylist = [];

  const handleMovieAdd = (movie) => {
    // To Do:
    // Add movie to list of movies
  };
  const handleMovieRemove = (movie) => {
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="px-6 py-3 rounded bg-blue-700 text-white"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl">Movie Playlist</h3>
        <div className="">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="px-6 py-3 rounded bg-blue-700 text-white"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
