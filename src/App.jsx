import { Routes, Route } from "react-router-dom";
import "./output.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Homepage from "./pages/Homepage";

const Details = lazy(() => import("./pages/Details"));
const Movie = lazy(() => import("./pages/Movie"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/details/:Title" element={<Details />} />
        <Route path="/movie/:Title" element={<Movie />} />
      </Routes>
    </Suspense>
  );
}

export default App;
