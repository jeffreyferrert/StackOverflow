import "./Answers.css";
import AnswerItem from "./answerItem";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { useState } from "react";
import { createAnswer, fetchAnswers, getAnswers } from "../../store/answers";
import { useEffect } from "react";

function AnswersList() {
  const sessionUser = useSelector((state) => state.session.user);
  const { questionId } = useParams();

  const dispatch = useDispatch();
  const [body, setBody] = useState("");

  const answers = useSelector(getAnswers);

  useEffect(() => {
    dispatch(fetchAnswers());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createAnswer({ body, user_id: sessionUser.id, question_id: questionId })
    );
  };

  return (
    <div className="ans-main-container">
      <h3>{answers.length} Answers</h3>      {/* fix this */}
      {answers.map(
        (answer) =>
          answer.questionId === parseInt(questionId) && (
            <AnswerItem key={answer.id} answer={answer} />
          )
      )}

      <div className="ans-form"></div>

      <form onSubmit={handleSubmit}>
        <div className="ans-body">
          <p>Your Answer</p>
          <textarea
            name="body"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="qf-review">
          Post your Answer
        </button>
      </form>
    </div>
  );
}
export default AnswersList;
