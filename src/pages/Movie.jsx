import { useSelector } from "react-redux";
import Header from "../components/Header";
import Moviecard from "../components/MovieCard";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../ScrollToTop";

const Movie = () => {
  const { movies, movieDetails } = useSelector((state) => state.movies);

  const relatedMovies = movies?.filter(
    (item) => item?.imdbID !== movieDetails?.imdbID
  );

  return (
    <>
      <Sidebar />
      <Header />
      <main className="w-full bg-[#fefffe] md:pl-[270px] pt-[120px] px-4 md:pr-[40px] lg:pl-[340px] lg:pr-[60px] md:py-[90px] text-[#15152b]">
        <div className="w-full md:w-[70%] flex flex-col md:flex-row gap-4">
          <img
            alt=""
            src={movieDetails?.Poster}
            className="w-[250px] h-[320px] object-cover rounded-lg mx-auto md:mx-0"
          />
          <div>
            <h2 className="text-[1.75rem] font-bold">{movieDetails?.Title}</h2>
            <p className="mt-4 text-[1.2rem] tracking-wider">
              {movieDetails?.Plot}
            </p>
            <div className="w-full flex gap-3 justify-between md:gap-[80px] items-center mt-8">
              <div className="flex items-center gap-3 text-[#15152b]/60">
                <img
                  alt="search icon"
                  src="/images/icons8-clock-24.png"
                  className="w-4 h-4"
                />
                <p>{movieDetails?.Released}</p>
              </div>
              <div className="flex items-center gap-3 text-[#15152b]/60">
                <img
                  alt="search icon"
                  src="/images/icons8-star-50.png"
                  className="w-4 h-4"
                />
                <p>{movieDetails?.Ratings[0]?.Value}</p>
              </div>
              <div className="flex items-center gap-3 text-[#15152b]/60">
                <img
                  alt="search icon"
                  src="/images/icons8-play-50.png"
                  className="w-4 h-4"
                />
                <p>{movieDetails?.Runtime}</p>
              </div>
            </div>
            <div className="w-full flex items-center gap-3 mt-7">
              <button className="px-14 py-3 rounded-full bg-[#5e2eeb] hover:bg-[#5e2eeb]/60 text-white transition-all duration-300">
                Watch
              </button>
              <div className="flex h-full p-4 rounded-xl bg-[#eef0f7]">
                <img
                  alt="search icon"
                  src="/images/icons8-love-50.png"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-14">
          <h2 className="text-[1.75rem] font-bold">Related Movies</h2>

          <div className="w-fit mx-auto md:mx-0 py-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center md:place-items-start md:gap-10 gap-6">
            {relatedMovies?.map((item, index) => (
              <Moviecard item={item} key={index} />
            ))}
          </div>
        </div>
      </main>
      <ScrollToTop />
    </>
  );
};

export default Movie;
