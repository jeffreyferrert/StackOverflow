import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import ProfileButton from './ProfileButton';
import './Navigation.css';
import menu from "../assets/menu.png"
import lupa from "../assets/lupa.png"
import logo from "../assets/logo-stackoverflow.png"
import logoicon from "../assets/stackoverflow_icon.png"
import { fetchQuestions } from '../../store/questions';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const [input, setInput] = useState('')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    history.push(`/questions?search=${input}`);
    setInput('');
  }

  return (
    <>
      <div id="topbar-container">
        <NavLink exact to="/" className="topbar-logo">
          <img className="topbar-logo-img" src={windowWidth <= 500 ? logoicon : logo} alt="so_icon" height="30px" />
        </NavLink>

        <ol className="topbar-options">
          <li className="topbar-options-li">
            <a href="/questions">Questions</a>
          </li>
          <li className="topbar-options-li {windowWidth < 500 ? hide : ''}">
            <a href="https://www.linkedin.com/in/jferrertorres/" target="_blank" rel="noreferrer">
              <i class="fa-brands fa-linkedin fa-lg"></i><span />
              Linkedin
            </a>
          </li>
          <li className="topbar-options-li {windowWidth < 500 ? hide : ''}">
            <a href="https://github.com/jeffreyferrert" target="_blank" rel="noreferrer">
              <i class="fa-brands fa-github fa-lg"></i><span />Github
            </a>
          </li>
        </ol>

        <form onSubmit={handleSubmit} className="topbar-form {windowWidth < 500 ? hide : ''}" >
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
