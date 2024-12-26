import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";

//
export const reset = createAction("app/reset");

// this slice is an action creator, that contains several reducers 
const moviesSlice = createSlice({
    name: "movie",
    // this is an initial value and it can be anything like array, object, string etc.
    initialState: [],
    // this reducer contains a set of different and multi mini reducers 
    // 'movie' + '/' + 'addMovie' = 'movie/addMovie'
    reducers: {
        addMovie(state, action) {
            // this state is not the bit state object in the store, it is the pieces of state managed by the reducer
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
        // reset(state, action) {
        //     return [];
        // }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    }
});

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
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        });
    }
    // extraReducers(builder) {
    //     builder.addCase(moviesSlice.actions.reset, (state, action) => {
    //         return [];
    //     });
    // }
 });

 // store is an object that 
 const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
 });

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;

//  const initialState = store.getState();
//  console.log(JSON.stringify(initialState));

// store.dispatch(songSlice.actions.addSong("New Song !"));

// const finalState = store.getState();
//  console.log(JSON.stringify(finalState));