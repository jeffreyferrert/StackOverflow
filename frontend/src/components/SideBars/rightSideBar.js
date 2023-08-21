import "./RightSideBar.css";
import temp from "../assets/stackoverflow_icon.png";
import { useEffect, useState } from "react";

function RigthSideBar() {
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
    <div className="rsb-main-container {windowWidth < 500 ? hide : ''}">
      <div className="rsb-box1">
        <p>Custom Filters</p>
        <a href="/questions">Create a custom filter</a>
      </div>

      <div className="rsb-box2">
        <p>Watched Tags</p>
        <img className="li-icon" src={temp} alt="so_icon" />
        <span>Watch tags to curate your list of questions</span>
        <button>
          <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/tags">Watch a tag</a>
        </button>
      </div>

      <div className="rsb-box3">
        <p>Ignored Tags</p>
        <span>Add an ignored tag</span>
      </div>

      <div className="rsb-box4">
        <p>Related Tags</p>
        <ul>
          <li>Javascript</li>
          <li>Git</li>
          <li>Python</li>
          <li>Java</li>
          <li>React</li>
          <li>C#</li>
          <li>Swift</li>
        </ul>
      </div>
    </div>
  );
}

export default RigthSideBar;
