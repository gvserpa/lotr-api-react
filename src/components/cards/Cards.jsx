import "./index.css";
import award from "../../assets/award-line.png";
import { useNavigate } from "react-router-dom";

function Cards({ movieData, backgroundImage }) {

  const navigate = useNavigate();

  const handleDiscover = () => {
    navigate(`/movie/${movieData._id}`)
  }

  return (
    <>
      <div className="card" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
      }}>
        <div className="card-info">
          <h3>{movieData.name}</h3>
          <div className="card-info-movie">
            <p>{movieData.runtimeInMinutes} min</p>
            <div className="award">
              <img src={award} alt="award icon" />
              <p>
                {movieData.academyAwardWins} Wins &{" "}
                {movieData.academyAwardNominations} Nominations
              </p>
            </div>
          </div>
          <div className="budget-revenue">
            <div className="budget">
              <h4>Budget</h4>
              <p>${movieData.budgetInMillions}M</p>
            </div>
            <div className="revenue">
              <h4>Revenue</h4>
              <p>${movieData.boxOfficeRevenueInMillions}M</p>
            </div>
          </div>
        </div>
        <div className="card-button">
          <button onClick={handleDiscover}>Discover</button>
        </div>
      </div>
    </>
  );
}

export default Cards;
