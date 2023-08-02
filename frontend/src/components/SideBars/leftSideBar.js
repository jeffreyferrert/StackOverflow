import { Link } from "react-router-dom";
import "./LeftSideBar.css";

function LeftSideBar() {
  return (
    <div className="lsb-main-container">
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
        <li>Tags</li>
        <li>Users</li>
        <li>Companies</li>
      </ul>

      <p>COLLECTIBLES</p>
      <Link to="/teams" className="link">
        <div className="collectibles">
          <div className="c-span">
            <span class="fa-stack fa-2xs" >
              <i class="fa-solid fa-certificate fa-stack-2x" style={{ color: "#f48225", }} />
              <i class="fa-solid fa-star fa-stack-1x" style={{ color: "#FFFFFF", }} />
            </span>

          </div>

          <p className="c-parra">Explore Collectives</p>

        </div>
      </Link>
      <Link to="/teams" className="link">
        <p className="teams">TEAMS</p>
      </Link>
    </div>
  );
}

export default LeftSideBar;
