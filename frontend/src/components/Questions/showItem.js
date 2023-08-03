import "./Styles/ShowItem.css";
import photo from "../assets/stackoverflow_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  deleteQuestion,
  fetchQuestion,
  getQuestion,
  updateQuestion,
} from "../../store/questions";
import { useEffect } from "react";
import LeftSideBar from "../SideBars/leftSideBar";
import RightSideBar from "../SideBars/rightSideBar";
import { useHistory } from "react-router-dom";
import AnswersList from "../Answers";

function ShowItem() {
  const sessionUser = useSelector((state) => state.session.user);
  const questionId = useParams().questionId;
  const dispatch = useDispatch();
  const question = useSelector(getQuestion(questionId));
  const history = useHistory();

  let addCommentsConditional;
  if (sessionUser) {
    addCommentsConditional = (
      <>
        <span>Add a comment {sessionUser.username}</span>
      </>
    );
  } else {
    addCommentsConditional = (
      <>
        <Link to="/login">
          <span>Add a comment</span>
        </Link>
      </>
    );
  }

  useEffect(() => {
    dispatch(fetchQuestion(questionId));
  }, [questionId]);

  const handleDelete = () => {
    dispatch(deleteQuestion(questionId));
    history.push("/questions");
  };

  const handleQuestionAsk = () => {
    if (sessionUser) {
      history.push("/questions/ask");
    } else {
      history.push("/login");
    }
  };

  const handleVote = (vote) => {
    let newVoteCount;
    if (vote === "up") {
      newVoteCount = question.votesCounts + 1
    } else {
      newVoteCount = question.votesCounts - 1
    }
    dispatch(updateQuestion({ id: questionId, votesCounts: newVoteCount }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.toLocaleString("en-US", { day: "numeric" });
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    return `${month} ${day} at ${hour}:${minute}`;
  };

  const shortDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "today";
    } else {
      return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
    }
  };

  return (
    <div className="sq-main-container">
      <LeftSideBar />
      {question && (
        <div className="sq-content">
          <div className="sq-headline">
            <div className="sq-headline-top">
              <p>{question.title}</p>
              <button onClick={handleQuestionAsk}>Ask Question</button>
            </div>

            <div className="sq-headline-bottom">
              <ul>
                <li>
                  <span>Asked</span>
                  {shortDate(question.createdAt)}
                </li>
                <li>
                  <span>Modified</span>
                  {shortDate(question.updatedAt)}
                </li>
                <li>
                  <span>View</span>5 times
                </li>
              </ul>
            </div>
          </div>

          <div className="sq-post-layout">
            <div className="sq-post-left-container">
              <div className="sq-post-left-container-top">
                <div className="sq-votecell">
                  <button className="" onClick={() => handleVote("up")}>
                    <i
                      class="fa-solid fa-caret-up"
                      size="lg"
                      style={{ color: "#74777b" }}
                    />
                  </button>
                  {question.votesCounts}
                  <button className="" onClick={() => handleVote("down")}>
                    <i
                      class="fa-solid fa-caret-down"
                      size="lg"
                      style={{ color: "#74777b" }}
                    />
                  </button>
                </div>

                <div className="sq-post-body">
                  <div className="sq-post">
                    <p>{question.body}</p>
                  </div>
                  <div className="sq-post-taglist">
                    <ul>
                      <li>c#</li>
                      <li>sql</li>
                      <li>asp.net-mvc</li>
                      <li>enity-framework</li>
                      <li>sql-update</li>
                    </ul>
                  </div>

                  <div className="sq-post-menu">
                    <div className="sq-actions">
                      <span>Share</span>
                      <span>Follow</span>
                      {sessionUser && sessionUser.id === question.userId && (
                        <>
                          <Link to={`/questions/${questionId}/edit`}>
                            <span>Edit</span>
                          </Link>
                          <button onClick={handleDelete}>
                            <span>Delete</span>
                          </button>
                        </>
                      )}
                    </div>

                    <div className="sq-owner">
                      <span>
                        {question.createdAt !== question.updatedAt
                          ? "Modified"
                          : "Asked"}
                      </span>
                      {formatDate(question.updatedAt)}
                      <div className="sq-sub-owner">
                        <img
                          src={`https://ui-avatars.com/api/?name=${question.author}&background=random&format=png`}
                          alt="user_photo"
                          className="sq-c-photo" />
                        <a href="#">{question.author}</a>
                      </div>
                    </div>
                  </div>

                  <div className="sq-add-comment">{addCommentsConditional}</div>
                </div>
              </div>

              <div className="sq-post-left-container-bottom">
                <AnswersList question={question} />

                <div className="sq-relatedq">
                  {/* MAKE THIS RANDOM */}
                  <p>Related questions</p>
                  <ul>
                    <li>
                      If we index the array, we can get to the JSON array
                      through the optical JBOD monitor!
                    </li>
                    <li>
                      I'll input the primary USB interface, that should firewall
                      the SCSI protocol!
                    </li>
                    <li>
                      Indexing the alarm won't do anything, we need to connect
                      the virtual ssl matrix!
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <RightSideBar />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowItem;
