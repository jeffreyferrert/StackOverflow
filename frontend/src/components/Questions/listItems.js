import { useDispatch, useSelector } from "react-redux";
import ListItem from "./listItem";
import "./Styles/ListItems.css";
import { fetchQuestions, getQuestions } from "../../store/questions";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

function ListItems() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const questions = useSelector(getQuestions);
  const history = useHistory();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('search');



  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchQuestions(searchQuery));
    } else {
      dispatch(fetchQuestions());
    }
  }, [dispatch, searchQuery]);


  const handleQuestionAsk = () => {
    if (sessionUser) {
      history.push("/questions/ask");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="lis-main-container" id="top-of-landing-page">
      <div className="lis-header-container">
        <div className="lis-headline">
          <p>All Questions</p>
          <button onClick={handleQuestionAsk}>Ask Question</button>
        </div>

        <div className="lis-headline2">
          <div className="lis-headline2-a">{questions.length} questions</div>
          <div className="lis-headline2-b">
            <ul>
              <li className="lis-h-b1">Newest</li>
              <li>Active</li>
              <li className="{windowWidth < 500 ? hide : ''}">Bountied</li>
              <li className="{windowWidth < 500 ? hide : ''}">Unanswered</li>
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
