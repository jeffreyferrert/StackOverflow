import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Styles/QuestionForm.css";
import { useState } from "react";
import { createQuestion } from "../../store/questions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function QuestionForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const questionId = useParams().questionId;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createQuestion({ title, body, user_id: sessionUser.id })).then(
      (createdQuestion) => {
        history.push(`/questions/${createdQuestion.id}`);
      }
    );
  };

  return (
    <div className="qf-main-container">
      <div className="qf-notice">
        <h1>Ask a public question</h1>
        <div className="qf-message">
          <h2>Writing a good question</h2>
          <p>
            You’re ready to ask a programming-related question and this form
            will help guide you through the process.<br /> Looking to ask a
            non-programming question? See the topics here to find a relevant
            site.
          </p>
          <h4>Steps</h4>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>
      </div>
      {/* #####################################3 */}
      <form onSubmit={handleSubmit}>
        <div className="qf-post-title">
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

        <div className="qf-post-body">
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

        <div className="qf-post-tags">
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

        <button type="submit" className="qf-review">
          Post your question
        </button>
      </form>

      {/* #####################################3 */}
    </div>
  );
}

export default QuestionForm;
