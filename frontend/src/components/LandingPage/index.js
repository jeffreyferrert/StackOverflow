import "./Landing.css";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo-stackoverflow.png";
import logo1 from "../assets/img1.svg";
import logo2 from "../assets/img2.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import intercom from "../assets/intercom.png";
import expensify from "../assets/expensify.png";
import instacart from "../assets/instacart.png";

function Landing() {
  const [wordChanging, setwordChanging] = useState("developer");
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

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const arrWords = [
    "developer",
    "data scientist",
    "system admin",
    "mobile developer",
    "game developer",
  ];

  setTimeout(() => {
    setwordChanging(arrWords[randomIntFromInterval(0, 4)]);
  }, 3000);

  return (
    <div className="main-container">
      <div className="container">
        <div className="container-bg">

        </div>
        <div className="container-p1 container-fg">
          <div className="container-p1-a">
            <i
              class="fa-solid fa-magnifying-glass fa-3x"
              style={{ color: "#f2740d" }}
            />
            <span>
              Find the best answer to your technical question, help others
              answer theirs
            </span>
            <br />

            <button className="btn-p1-a">
              <Link to="/signup">
                Join the community
              </Link>
            </button>
            <br />
            <div className="pre-search-content">
              or
              <Link to="/questions" className="search-content">
                {" "}
                search content
              </Link>
            </div>
          </div>

          <div className="container-p1-b">
            <i class="fa-solid fa-lock fa-3x" style={{ color: "#0a95ff" }} />
            <span>
              Want a secure, private space for your technical knowledge?
            </span>
            <br />
            <button className="btn-p1-b">
              <a href="https://stackoverflow.co/teams/">
                Discover Teams
              </a>
            </button>

          </div>
        </div>

        <div className="container-p2 container-fg">
          Every
          <span />
          {windowWidth <= 500 ? <br /> : ''}
          <span className="changing-text">{wordChanging}</span>
          {windowWidth <= 500 ? <br /> : ''}
          <span />
          has a
          {windowWidth <= 500 ? '' : <br />}
          <span />
          tab open to
          {windowWidth <= 500 ? <br /> : ''}
          Stack Overflow
        </div>

        <div className="container-p3 container-fg">
          <div className="big-container">
            100+ million
            <div className="small-container">
              monthly visitors to Stack Overflow & Stack Exchange
            </div>
          </div>
          <div className="big-container">
            45.1+ billion
            <div className="small-container">
              Times a developer got help since 2008
            </div>
          </div>

          <div className="big-container">
            191% ROI
            <div className="small-container">
              from companies using Stack Overflow for Teams
            </div>
          </div>

          <div className="big-container">
            5,000+
            <div className="small-container">
              Stack Overflow for Teams instances active every day
            </div>
          </div>
        </div>

        <div className="container-p4 container-fg">
          <div className="container-p4-a">
            <img className="logo-img" src={logo} alt="so_icon" />
            <img className="other-img" src={logo1} alt="so_icon" />
            <div className="big-text">
              A public platform building the definitive collection of coding
              questions & answers
            </div>
            <div className="small-text">
              A community-based space to find and contribute answers to
              technical challenges, and one of the most popular websites in the
              world.
            </div>
            <button className="btn-p1-a">
              <Link to="/signup">
                Join the community
              </Link>
            </button>
            <br />
            <div className="pre-search-content">
              <Link to="/questions" className="search-content">
                {" "}
                search content
              </Link>
            </div>
          </div>

          <div className="container-p4-b">
            <img className="logo-img" src={logo} alt="so_icon" />
            <img className="other-img" src={logo2} alt="so_icon" />
            <div className="big-text">
              A private collaboration & knowledge sharing SaaS platform for
              companies
            </div>
            <div className="small-text">
              A web-based platform to increase productivity, decrease cycle
              times, accelerate time to market, and protect institutional
              knowledge.
            </div>
            <div className="g-btn">
              <button className="btn-p1-b">
                <a href="https://try.stackoverflow.co/explore-teams">
                  For Large organizations
                </a>
              </button>
              <button className="btn-p1-b">
                <a href="https://stackoverflow.co/teams/">
                  For small teams
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="container-p5 container-fg">
          <p>
            Thousands of organizations around the globe use Stack Overflow for
            Teams
          </p>
          <div className="carrousel">
            <img className="logo-img" src={intercom} alt="so_icon" />
            <img className="logo-img" src={expensify} alt="so_icon" />
            <img className="logo-img" src={instacart} alt="so_icon" />
          </div>
        </div>

        <div className="container-p6 container-fg">
          <div className="cp6-1">
            <i
              class="fa-solid fa-quote-right fa-3x"
              style={{ color: "#CDE9FE" }}
            />
            <p>
              Stack Overflow for Teams has been a resource for our entire
              company. Not only for developers to solve problems, it’s also
              enabled our sales field to answer technical questions that help
              them close deals.
            </p>
            <h5>Director of Product Management</h5>
            <span>Microsoft</span>
          </div>

          <div className="cp6-1">
            <i
              class="fa-solid fa-quote-right fa-3x"
              style={{ color: "#CDE9FE" }}
            />
            <p>
              Engineers should help solve the hardest questions, the unknowns,
              where being familiar with how the product was built is essential.
              But we don’t want to keep answering solved problems over and over
              again. That’s where Stack Overflow for Teams really helps.
            </p>
            <h5>Director of Engineering</h5>
            <span>Elastic Cloud</span>
          </div>

          <div className="cp6-1">
            <i
              class="fa-solid fa-quote-right fa-3x"
              style={{ color: "#CDE9FE" }}
            />
            <p>
              As we started to use [Stack Overflow for Teams] and saw how nice
              it was to have a repository of information, we started to see it
              spread to other teams. Our customer support team started using it,
              our people success team started using it, next thing we knew, we
              had [Slack] integrations all over the place.
            </p>
            <h5>Engineering</h5>
            <span>Expensify</span>
          </div>

          <div className="cp6-1">
            <i
              class="fa-solid fa-quote-right fa-3x"
              style={{ color: "#CDE9FE" }}
            />
            <p>
              What we love about Stack Overflow for Teams is that it’s a very
              dynamic tool…there’s just so many ways to use this as a liaison
              between different teams and different knowledge bases.
            </p>
            <h5>Software Engineer</h5>
            <span>Box</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
