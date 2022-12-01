import "./SideBar.css";
import Nav from 'react-bootstrap/Nav';

const SideBar = (props) => {
    // ****************************************************************
    // const handleAlbumTypesChange = props.handleAlbumTypesChange;
    const handleExplicityChange = props.handleExplicityChange;
    const handleDisplayTypeChange = props.handleDisplayTypeChange;

    // TO-DO:
    // 1. separate filter buttons and sort buttons into child components?
    // 2. material UI or bootstrap nav bar or checkbox? seems like nav bar cannot allow filters to stack on top of one another
    // checkbox example: https://edstem.org/us/courses/26929/discussion/2225189
    // 3. we might need to change our filtering function back in App due to stacking filters

    return (
        <div>
            <h3>Album Type</h3>
            {/* ****************************************************** */}

            {/* <div>
                Two checkboxes, each has a value, onclick executes callback that changes state of parent
                <label>
                    <input type="checkbox" onChange={(event) => {handleAlbumTypesChange(event.target.value, event.target.checked); console.log(event.target.value, event.target.checked)}} value={"single"}/>
                    Single
                </label>
                <label>
                    <input type="checkbox" onChange={(event) => {handleAlbumTypesChange(event.target.value, event.target.checked); console.log(event.target.value, event.target.checked)}} value={"album"}/>
                    Album
                </label>
            </div> */}
            {/* ****************************************************** */}

            <div>
                <h3>Lyrics</h3>
                <Nav onSelect={handleExplicityChange}>
                    <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Explicit">Explicit</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Non-Explicit">Non-Explicit</Nav.Link></Nav.Item>
                </Nav>
            </div>
            <div>
                <h3>Playlist</h3>
                <label>
                    <input type="checkbox" onChange={(event) => {handleDisplayTypeChange(event.target.checked)}}/>
                    In My Playlist
                </label>
            </div>
        </div>
    )
}

export default SideBar;