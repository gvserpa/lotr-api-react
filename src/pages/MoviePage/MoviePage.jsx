import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import "./index.css";
import MenuNav from "../../components/menu-nav/MenuNav";

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const {
          data: { docs },
        } = await api.get("/movie");
        const movieFound = docs.find((m) => m._id === id);
        setMovie(movieFound || null);
        console.log(docs)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Filme não encontrado.</p>;

  return (
    <div className="movie-page">
      <MenuNav />
      <div className="move-page-content">
        <div className="movie-page-title">
          <h1>{movie.name}</h1>
        </div>
        <div className="movie-info">
          <p>
            <strong>Runtime:</strong> {movie.runtimeInMinutes} min
          </p>
          <p>
            <strong>Budget:</strong> ${movie.budgetInMillions}M
          </p>
          <p>
            <strong>Revenue:</strong> ${movie.boxOfficeRevenueInMillions}M
          </p>
          <p>
            <strong>Awards:</strong> {movie.academyAwardWins} Wins &{" "}
            {movie.academyAwardNominations} Nominations
          </p>
          <p>
            <strong>Rotten Tomatoes Score:</strong> {movie.rottenTomatoesScore}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
