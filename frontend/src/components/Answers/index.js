import "./Answers.css"
import AnswerItem from "./answerItem";
function AnswersList() {

    return (
        <div className="ans-main-container">
            <h3>3 Answers</h3>
            <AnswerItem/>
            <AnswerItem/>
            <AnswerItem/>
            
        </div>
    )
}
export default AnswersList;