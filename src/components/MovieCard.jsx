/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { setCurrentMovie } from "../redux/moviesSlice";

const Moviecard = ({ item }) => {
  const { fetchMoviesDetails } = useAppContext();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function link() {
    navigate(`/details/${item?.Title}`);
    dispatch(setCurrentMovie(item));
    await fetchMoviesDetails(item?.Title, item?.Year);
  }
  return (
    <div className="w-[220px] h-[320px] rounded-lg relative">
      <img
        alt=""
        src={item?.Poster}
        className="w-full h-full object-cover rounded-lg"
      />
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
