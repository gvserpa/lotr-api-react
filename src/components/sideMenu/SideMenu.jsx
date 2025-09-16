import "./index.css";
import book from "../../assets/lordBook2.jpg";
import book2 from "../../assets/lordBook6.jpg";
import right from "../../assets/arrow-right-black.png";
import left from "../../assets/arrow-left-black.png";
import play from "../../assets/play-fill.png";
import { useState } from "react";

function SideMenu({ characters }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!characters || characters.length === 0) return null;

  const currentCharacter = characters[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < characters.length - 1 ? prev + 1 : prev));
  };

  return (
    <>
      <div className="all-character">
        <div className="character">
          <h2>All Characters</h2>
        </div>
        <div className="trending-books-content">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            <img src={left} alt="left icon" />
          </button>
          <div className="character-name">
            <h3>{currentCharacter.name}</h3>
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex === characters.length - 1}
          >
            <img src={right} alt="right icon" />
          </button>
        </div>
        <div className="character-info">
          <p>Gender: {currentCharacter.gender}</p>
          <p>Race: {currentCharacter.race}</p>
          <div className="birth-death">
            <div className="birth">
              <h3>Birth: </h3>
              <p>{currentCharacter.birth || "Not available"}</p>
            </div>
            <div className="death">
              <h3>Death: </h3>
              <p>{currentCharacter.death || "Not available"}</p>
            </div>
          </div>
          <div className="wikiUrl">
            <h3>
              {" "}
              wikiURL: <br />
            </h3>
            <p>
              <span>{currentCharacter.wikiUrl}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="title-audio-books">
        <h3>Listen to Books</h3>
      </div>
      <div className="side-card-content">
        <div className="side-card">
          <div className="side-card-img">
            <img src={book} alt="book icon" />
          </div>
          <div className="side-card-title">
            <h4>The Hobbit</h4>
            <p>J.R.R. Tolkien</p>
          </div>
          <div className="side-card-play">
            <a className="side-card-play" href="https://www.youtube.com/watch?v=dtrnv2lWip8" target="_blank">
              <img src={play} alt="play icon" />
            </a>
          </div>
        </div>
        <div className="side-card">
          <div className="side-card-img">
            <img src={book2} alt="book icon" />
          </div>
          <div className="side-card-title">
            <h4>Two Towers</h4>
            <p>J.R.R. Tolkien</p>
          </div>
          <div className="side-card-play">
            <a className="side-card-play" href="https://www.youtube.com/watch?v=M_M6T8-mXow" target="_blank">
            <img src={play} alt="play icon" />
            </a>
          </div>
        </div>
        <div className="side-card">
          <div className="side-card-img">
            <img src={book} alt="book icon" />
          </div>
          <div className="side-card-title">
            <h4>Profile</h4>
            <p>J.R.R. Tolkien</p>
          </div>
          <div className="side-card-play">
            <a className="side-card-play" href="https://www.youtube.com/watch?v=KsVxjMGQEvc" target="_blank">
            <img src={play} alt="play icon" /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
