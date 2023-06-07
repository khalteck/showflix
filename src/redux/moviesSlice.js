import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movieDetails: {},
    currentMovie: {},
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    setCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
  },
});

export const { setMovies, setMovieDetails, setCurrentMovie } =
  moviesSlice.actions;
export default moviesSlice.reducer;
