import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import './styles.css';
import { reset } from "./store";

export default function App() {
    const dispatch = useDispatch();
    
    const handleResetClick = () => {
      // resetting the array of song and movie playlist
      dispatch(reset());
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