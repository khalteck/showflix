/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { setCurrentMovie } from "../redux/moviesSlice";

const Moviecard = ({ item }) => {
  // Access the fetchMoviesDetails function from the AppContext
  const { fetchMoviesDetails } = useAppContext();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function link() {
    // Navigate to the movie details page with the movie title in the URL
    navigate(`/details/${item?.Title}`);

    // Set the current movie in the Redux store
    dispatch(setCurrentMovie(item));

    // Fetch the movie details using the fetchMoviesDetails function
    await fetchMoviesDetails(item?.Title, item?.Year);
  }

  return (
    <div className="w-[220px] h-[320px] rounded-lg relative">
      {/* Movie Poster */}
      <img
        alt=""
        src={item?.Poster}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* View Button */}
      <button
        onClick={link}
        className="px-10 py-2 rounded-full bg-[#d8dae9] hover:bg-[#5e2eeb]/80 text-[#15152b] text-[.85rem] hover:text-white transition-all duration-300 absolute bottom-8 left-[50%] translate-x-[-50%]"
      >
        View
      </button>
    </div>
  );
};

export default Moviecard;
