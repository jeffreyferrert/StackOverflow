import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';
import temp from "../assets/stackoverflow_icon.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return (
    <div className="li-main-container">

      <img className="li-icon" src={temp} alt="so_icon" />

      <form onSubmit={handleSubmit} className="li-form-container">

        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>

        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>

        <span></span><br />

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="li-login">Log In</button>
        <button type="submit" className="li-login">Demo User</button>

      </form>

      <div className="redirect-su">
        Don’t have an account? 
        <Link to="signup" className="link"> Sign up</Link>
      </div>
    </div>
  );
}

export default LoginFormPage;