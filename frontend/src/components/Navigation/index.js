import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import menu from "../assets/menu.png"
import lupa from "../assets/lupa.png"
import logo from "../assets/logo-stackoverflow.png"

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="topbar-login">Log in</NavLink>

        <NavLink to="/signup" className="topbar-signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
      <div id="topbar-container">

        <nav className="topbar-menu">
          <img className="topbar-menu-img" src={menu} alt="" />
        </nav>

        <NavLink exact to="/" className="topbar-logo">
          <img className="topbar-logo-img" src={logo} alt="so_icon" height="30px" />
        </NavLink>

        <ol className="topbar-options">
          <li className="topbar-options-li"><a href="/about">About</a></li>
          <li className="topbar-options-li"><a href="/questions">Questions</a></li>
          <li className="topbar-options-li"><a href="teams.com">For Teams</a></li>
        </ol>

        <form action="/search" className="topbar-form" >
          <input type="text" placeholder="Search..." maxLength="240" className="topbar-search" />
          <img src={lupa} alt="lupa" className="topbar-lupa" />
        </form>

        {sessionLinks}

      </div>

    </>
  );
}

export default Navigation;
