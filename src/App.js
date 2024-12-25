import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import './styles.css';

export default function App() {
    const handleResetClick = () => {
      //
    };
  
    return (
      <div className="p-10">
        <button onClick={() => handleResetClick()} className="px-6 py-3 rounded bg-blue-700 text-white mb-10">
          Reset Both Playlists
        </button>
        <hr />
        <MoviePlaylist />
        <hr />
        <SongPlaylist />
      </div>
    );
  }