import { Link } from "react-router-dom";
import "./LeftSideBar.css";

function LeftSideBar() {
  return (
    <div className="lsb-main-container">
      <Link to="/" className="link">
        <p>Home</p>
      </Link>
      <p>PUBLIC</p>

      <ul className="">
        <li className="select-option">Questions</li>
        <li>Tags</li>
        <li>Users</li>
        <li>Companies</li>
      </ul>

      <p>COLLECTIBLES</p>
      <Link to="/teams" className="link">
        <p>Explore Collectives</p>
      </Link>
      <Link to="/teams" className="link">
        <p>TEAMS</p>
      </Link>
    </div>
  );
}

export default LeftSideBar;
