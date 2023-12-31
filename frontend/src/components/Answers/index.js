import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createAnswer, fetchAnswers, getAnswers } from "../../store/answers";
import AnswerItem from "./answerItem";
import "./Answers.css";

function AnswersList({question}) {
  const sessionUser = useSelector((state) => state.session.user);
  const { questionId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const answers = useSelector(getAnswers);
  const [body, setBody] = useState("");
 

  useEffect(() => {
    dispatch(fetchAnswers());
  }, [dispatch]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (sessionUser) {
      dispatch(
        createAnswer({ body, user_id: sessionUser.id, question_id: questionId }),
        setBody("")
      );
    } else {
      history.push("/login");
    }

  };

  return (
    <div className="ans-main-container">
      <h3 className="ans-main-h3">{answers.filter((answer) => answer.questionId === parseInt(questionId)).length} Answers</h3>
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
