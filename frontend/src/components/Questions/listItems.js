import ListItem from "./listItem";
import "./Styles/ListItems.css"

function ListItems() {
    return (
        <div className="lis-main-container">

            <div className='lis-header-container'>

                <div className="lis-headline">
                    <p>All Questions</p>
                    <button>Ask Question</button>
                </div>

                <div className="lis-headline2">
                    <div className="lis-headline2-a">
                        23,819,276 questions
                    </div>
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
                            <i class="fa-solid fa-caret-down" size="lg" style={{ color: "#39739d", }} />
                            <span />
                            Filter
                        </button>

                    </div>

                </div>
                <hr />
            </div>

            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />

        </div>

    );
};

export default ListItems;