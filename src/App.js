import './App.css';
import { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import trackData from "./assets/track-data.json";
import TrackItem from "./components/trackItem";
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';


// add extra fields "playlisted" and "item_id" to each item
trackData.forEach((item, index) => {
  item.playlisted = false;
  item.item_id = index;
});


function App() {
  const [data, setData] = useState(trackData); 
  const [displayType, setDisplayType] = useState("All"); // "All" or "Playlist"
  const [albumType, setAlbumType] = useState("All"); // "All" or "single" or "album"
  const [explicity, setExplicity] = useState("All"); // "All" or "Explicit" or "Non-Explicit" 
  const [sortType, setSortType] = useState("Most Popular") // "Most Popular" or "Alphabetical (A-Z)"


  // item here is an item in the state "data" (array)
  const matchesAlbumType = (item) => {
    if (albumType === "All") {
      return true;
    } else {
      return albumType === item.track.album.album_type;
    }
  }


  const handleAlbumTypeChange = eventKey => {
    setAlbumType(eventKey);
  }


  const matchesExplicity = (item) => {
    if (explicity === "All") {
      return true;
    } else if (explicity === "Explicit") {
      return item.track.explicit === true;
    } else {
      return item.track.explicit === false;
    } 
  }


  const handleExplicityChange = eventKey => {
    setExplicity(eventKey);
  }


  const matchesDisplayType = (item) => {
    if (displayType === "All") {
      return true;
    } else {
      return item.playlisted === true;
    }
  }


  const handleDisplayTypeChange = checked => {
    setDisplayType(checked ? "Playlist" : "All");
  }


  const addOrRemoveItemInPlaylist = (this_item_id) => {
    const all_data = [...data];
    all_data[this_item_id].playlisted = !(all_data[this_item_id].playlisted);
    console.log(this_item_id, all_data[this_item_id].playlisted);
    setData(all_data);
    return (all_data[this_item_id].playlisted);
  }


  const sortByDecPopularity = (item1, item2) => {
    return (item2.track.popularity - item1.track.popularity);
  }


  const sortByIncAlphabetical = (item1, item2) => {
    return (item1.track.name > item2.track.name ? 1 : (item1.track.name === item2.track.name ? 0 : -1)); 
  }


  const handleSortTypeChange = eventKey => {
    setSortType(eventKey);
  }


  const filteredData = data.filter(matchesAlbumType).filter(matchesExplicity).filter(matchesDisplayType);
  const sortedData = filteredData.sort(sortType === "Most Popular" ? sortByDecPopularity : sortByIncAlphabetical);
  console.log(sortedData.length);

  
  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "row" }}>
    <CssBaseline/>

      <Box component="div" sx={{ width: 1/5 }}>
      <SideBar handleAlbumTypeChange={handleAlbumTypeChange} handleExplicityChange={handleExplicityChange} handleSortTypeChange={handleSortTypeChange}/>
      </Box>

      <Box component="div" sx={{ width: 4/5, display: "flex", flexDirection: "column"}}>
      <Box component="div">
        <TopBar allData={data} displayType={displayType} handleDisplayTypeChange={handleDisplayTypeChange}/>
      </Box>
      <Toolbar/>
      <Toolbar/>
      <Toolbar/>
      <Box component="main" className="items-container">
        {sortedData.map((item) => (
            <TrackItem item={item} addOrRemoveItemInPlaylist={addOrRemoveItemInPlaylist}/>
        ))}
      </Box>
      </Box>

    </Box>
  );
}

export default App;
