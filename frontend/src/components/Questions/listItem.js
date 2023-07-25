import "./Styles/ListItem.css"
import photo from "../assets/stackoverflow_icon.png"

function ListItem() {
    return (

        <div className="li-container">

            <div className='li-container-left'>
                <div className='li-c-vote'>133 votes</div>
                <div className='li-c-answer'>6 answers</div>
                <div className='li-c-views'>206k views</div>
            </div>

            <div className='li-container-right'>
                <div className='li-c-title'>Update multiple rows in Entity Framework from a list of ids</div>
                <div className='li-c-excerpt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <div className='li-c-content'>
                    <div className='li-c-meta'>
                        <ul>
                            <li>c#</li>
                            <li>sql</li>
                            <li>asp.net-mvc</li>
                            <li>enity-framework</li>
                            <li>sql-update</li>
                        </ul>
                    </div>
                    <div className='li-c-user'>
                        <img src={photo} alt='user_photo' className="li-c-photo"/>
                        <div className='li-c-username'>
                            <a href='#.com'>j.ferrertorres</a>
                        </div>
                        <span />
                        <div className='li-c-lastmodified'>answered Jul 7 at 18:19</div>
                    </div>
                </div>
            </div>

            {/* <hr /> */}
        </div>

    )
}

export default ListItem;