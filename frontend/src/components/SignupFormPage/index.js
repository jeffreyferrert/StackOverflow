import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
// import './SignupForm.css';
import './SignupForm.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import temp from "../assets/stackoverflow_icon.png"


function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
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
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="su-main-container">

      <div className="su-info">
        <h1>Join the Stack Overflow <br/>community</h1>
        <ul>
          <li>
            <img className="su-icon" src={temp} alt="so_icon" />
            Get unstuck — ask a question
          </li>
          <li>
            <img className="su-icon" src={temp} alt="so_icon" />
            Unlock new privileges like voting and commenting
          </li>
          <li>
            <img className="su-icon"  src={temp} alt="so_icon" />
            Save your favorite questions, answers, watch tags, and more
          </li>
          <li>
            <img className="su-icon" src={temp} alt="so_icon" />
            Earn reputation and badges
          </li>
        </ul>
        <span>
          Collaborate and share knowledge with a private group for FREE.
          <br />
          <a href="#" >
            Get Stack Overflow for Teams free for up to 50 users.
          </a>
        </span>
      </div>

      <div className="right-panel">

        <form onSubmit={handleSubmit} className="su-form">
          <ul>
            {errors.map((error) => <li key={error}>{error}</li>)}
          </ul>

          <div className="su-form-container">
            <label>
              Display name
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>

            <label>
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <label>
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>

            <span>
              Passwords must contain at least eight characters, including at least 1 letter and 1 number.
            </span>

            <button type="submit" className="su-signup">Sign Up</button>

            <span className="su-message">
              By clicking “Sign up”, you agree to our terms of service and acknowledge that you have read and understand our privacy policy and code of conduct.
            </span>

          </div>

        </form>

        <div className="redirect-su">
        Already have an account?
        <Link to="login" className="link"> Log in</Link>
      </div>

      </div>


    </div>
  );
}

export default SignupFormPage;