import "./Styles/ShowItem.css";
import photo from "../assets/stackoverflow_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  deleteQuestion,
  fetchQuestion,
  getQuestion,
} from "../../store/questions";
import { useEffect } from "react";
import LeftSideBar from "./leftSideBar";
import RigthSideBar from "./rightSideBar";
import { useHistory } from "react-router-dom";

function ShowItem() {
  const sessionUser = useSelector((state) => state.session.user);
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

  const questionId = useParams().questionId;
  const dispatch = useDispatch();
  const question = useSelector(getQuestion(questionId));
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchQuestion(questionId));
  }, [questionId]);

  const handleDelete = () => {
    dispatch(deleteQuestion(questionId));
    history.push("/questions");
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
    <div className="sq-main-container">
      <LeftSideBar />
      {question && (
        <div className="sq-content">
          <div className="sq-headline">
            <div className="sq-headline-top">
              <p>{question.title}</p>
              <Link to="/questions/ask">
                <button>Ask Question</button>
              </Link>{" "}
            </div>

            <div className="sq-headline-bottom">
              <ul>
                <li>
                  <span>Asked</span>
                  {formatDate(question.createdAt)}
                </li>
                <li>
                  <span>Modified</span>
                  {formatDate(question.updatedAt)}
                </li>
                <li>
                  <span>View</span>5 times
                </li>
              </ul>
            </div>
          </div>
          <hr />

          <div className="sq-post-layout">
            <div className="sq-post-left-container">
              <div className="sq-post-left-container-top">
                <div className="sq-votecell">
                  <button className="">
                    <i
                      class="fa-solid fa-caret-up"
                      size="lg"
                      style={{ color: "#74777b" }}
                    />
                  </button>
                  0
                  <button className="">
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
                      {sessionUser && (
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
                      <span>Asked</span>
                      {formatDate(question.createdAt)}
                      <div className="sq-sub-owner">
                        <img
                          src={photo}
                          alt="user_photo"
                          className="sq-c-photo"
                        />
                        <a href="#">{question.author}</a>
                      </div>
                    </div>
                  </div>
                  <div className="sq-add-comment">{addCommentsConditional}</div>
                </div>
              </div>

              <div className="sq-post-left-container-bottom">
                <div className="sq-relatedq">
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
                <div className="sq-answer">
                  <p>Your Answer</p>

                  <div className="sq-answer-box">
                    <textarea></textarea>
                  </div>
                </div>
              </div>
            </div>

            <RigthSideBar />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowItem;
