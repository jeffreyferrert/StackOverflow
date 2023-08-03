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

  if (sessionUser) return <Redirect to="/questions" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text(); 
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const demoUser = (e) => {
    e.preventDefault();
    const demoUsername = "jferrertorres";
    const demoPassword = "password";
    dispatch(sessionActions.login({ credential: demoUsername, password: demoPassword }));
  };

  return (
    <div className="li-main-container">

      <img className="li-icon" src={temp} alt="so_icon" />
    <div className="li-form-container">

      <form onSubmit={handleSubmit} >

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

      </form>
      <button onClick={demoUser} className="li-login">Demo User</button>
    </div>

      <div className="redirect-su">
        Don’t have an account?
        <Link to="signup" className="link"> Sign up</Link>
      </div>
    </div>
  );
}

export default LoginFormPage;