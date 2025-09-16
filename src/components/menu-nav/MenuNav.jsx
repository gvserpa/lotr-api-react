import { useState } from "react";
import "./index.css";
import notification from "../../assets/notification-line (1).png";
import moon from "../../assets/moon-line.png";
import { Link, useNavigate } from "react-router-dom";

function MenuNav() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="logo">
        <h1 onClick={handleClick}>BOOKNEST</h1>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`menu ${open ? "open" : ""}`}>
        <div className="menu-nav">
          <Link to="/">Home</Link>
          <Link to="/api">API</Link>
          <Link to="/project">Project</Link>

        </div>
        <div className="menu-icons">
          <div className="notification-night-mode">
            <button>
              <img src={notification} alt="notification icon" />
            </button>
            <button>
              <img src={moon} alt="moon icon" />
            </button>
          </div>
          <div className="menu-profile">
            <button>PROFILE</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MenuNav;
