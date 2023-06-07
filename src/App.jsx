import { Routes, Route } from "react-router-dom";
import "./output.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Homepage from "./pages/Homepage";

// Importing the lazy-loaded components
const Details = lazy(() => import("./pages/Details"));
const Movie = lazy(() => import("./pages/Movie"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Route for the movie details page */}
        <Route path="/details/:Title" element={<Details />} />

        {/* Route for the individual movie page */}
        <Route path="/movie/:Title" element={<Movie />} />
      </Routes>
    </Suspense>
  );
}

export default App;
