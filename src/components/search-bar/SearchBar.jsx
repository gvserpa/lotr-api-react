import { useState } from "react";
import arrowDown from "../../assets/arrow-drop-down-line.png";
import { useNavigate } from "react-router-dom";
import "./index.css";

function SearchBar({ onSearchChange, results }) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate(); // 🔹 inicializa useNavigate

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearchChange(value);
  };

  const handleSelect = (movie) => {
    setInputValue(movie.name);
    onSearchChange(movie.name);
    navigate(`/movie/${movie._id}`); // 🔹 agora temos o _id correto
  };

  return (
    <div className="search-bar">
      <input
        placeholder="Which book were you looking for?"
        value={inputValue}
        onChange={handleChange}
      />
      <button>
        All Category <img src={arrowDown} alt="arrow-drop-down icon" />
      </button>
      <button>
        Years <img src={arrowDown} alt="arrow-drop-down icon" />
      </button>

      {inputValue && results.length > 0 && (
        <ul className="search-results">
          {results.map((movie) => (
            <li key={movie._id} onClick={() => handleSelect(movie)}>
              {movie.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
