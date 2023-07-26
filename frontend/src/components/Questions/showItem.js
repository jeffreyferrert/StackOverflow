import "./Styles/ShowItem.css";
import photo from "../assets/stackoverflow_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchQuestion, getQuestion } from "../../store/questions";
import { useEffect } from "react";
import LeftSideBar from "./leftSideBar";
import RigthSideBar from "./rightSideBar";

function ShowItem() {
  const questionId = useParams().questionId;
  const dispatch = useDispatch();
  const question = useSelector(getQuestion(questionId));

  useEffect(() => {
    dispatch(fetchQuestion(questionId));
  }, [questionId]);

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
              <button>Ask Question</button>
            </div>

            <div className="sq-headline-bottom">
              <ul>
                <li>
                  <span>Asked</span>{formatDate(question.createdAt)}
                </li>
                <li>
                  <span>Modified</span>{formatDate(question.updatedAt)}
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
                  </div>

                  <div className="sq-owner">
                  <span>Asked</span>{formatDate(question.createdAt)}
                  <div className="sq-sub-owner">

                    <img src={photo} alt="user_photo" className="sq-c-photo" />
                    <a href="#.com">j.ferrertorres</a>
                    </div>
                  </div>
                </div>

                {/* <div>[WIP]ADDCOMMENTS</div> */}
                <div className="sq-relatedq">
                  <ul>
                    <li>Q1</li>
                    <li>Q2</li>
                    <li>Q3</li>
                  </ul>
                </div>
                Browse other questions tagged ...
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
