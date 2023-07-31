import "./footer.css";
import logo from "../assets/stackoverflow_icon.png";

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="f-content">
        <img className="f-logo-img" src={logo} alt="so_icon" />

        <div className="f-c1">
          <span>STACK OVERFLOW</span>
          <ul>
            <li>Questions</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="f-c1">
          <span>PRODUCTS</span>
          <ul>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
        </div>

        <div className="f-c1">
          <span>COMPANY</span>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="f-c1">
          <span>STACK EXCHANGE NETWORK</span>
          <ul>
            <li>Technology</li>
            <li>Culture & recreation</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <br />
            <li>API</li>
            <li>Data</li>
          </ul>
        </div>

        <div className="f-c1 extra">
          <span className="extra extra2">Blog Facebook Twitter Linkedin Instagram</span>
          <br />
          <span className="extra">Site design / logo © 2023 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2023.7.27.43548</span>
        </div>
    
      </div>
    </div>
  );
}

export default Footer;
