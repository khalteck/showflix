import { useSelector } from "react-redux";
import Header from "../components/Header";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import Sidebar from "../components/Sidebar";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Homepage = () => {
  // Accessing the required values and functions from the AppContext
  const {
    setSearchTerm,
    searchTerm,
    fetchMovies,
    loader,
    noMovieFound,
    setNoMovieFound,
  } = useAppContext();

  // Accessing the movies array from the Redux store
  const { movies } = useSelector((state) => state.movies);

  // Function to handle the movie search
  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchMovies();
  };

  return (
    <>
      <Sidebar />
      <Header />
      <main className="w-full bg-[#fefffe] md:pl-[270px] px-4 md:pr-[40px] lg:pl-[330px] lg:pr-[50px] py-[90px] text-[#15152b]">
        <h1 className="text-[1.75rem] font-bold">Explore</h1>
        <div className="w-full">
          <form
            className="w-full flex flex-col md:flex-row gap-5 md:items-center items-end mt-5"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setNoMovieFound(false);
              }}
              className="w-full md:w-2/3 bg-[#eef0f7] px-3 py-4 rounded-xl outline-none"
            />
            <button
              type="submit"
              className="py-2 px-8 md:px-14 md:py-4 rounded-full bg-[#5e2eeb] hover:bg-[#5e2eeb]/60 text-white transition-all duration-300"
            >
              Search
            </button>
          </form>
        </div>

        <div className="w-full mt-10 flex flex-col gap-5">
          {/* Display search results if there are movies */}
          {movies?.length > 0 && (
            <p className="tracking-wider">
              Results for:{" "}
              <span className="font-bold text-[1.25rem]">{searchTerm}</span>
            </p>
          )}

          {/* Display message if there are no movies and noMovieFound is false */}
          {movies?.length === 0 && !noMovieFound && (
            <div className="w-full md:w-[70%] h-[200px] mt-5 flex justify-center items-center border border-[#5e2eeb] rounded-xl">
              <p className="font-bold text-[1.25rem] text-[#15152b]/40">
                Nothing yet, search for a movie...
              </p>
            </div>
          )}

          {/* Display message if no movies found for the search term */}
          {noMovieFound && searchTerm && (
            <div className="w-full md:w-[70%] h-[200px] mt-5 flex justify-center items-center border border-[#5e2eeb] rounded-xl">
              <p className="font-bold text-[1.25rem] text-[#15152b]/40">
                No results for movie {`"${searchTerm}"`}...
              </p>
            </div>
          )}

          {/* Display loader while fetching movies */}
          {loader ? (
            <Loader />
          ) : (
            // Display movie cards if there are movies
            <div className="w-fit mx-auto md:mx-0 py-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center md:place-items-start md:gap-10 gap-6 flex-wrap">
              {movies?.map((item, index) => (
                <MovieCard item={item} key={index} />
              ))}
            </div>
          )}
        </div>
      </main>
      <ScrollToTop />
    </>
  );
};

export default Homepage;
