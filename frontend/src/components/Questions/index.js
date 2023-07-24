import './Styles/Questions.css'
import LeftSideBar from "./leftSideBar";
import ListItems from './listItems';
import RigthSideBar from './rightSideBar';

function Questions() {
    return (
        <div className="q-main-container">
            <LeftSideBar />
            <ListItems />
            <RigthSideBar />
        </div>
    );
};

export default Questions;