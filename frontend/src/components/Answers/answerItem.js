import photo from "../assets/stackoverflow_icon.png";
import "./AnswerItem.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { deleteAnswer } from "../../store/answers";

function AnswerItem({ answer }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, []);

  const handleQuestionAsk = () => {
    if (sessionUser) {
      history.push("/questions/ask");
    } else {
      history.push("/login");
    }
  };

  const handleDelete = () => {
    dispatch(deleteAnswer(answer.id));
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
          0
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
            <p>{answer.body}</p>
          </div>

          <div className="ansi-post-menu">
            <div className="ansi-actions">
              {sessionUser && sessionUser.id === answer.userId && (
                <>
                  {/* edit directly there */}
                  <span>Edit</span>

                  <button onClick={handleDelete}>
                    <span>Delete</span>
                  </button>
                </>
              )}
            </div>

            <div className="ansi-owner">
              <span>Asked</span>
              {formatDate(answer.createdAt)}
              <div className="ansi-sub-owner">
                <img src={photo} alt="user_photo" className="ansi-c-photo" />
                <a href="#">{answer.author}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerItem;
