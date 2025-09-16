import MenuNav from "../../components/menu-nav/MenuNav";
import SearchBar from "../../components/search-bar/SearchBar";
import "./index.css"; 
import github from "../../assets/github-fill (1).png"
import linkedin from "../../assets/linkedin-box-fill.png"
import { Link } from "react-router-dom";

function PageApi() {
  return (
    <>
      <MenuNav />
      <SearchBar />

      <div className="text-api">
        <h1>Lord of the Rings API Project</h1>

        <p>
          This project is a <strong>React-based API consumer</strong> designed
          to explore and display information from <em>“The One API”</em>, which
          provides detailed data about the Lord of the Rings universe. The
          project was built entirely using React, and Axios was used to perform
          HTTP requests to the API, ensuring efficient and secure data
          retrieval.
        </p>

        <h2>Endpoints Used</h2>

        <p>
          Two main endpoints were consumed: <code>/movie</code> and{" "}
          <code>/character</code>, each serving a distinct purpose.
        </p>

        <h3>/movie Endpoint</h3>
        <p>
          The <code>/movie</code> endpoint retrieves comprehensive information
          about the films in the saga, including:
        </p>
        <ul>
          <li><strong>Movie duration</strong></li>
          <li><strong>Awards and nominations</strong></li>
          <li><strong>Budget</strong></li>
          <li><strong>Revenue</strong></li>
        </ul>
        <p>
          A <strong>dynamic search feature</strong> was implemented, allowing
          users to filter movies by name in real-time. The results are displayed
          in a dropdown component, providing an interactive and user-friendly
          experience.
        </p>

        <h3>/character Endpoint</h3>
        <p>
          The <code>/character</code> endpoint fetches a list of characters,
          including essential details such as:
        </p>
        <ul>
          <li><strong>Name</strong></li>
          <li><strong>Race</strong></li>
          <li><strong>Gender</strong></li>
          <li><strong>Wiki URL</strong> (when available)</li>
        </ul>
        <p>
          Character data is displayed in a <strong>SideMenu</strong>, enabling
          quick and organized navigation, while movie details appear in the{" "}
          <strong>MainContent</strong> section.
        </p>

        <h2>Project Architecture</h2>
        <p>
          State management is handled using <code>useState</code>, and data
          fetching is performed with <code>useEffect</code> after the API
          requests are completed. The project follows a{" "}
          <strong>component-based architecture</strong>, making the application
          modular, reusable, and easy to maintain. The integration of API
          consumption, data handling, and user interaction has been implemented
          clearly and efficiently.
        </p>

        <h2>Availability</h2>
        <p>
          This project will be made available on <strong>GitHub</strong>,
          providing full access to the source code, documentation, and
          instructions for local setup. It serves as both a practical example
          of consuming APIs with React and a demonstration of filtering,
          displaying, and interacting with real data from the Lord of the Rings
          saga.
        </p>
        <div className="media-links">
        <a href="https://github.com/gvserpa" target="_blank"><img src={github} /></a>
        <a href="https://www.linkedin.com/in/devgustavoserpa/" target="_blank" ><img src={linkedin} /></a>
        </div>
      </div>
    </>
  );
}

export default PageApi;
