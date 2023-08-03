import './Styles/Questions.css'
import LeftSideBar from "../SideBars/leftSideBar";
import ListItems from './listItems';
import RightSideBar from '../SideBars/rightSideBar';
import { useState } from "react";
import { useEffect } from "react";

function Questions() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="q-main-container">
            {/* <LeftSideBar /> */}
            <ListItems />
            {/* <RightSideBar /> */}
            {/* <RightSideBar className={windowWidth < 500 ? 'hide' : ''}/> */}
        </div>
    );
};

export default Questions;