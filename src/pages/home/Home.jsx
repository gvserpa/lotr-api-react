import SearchBar from "../../components/search-bar/SearchBar";
import MainContent from "../../components/mainContent/MainContent";
import SideMenu from "../../components/sideMenu/SideMenu";
import api from "../../services/api";
import { useState, useEffect } from "react";
import "./index.css";
import MenuNav from "../../components/menu-nav/MenuNav";

function Home() {
  const [characters, setCharacters] = useState([]); 
  const [movies, setMovies] = useState([]);  // começa como array
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadMovies() {
      try {
        const { data } = await api.get("/movie"); 
        setMovies(data.docs); 
      } catch (error) {
        console.error(error);
      }
    }
    loadMovies();
  }, []);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const { data } = await api.get("/character");
        setCharacters(data.docs); 
      } catch (error) {
        console.error(error);
      }
    }
    fetchCharacters();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <MenuNav />
      <SearchBar onSearchChange={setSearchTerm} results={searchTerm ? filteredMovies : []} />

      <div className="main-position">
        <MainContent />

        <div className="home-main">


          {/* Characters continuam aparecendo no SideMenu */}
          {characters.length > 0 && <SideMenu characters={characters} />}
        </div>
      </div>
    </>
  );
}

export default Home;
