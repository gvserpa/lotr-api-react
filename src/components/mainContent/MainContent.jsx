import "./index.css";
import { useState, useEffect } from "react";
import lordBook from "../../assets/lord-book.jpg";
import fire from "../../assets/fire-fill.png";
import like from "../../assets/heart-line.png";
import more from "../../assets/more-line.png";
import right from "../../assets/arrow-right (2).png";
import left from "../../assets/arrow-left (2).png";
import rightBlack from "../../assets/arrow-right-black.png";
import leftBlack from "../../assets/arrow-left-black.png";
import Cards from "../../components/cards/Cards";
import api from "../../services/api";
import lordBook2 from "../../assets/lordBook2.jpg";
import lordBook3 from "../../assets/lordBook3.png";
import lordBook4 from "../../assets/lordBook4.jpg";
import lordBook5 from "../../assets/lordBook5.jpg";
import lordBook6 from "../../assets/lordBook6.jpg";
import lordBook7 from "../../assets/lordBook7.jpg";
import lordBook8 from "../../assets/lordBook8.jpg";

function MainContent() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const bookImages = [
    lordBook,
    lordBook2,
    lordBook3,
    lordBook4,
    lordBook5,
    lordBook6,
    lordBook7,
    lordBook8,
  ];

  useEffect(() => {
    async function loadData() {
      const {
        data: { docs },
      } = await api.get("/movie");
      setMovies(docs);
    }
    loadData();
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleMovies = movies.slice(startIndex, endIndex);

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  return (
    <main>
      <div className="main-card">
        <div className="main-card-book">
          <img src={lordBook} alt="photo" />
        </div>
        <div className="main-card-info">
          <div className="trending-now">
            <button>
              <img src={fire} alt="fire icon" /> Trending Now
            </button>
          </div>
          <div className="main-category">
            <button>Novel</button>
            <button>Science Fiction</button>
          </div>
          <div>
            <h2>{movies[0]?.name || "Dune"}</h2>
            <h4>J.R.R. Tolkien</h4>
            <p>
              A legendary author who created epic worlds
              filled with rich languages, cultures, and adventures, exploring
              heroism, friendship, and the struggle between good and evil.
            </p>
          </div>
          <div className="main-bottom-buttons">
            <div className="left-buttons">
              <div className="read-book">
                <button><a href="https://en.wikipedia.org/wiki/J._R._R._Tolkien" target="_blank" >wikipedia Author</a></button>
              </div>
              <div className="transparent-buttons">
                <button>
                  <img src={like} alt="like icon" />
                </button>
                <button>
                  <img src={more} alt="more icon" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="discover-buttons">
        <h2>Discover</h2>
        <div className="discover-arrow-buttons">
          <button onClick={handlePrev} disabled={currentPage === 0}>
            <img src={leftBlack} alt="left icon" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
          >
            <img src={rightBlack} alt="right icon" />
          </button>
        </div>
      </div>

      <div className="cards">
        {visibleMovies.map((movie, i) => {
          const globalIndex = currentPage * itemsPerPage + i;
          return (
            <Cards
              movieData={movie}
              key={movie._id}
              backgroundImage={bookImages[globalIndex % bookImages.length]}
            />
          );
        })}
      </div>
    </main>
  );
}

export default MainContent;
