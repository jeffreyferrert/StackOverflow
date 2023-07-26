import "./Styles/LeftSideBar.css";

function LeftSideBar() {
  return (
    <div className="lsb-main-container">
      <h3>Home</h3>
      <h3>Public</h3>

      <ul className="">
        <li>Tags</li>
        <li>Users</li>
        <li>Companies</li>
      </ul>

      <h3>Collectives</h3>
      <h3>Explore Collectives</h3>
      <h3>Teams</h3>
    </div>
  );
}

export default LeftSideBar;
