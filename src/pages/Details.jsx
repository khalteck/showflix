import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Moviecard from "../components/MovieCard";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../ScrollToTop";

const Details = () => {
  const { movies, movieDetails, currentMovie } = useSelector(
    (state) => state.movies
  );

  const navigate = useNavigate();
  function link() {
    navigate(`/movie/${currentMovie?.Title}`);
  }

  function back() {
    const boardElement = document.getElementById("board");
    boardElement.classList.remove("slide");
    boardElement.classList.add("slideBack");

    setTimeout(() => {
      navigate("/");
    }, 500);
  }

  return (
    <>
      <Sidebar />
      <div className="w-full h-screen bg-black/50 fixed top-0 left-0 z-10 text-[#15152b] overflow-y-hidden">
        <div onClick={back} className="w-full h-full"></div>
        <div
          id="board"
          className="w-full md:w-[350px] min-w-[300px] h-full bg-[#fefffe] absolute top-0 right-0 px-5 pt-20 pb-10 md:py-10 slide overflow-y-auto"
        >
          <Header />

          <img
            onClick={back}
            alt=""
            src="/images/icons8-back-50.png"
            className="w-7 h-auto cursor-pointer"
          />

          <div className="w-[220px] h-[320px] rounded-lg relative mt-8">
            <img
              alt=""
              src={currentMovie?.Poster}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-[1.35rem] font-bold mt-8">
            {currentMovie?.Title}
          </h2>
          <p className="mt-8">{movieDetails?.Plot}</p>
          <button
            onClick={link}
            className="px-14 py-3 mt-8 rounded-full bg-[#5e2eeb] hover:bg-[#5e2eeb]/60 text-white transition-all duration-300"
          >
            Watch
          </button>
        </div>
      </div>

      <main className="w-full bg-[#fefffe] md:pl-[270px] md:pr-[40px] px-4 lg:pl-[330px] lg:pr-[50px] py-[90px] text-[#15152b]">
        <h1 className="text-[1.75rem] font-bold">Explore</h1>
        <div className="w-full flex gap-5 items-center mt-5">
          <input
            type="text"
            className="w-2/3 bg-[#eef0f7] px-3 py-4 rounded-xl outline-none"
          />
          <button className="px-14 py-4 rounded-full bg-[#5e2eeb] hover:bg-[#5e2eeb]/60 text-white transition-all duration-300">
            Search
          </button>
        </div>

        <div className="w-full mt-10 flex flex-col gap-5">
          <p className="tracking-wider">
            Results for:{" "}
            <span className="font-bold text-[1.25rem]">Mortal Kombat</span>
          </p>
          {/* movie display cont */}
          <div className="w-fit lg:min-w-fit mx-auto md:mx-0 py-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center md:place-items-start md:gap-10 gap-6 flex-wrap">
            {movies?.map((item, index) => {
              return <Moviecard item={item} key={index} />;
            })}
          </div>
        </div>
      </main>
      <ScrollToTop />
    </>
  );
};

export default Details;
