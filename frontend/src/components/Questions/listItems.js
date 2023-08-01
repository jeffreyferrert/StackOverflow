import { useDispatch, useSelector } from "react-redux";
import ListItem from "./listItem";
import "./Styles/ListItems.css";
import { fetchQuestions, getQuestions } from "../../store/questions";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ListItems() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const questions = useSelector(getQuestions);
  const history = useHistory();
  // const [input, setInput] = useState('')

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(fetchQuestions(input));
  // }

  const handleQuestionAsk = () => {
    if (sessionUser) {
      history.push("/questions/ask");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="lis-main-container">
      <div className="lis-header-container">
        <div className="lis-headline">
          {/* // #############################################################3 */}

          {/* <>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="search for something"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </> */}

          {/* // #############################################################3 */}

          <p>All Questions</p>
          <button onClick={handleQuestionAsk}>Ask Question</button>
        </div>

        <div className="lis-headline2">
          <div className="lis-headline2-a">{questions.length} questions</div>
          <div className="lis-headline2-b">
            <ul>
              <li className="lis-h-b1">Newest</li>
              <li>Active</li>
              <li>Bountied</li>
              <li>Unanswered</li>
              <li className="lis-h-b2">
                More
                <span />
                <i class="fa-solid fa-caret-down" size="lg" />
              </li>
            </ul>

            <button>
              <i
                class="fa-solid fa-caret-down"
                size="lg"
                style={{ color: "#39739d" }}
              />
              <span />
              Filter
            </button>
          </div>
        </div>
        {/* <hr /> */}
      </div>

      {questions &&
        questions.map((question) => (
          <ListItem key={question.id} question={question} />
        ))}
    </div>
  );
}

export default ListItems;
