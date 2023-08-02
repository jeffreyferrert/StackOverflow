import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = (e) => {
    e.stopPropagation();
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const shortDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "today";
    } else {
      return `${diffDays} ${diffDays === 1 ? "day" : "days"}`;
    }
  };

  return (
    <>
      <button onClick={openMenu} className="main-button">
        {sessionUser.username[0].toUpperCase()}
      </button>
      {showMenu && (
        <div className="session-cont">

          <ul className="profile-dropdown" >
            <div className="prof-head">
              <h5>Account</h5>
              <button onClick={logout}>Log Out</button>
            </div>
            <div className="user-item">

              <i class="fa-solid fa-user" style={{ color: "#3b4045", }} />
              <li>Username: {user.username}</li>
            </div>
            <div className="user-item">
              <i class="fa-solid fa-envelope" style={{ color: "#3b4045", }} />
              <li>Email: {user.email}</li>
            </div>
            <div className="user-item">
              <i class="fa-solid fa-cake-candles" style={{ color: "#3b4045", }} />
              <li>Member for {shortDate(user.createdAt)}</li>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
