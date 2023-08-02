import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import menu from "../assets/menu.png"
import lupa from "../assets/lupa.png"
import logo from "../assets/logo-stackoverflow.png"
import { fetchQuestions } from '../../store/questions';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [input, setInput] = useState('')
  const dispatch = useDispatch();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchQuestions(input));
  }

  return (
    <>
      <div id="topbar-container">

        <nav className="topbar-menu">
          {/* <img className="topbar-menu-img" src={menu} alt="" /> */}
        </nav>

        <NavLink exact to="/" className="topbar-logo">
          <img className="topbar-logo-img" src={logo} alt="so_icon" height="30px" />
        </NavLink>

        <ol className="topbar-options">
          <li className="topbar-options-li"><a href="/about">About</a></li>
          <li className="topbar-options-li"><a href="/questions">Questions</a></li>
          <li className="topbar-options-li"><a href="teams.com">For Teams</a></li>
        </ol>

        <form onClick={handleSubmit} className="topbar-form" >
          <input
            type="text"
            placeholder="Search..."
            maxLength="240"
            className="topbar-search"
            value={input}
            onChange={(e) => setInput(e.target.value)} />
          <img src={lupa} alt="lupa" className="topbar-lupa" />
          <button type='submit' hidden />
        </form>

        {sessionLinks}

      </div>

    </>
  );
}

export default Navigation;
