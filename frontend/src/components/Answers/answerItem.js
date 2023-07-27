import photo from "../assets/stackoverflow_icon.png";
import "./AnswerItem.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  deleteQuestion,
  fetchQuestion,
  getQuestion,
} from "../../store/questions";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function AnswerItem() {
  const sessionUser = useSelector((state) => state.session.user);
  const questionId = useParams().questionId;
  const dispatch = useDispatch();
  const question = useSelector(getQuestion(questionId));
  const history = useHistory();

  useEffect(() => {
    // dispatch(fetchQuestion(questionId));
  }, [questionId]);

  const handleDelete = () => {
    // dispatch(deleteQuestion(questionId));
    history.push("/questions");
  };

  const handleQuestionAsk = () => {
    if (sessionUser) {
      history.push("/questions/ask");
    } else {
      history.push("/login");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.toLocaleString("en-US", { day: "numeric" });
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    return `${month} ${day} at ${hour}:${minute}`;
  };

  return (
    <div className="ansi-main-container">
      <div className="ansi-post-left-container-top">
        <div className="ansi-votecell">
          <button className="">
            <i
              className="fa-solid fa-caret-up"
              size="2xl"
              style={{ color: "#74777b" }}
            />
          </button>
          141
          <button className="">
            <i
              className="fa-solid fa-caret-down"
              size="2xl"
              style={{ color: "#74777b" }}
            />
          </button>
        </div>

        <div className="ansi-post-body">
          <div className="ansi-post">
            <p>{question.body}</p>
          </div>

          <div className="ansi-post-menu">
            <div className="ansi-actions">
              {sessionUser && sessionUser.id === question.userId && (
                <>
                  <Link to={`/questions/${questionId}/edit`}>
                    <span>Edit</span>
                  </Link>
                  <button onClick={handleDelete}>
                    <span>Delete</span>
                  </button>
                </>
              )}
            </div>

            <div className="ansi-owner">
              <span>Asked</span>
              {formatDate(question.createdAt)}
              <div className="ansi-sub-owner">
                <img src={photo} alt="user_photo" className="ansi-c-photo" />
                <a href="#">{question.author}</a>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default AnswerItem;
