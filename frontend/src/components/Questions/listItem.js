import "./Styles/ListItem.css";
import photo from "../assets/stackoverflow_icon.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  return `${month} ${day} at ${hour}:${minute}`;
};

function ListItem({ question }) {
  return (
    <div className="li-container">
      <div className="li-container-left">
        <div className="li-c-vote">{question.votesCounts} votes</div>
        <div className={question.answerCount > 0 ? 'li-c-answer' : ''}>{question.answerCount} answers</div>
        <div className="li-c-views">206 views</div>
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
            <img src={`https://ui-avatars.com/api/?name=${question.author}&background=random&format=png`} alt="user_photo" className="li-c-photo" />
            <span />
            <div className="li-c-username">{question.author}</div>
            <span />
            <div className="li-c-lastmodified">
              <span>{question.createdAt !== question.updatedAt ? "Modified" : "Asked"}</span>
              {formatDate(question.updatedAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
