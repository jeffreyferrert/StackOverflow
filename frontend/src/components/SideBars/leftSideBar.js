import { Link } from "react-router-dom";
import "./LeftSideBar.css";
import { useEffect, useState } from "react";

function LeftSideBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="lsb-main-container {windowWidth < 500 ? hide : ''}">
      <Link to="/" className="link">
        <p className="home">Home</p>
      </Link>
      <p>PUBLIC</p>

      <ul className="">
        <div className="world">
          <i class="fa-solid fa-earth-americas fa-lg" style={{ color: "#000000", }} />
          <span />
          <li className="select-option">Questions</li>
        </div>
        <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/tags">Tags</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users">Users</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/jobs/companies">Companies</a></li>

      </ul>

      <p>COLLECTIBLES</p>

      <div className="collectibles">
        <div className="c-span">
          <span class="fa-stack fa-2xs" >
            <i class="fa-solid fa-certificate fa-stack-2x" style={{ color: "#f48225", }} />
            <i class="fa-solid fa-star fa-stack-1x" style={{ color: "#FFFFFF", }} />
          </span>
        </div>
        <p>
        <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/collectives">
          Explore collectives
        </a>
        </p>
      </div>

    </div>
  );
}

export default LeftSideBar;
