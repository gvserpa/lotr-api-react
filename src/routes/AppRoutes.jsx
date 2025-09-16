import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import MoviePage from "../pages/MoviePage/MoviePage";
import PageApi from "../pages/API/PageApi.jsx";
import Project from "../pages/Project/Project.jsx";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/api" element={<PageApi />} />
        <Route path="/project" element={<Project />} />

      </Routes>
    </Router>
  );
}