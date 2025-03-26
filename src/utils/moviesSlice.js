import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    videoTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addVideoTrailer: (state, action) => {
      state.videoTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addVideoTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
