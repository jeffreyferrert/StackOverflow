import "./Styles/EditItem.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchQuestion, getQuestion, updateQuestion } from "../../store/questions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
function EditItem() {

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const {questionId} = useParams();

    const question = useSelector(getQuestion(questionId));

    useEffect(() => {
        if (!question) {
          dispatch(fetchQuestion(questionId));
        } else {
          setTitle(question.title);
          setBody(question.body);
        }
      }, [dispatch, question, questionId]);
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      dispatch(updateQuestion({ id: questionId, title, body, user_id: sessionUser.id }))
      .then(() =>  history.push(`/questions/${questionId}`))
    };


  return (
    <div className="qfe-main-container">
      <div className="qfe-notice">
        <h1>Edit your question</h1>
        
      </div>
      {/* #####################################3 */}
      <form onSubmit={handleSubmit}>
        <div className="qfe-post-title">
          <h4>Title</h4>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            name="title"
            id="title"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          />
        </div>

        <div className="qfe-post-body">
          <h4>What are the details of your problem?</h4>
          <p>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </p>
          <textarea
            name="body"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <div className="qfe-post-tags">
          <h4>Tags</h4>
          <p>
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions.
          </p>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="e.g. (string vba reactjs)"
          />
        </div>

        <button type="submit" className="qfe-review">
          Post your changes
        </button>
      </form>

      {/* #####################################3 */}
    </div>
  );
}

export default EditItem;
