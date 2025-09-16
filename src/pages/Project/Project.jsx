import MenuNav from "../../components/menu-nav/MenuNav";
import SearchBar from "../../components/search-bar/SearchBar";
import "./index.css"; 
import github from "../../assets/github-fill (1).png"
import linkedin from "../../assets/linkedin-box-fill.png"
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <MenuNav />
      <SearchBar />

      <div className="text-api">
  <h1>Lord of the Rings API Project</h1>

  <h2>Key React Concepts & Tools Used</h2>

  <h3>useState</h3>
  <p>
    The <code>useState</code> hook was used extensively to manage the application state. For example, we stored the list of movies retrieved from the API in a <code>movies</code> state variable. This allows the data to be reused across multiple components, such as the search bar, main content, and side menu, promoting modularity and separation of concerns.
  </p>

  <h3>useEffect</h3>
  <p>
    The <code>useEffect</code> hook was employed to perform asynchronous API requests when the component mounts. By calling the API inside <code>useEffect</code>, we ensured that the data fetching occurs efficiently and only when needed, avoiding unnecessary re-renders and maintaining performance.
  </p>

  <h3>Props & Component Communication</h3>
  <p>
    Props were used to pass data and functions between components. For instance, the search term from the <strong>SearchBar</strong> component is lifted up to the parent component and passed to child components that display filtered results. This reinforces the React pattern of unidirectional data flow and clean component communication.
  </p>

  <h3>Dynamic Data & Reusability</h3>
  <p>
    By storing API responses in state variables, we enabled multiple components to access and reuse the same data. This approach avoids redundant requests and simplifies the maintenance of the code, while also demonstrating how React efficiently updates the UI when state changes.
  </p>

  <h3>Responsiveness</h3>
  <p>
    The application was built with responsive design in mind. Using CSS flexbox, media queries, and adaptive component layouts, we ensured that the interface works seamlessly on a variety of screen sizes, from mobile devices to desktops.
  </p>

  <h3>Additional Learnings & Best Practices</h3>
  <ul>
    <li>Implementing a dynamic search feature with live filtering.</li>
    <li>Structuring components in a modular and reusable way.</li>
    <li>Handling asynchronous operations and API errors gracefully.</li>
    <li>Applying semantic HTML and clean CSS for readability and maintainability.</li>
    <li>Using external libraries like Axios for efficient HTTP requests.</li>
  </ul>

  <h2>Project Availability</h2>
  <p>
    This project will be hosted on <strong>GitHub</strong>, providing access to the source code, detailed documentation, and instructions for local setup. It serves as a practical example of working with APIs in React, showcasing state management, component communication, and responsive UI design.
  </p>

  <div className="media-links">
    <a href="https://github.com/gvserpa" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/devgustavoserpa/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn" />
    </a>
  </div>
</div>

    </>
  );
}

export default Project;
