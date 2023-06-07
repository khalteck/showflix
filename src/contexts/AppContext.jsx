import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setMovieDetails, setMovies } from "../redux/moviesSlice";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const fetchMovies = async () => {
    if (searchTerm) {
      setLoader(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=43a2d6d1&s=${searchTerm}`
        );
        const data = await response.json();
        if (response.ok) {
          dispatch(setMovies(data?.Search));
        } else {
          console.log("error occured", response.status);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
      setLoader(false);
    }
  };

  const fetchMoviesDetails = async (title, year) => {
    if (searchTerm) {
      setLoader(true);
      try {
        const apiKey = "43a2d6d1";
        const response = await fetch(
          `http://www.omdbapi.com/?t=${title}&y=${year}&apikey=${apiKey}`
        );
        const data = await response.json();
        if (response.ok) {
          dispatch(setMovieDetails(data));
        } else {
          console.log("error occurred", response.status);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
      setLoader(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        loader,
        setSearchTerm,
        fetchMovies,
        searchTerm,
        fetchMoviesDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
