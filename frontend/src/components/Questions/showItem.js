import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchQuestion, getQuestion } from "../../store/questions";
import { useEffect } from "react";

function ShowItem() {
  const questionId = useParams().questionId;
  const dispatch = useDispatch();
  const question = useSelector(getQuestion(questionId));

  useEffect(() => {
    dispatch(fetchQuestion(questionId));
  }, [questionId]);

  return (
    <div>
      {question && (
        <div>
          <h1>QuestionId: {question.id}</h1>
          <h1>Title: {question.title}</h1>
          <h1>Body: {question.body}</h1>
          <h1>UserId: {question.userId}</h1>
          <h1>Created at:{question.createdAt}</h1>
          <h1>Updated at:{question.updatedAt}</h1>

        </div>
      )}
    </div>
  );
}

export default ShowItem;
