import { useDispatch, useSelector } from "react-redux";
import ListItem from "./listItem";
import "./Styles/ListItems.css";
import { fetchQuestions, getQuestions } from "../../store/questions";
import { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ListItems() {
  const dispatch = useDispatch();
  const questions = useSelector(getQuestions);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <div className="lis-main-container">
      <div className="lis-header-container">
        <div className="lis-headline">
          <p>All Questions</p>
          <Link to ="/questions/ask">
          <button >Ask Question</button>
          </Link>
        </div>

        <div className="lis-headline2">
          <div className="lis-headline2-a">23,819,276 questions</div>
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
        <hr />
      </div>

      {questions &&
        questions.map((question) => (
          <ListItem key={question.id} question={question} />
        ))}
    </div>
  );
}

export default ListItems;
