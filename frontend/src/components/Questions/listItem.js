import "./Styles/ListItem.css";
import photo from "../assets/stackoverflow_icon.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${month} ${day} at ${hour}:${minute}`;
  };

function ListItem({ question }) {

  return (
    <div className="li-container">
      <div className="li-container-left">
        <div className="li-c-vote">133 votes</div>
        <div className="li-c-answer">6 answers</div>
        <div className="li-c-views">206k views</div>
      </div>

      <div className="li-container-right">
        <div className="li-c-title">
          <Link to={`/questions/${question.id}`}>{question.title}</Link>
        </div>
        <div className="li-c-excerpt">{question.body}</div>

        <div className="li-c-content">
          <div className="li-c-meta">
            <ul>
              <li>c#</li>
              <li>sql</li>
              <li>asp.net-mvc</li>
              <li>enity-framework</li>
              <li>sql-update</li>
            </ul>
          </div>

          <div className="li-c-user">
            <img src={photo} alt="user_photo" className="li-c-photo" />
            <div className="li-c-username">
              {" "}
              <a href="#.com">j.ferrertorres</a>{" "}
            </div>
            <span />
            <div className="li-c-lastmodified">
              {"answered " + formatDate(question.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
