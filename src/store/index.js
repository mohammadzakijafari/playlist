import { configureStore, createSlice } from "@reduxjs/toolkit";

// this slice is an action creator, that contains several reducers 
 const songsSlice = createSlice({
    name: "song",
    // this is an initial value and it can be anything like array, object, string etc.
    initialState: [],
    // this reducer contains a set of different and multi mini reducers 
    // 'song' + '/' + 'addSong' = 'song/addSong'
    reducers: {
        addSong(state, action) {
            // this state is not the bit state object in the store, it is the pieces of state managed by the reducer
            state.push(action.payload);
        },
        removeSong(state, action) {
            // action.payload === string, the song we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
 });

 // store is an object that 
 const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
 });

export { store };
export const { addSong, removeSong } = songsSlice.actions;

//  const initialState = store.getState();
//  console.log(JSON.stringify(initialState));

// store.dispatch(songSlice.actions.addSong("New Song !"));

// const finalState = store.getState();
//  console.log(JSON.stringify(finalState));