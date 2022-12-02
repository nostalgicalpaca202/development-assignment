import { ToggleButtonGroup, ToggleButton, Toolbar, Drawer, Box, Typography, Divider} from '@mui/material';
import { useState } from "react";


const SideBar = (props) => {
    const handleAlbumTypeChange = props.handleAlbumTypeChange;
    const handleExplicityChange = props.handleExplicityChange;
    const handleSortTypeChange = props.handleSortTypeChange;

    const [albumText, setAlbumText] = useState("All");
    const [explicityText, setExplicityText] = useState("All");
    const [sortText, setSortText] = useState("Most Popular");

    return (
        <Drawer
            sx={{
            width: 1/5,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 1/5,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left">
            <Toolbar />
            <Box component="div" sx={{display: "flex", flexDirection: "column", paddingLeft: 3}}>
            <div>
                <Typography variant="h5" component="div" sx={{ m: '1rem' }}>
                    Sort By
                </Typography>
                <ToggleButtonGroup value={sortText} exclusive onChange={(event, newValue) => {if (newValue !== null) {setSortText(newValue); handleSortTypeChange(newValue);}}} sx={{ mb: '1rem', mx: '1rem'}}
                >
                <ToggleButton value="Most Popular">
                    Most Popular
                </ToggleButton>
                <ToggleButton value="Alphabetical (A-Z)">
                    Alphabetical (A-Z)
                </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                <Typography variant="h5" component="div" sx={{ m: '1rem' }}>
                    Filters
                </Typography>
                <Typography variant="subtitle2" component="div" sx={{ mx: '1rem', my: '0.2rem'}}>
                    Album Type
                </Typography>
                <ToggleButtonGroup value={albumText} exclusive onChange={(event, newValue) => {if (newValue !== null) {setAlbumText(newValue); handleAlbumTypeChange(newValue);}}} sx={{ m: '1rem' }}
                >
                <ToggleButton value="All">
                    All
                </ToggleButton>
                <ToggleButton value="single">
                    Single
                </ToggleButton>
                <ToggleButton value="album">
                    Album
                </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                <Typography variant="subtitle2" component="div" sx={{ mx: '1rem', my: '0.2rem'}}>
                    Lyrics
                </Typography>
                <ToggleButtonGroup value={explicityText} exclusive onChange={(event, newValue) => {if (newValue !== null) {setExplicityText(newValue); handleExplicityChange(newValue);}}} sx={{ m: '1rem' }}
                >
                <ToggleButton value="All">
                    All
                </ToggleButton>
                <ToggleButton value="Explicit">
                    Explicit
                </ToggleButton>
                <ToggleButton value="Non-Explicit">
                    Non-Explicit
                </ToggleButton>
                </ToggleButtonGroup>
            </div>
            </Box>
        </Drawer>
    );

    // return (
    //     <div>
    //         <div>
    //             <h3>Sort By</h3>
    //             <ToggleButtonGroup value={sortText} exclusive onChange={(event, newValue) => {handleSortTypeChange(newValue); if (newValue !== null) {setSortText(newValue);}}}
    //             >
    //             <ToggleButton value="Most Popular">
    //                 Most Popular
    //             </ToggleButton>
    //             <ToggleButton value="Alphabetical (A-Z)">
    //                 Alphabetical (A-Z)
    //             </ToggleButton>
    //             </ToggleButtonGroup>
    //         </div>
    //         <div>
    //             <h3>Album Type</h3>
    //             <ToggleButtonGroup value={albumText} exclusive onChange={(event, newValue) => {handleAlbumTypeChange(newValue); if (newValue !== null) {setAlbumText(newValue);}}}
    //             >
    //             <ToggleButton value="All">
    //                 All
    //             </ToggleButton>
    //             <ToggleButton value="single">
    //                 Single
    //             </ToggleButton>
    //             <ToggleButton value="album">
    //                 Album
    //             </ToggleButton>
    //             </ToggleButtonGroup>
    //         </div>
    //         <div>
    //             <h3>Lyrics</h3>
    //             <ToggleButtonGroup value={explicityText} exclusive onChange={(event, newValue) => {handleExplicityChange(newValue); if (newValue !== null) {setExplicityText(newValue);}}}
    //             >
    //             <ToggleButton value="All">
    //                 All
    //             </ToggleButton>
    //             <ToggleButton value="Explicit">
    //                 Explicit
    //             </ToggleButton>
    //             <ToggleButton value="Non-Explicit">
    //                 Non-Explicit
    //             </ToggleButton>
    //             </ToggleButtonGroup>
    //         </div>
    //         <div>
    //             <h3>Playlist</h3>
    //             <label>
    //                 <input type="checkbox" onChange={(event) => {handleDisplayTypeChange(event.target.checked)}}/>
    //                 In My Playlist
    //             </label>
    //         </div>
    //     </div>
    // )
}

export default SideBar;