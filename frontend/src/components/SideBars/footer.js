import "./footer.css";
import logo from "../assets/stackoverflow_icon.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="f-content">
        <img className="f-logo-img" src={logo} alt="so_icon" />

        <div className="f-c1">
          <span>STACK OVERFLOW</span>
          <ul>
            <li><a href="/questions#top-of-landing-page">Questions</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/help">Help</a></li>
          </ul>
        </div>

        <div className="f-c1">
          <span>PRODUCTS</span>
          <ul>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.co/teams/">Teams</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.co/advertising/">Advertising</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.co/collectives/">Collectives</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.co/talent/">Talent</a></li>
          </ul>
        </div>

        <div className="f-c1">
          <span>COMPANY</span>
          <ul>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.co/">About</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.co/company/press">Press</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.co/company/work-here/">Work Here</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/legal/terms-of-service">Legal</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/legal/privacy-policy">Privacy Policy</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/legal/terms-of-service">Terms of Service</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.co/company/contact/">Contact Us</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/legal/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>

        <div className="f-c1">
          <span>STACK EXCHANGE NETWORK</span>
          <ul>
            <li><a target="_blank" rel="noreferrer" href="https://stackexchange.com/sites#technology">Technology</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackexchange.com/sites#culturerecreation">Culture & recreation</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackexchange.com/sites#lifearts">Life & arts</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackexchange.com/sites#science">Science</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackexchange.com/sites#professional">Professional</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://stackexchange.com/sites#business">Business</a></li>
            <br />
            <li><a target="_blank" rel="noreferrer" href="https://api.stackexchange.com/">API</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://data.stackexchange.com/">Data</a></li>
          </ul>
        </div>

        <div className="f-c1 extra extra3">
          <span className="extra extra2">
            <a target="_blank" rel="noreferrer" href="https://stackoverflow.blog/?blb=1&_ga=2.97327903.1232800521.1692495230-1688167756.1682966259">Blog</a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/officialstackoverflow/">Facebook</a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/stackoverflow">Twitter</a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/stack-overflow/">Linkedin</a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/thestackoverflow/">Instagram</a>
          </span>
          <br />
          <span className="extra">Site design / logo © 2023 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2023.7.27.43548</span>
        </div>

      </div>
    </div>
  );
}

export default Footer;
