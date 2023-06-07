import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";

// Load state from local storage
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  preloadedState: persistedState, // Set preloadedState with persisted state
});

// Save state to local storage on store state changes
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
