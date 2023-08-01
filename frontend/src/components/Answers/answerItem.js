import photo from "../assets/stackoverflow_icon.png";
import "./AnswerItem.css";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { deleteAnswer, updateAnswer } from "../../store/answers";

function AnswerItem({ answer }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [body, setBody] = useState(answer.body);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    dispatch(updateAnswer({ id: answer.id, body }));
    setIsEditing(false);
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
            {isEditing ? (
              <textarea
                name="body"
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            ) : (
              <p>{answer.body}</p>
            )}
          </div>

          <div className="ansi-post-menu">
            <div className="ansi-actions">
              {sessionUser && sessionUser.id === answer.userId && (
                <>
                  <button onClick={toggleEdit}>
                    <span>{isEditing ? "Cancel" : "Edit"}</span>
                  </button>
                  {isEditing && (
                    <button onClick={handleSaveEdit}>
                      <span>Save</span>
                    </button>
                  )}
                  <button onClick={handleDelete}>
                    <span>Delete</span>
                  </button>
                </>
              )}
            </div>

            <div className="ansi-owner">
              <span>{answer.createdAt !== answer.updatedAt ? "Modified" : "Asked"}</span>
              {formatDate(answer.updatedAt)}
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