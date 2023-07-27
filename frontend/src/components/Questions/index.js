import './Styles/Questions.css'
import LeftSideBar from "../SideBars/leftSideBar";
import ListItems from './listItems';
import RightSideBar from '../SideBars/rightSideBar';

function Questions() {
    return (
        <div className="q-main-container">
            <LeftSideBar />
            <ListItems />
            <RightSideBar />
        </div>
    );
};

export default Questions;