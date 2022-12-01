import './App.css';
import { useState } from "react";
import trackData from "./assets/track-data.json"
import TrackItem from "./components/trackItem"
import SideBar from './components/SideBar';

// Rest of work overview: (1) core logic - sorting, filtering, added to playlist, aggregator (2) adding main buttons for doing sorting, filtering, and adding to playlist (3) styling 
// suggestion: make test data and test filters/sorting/playlisted once done
// 11/29 workflow: 1. data filtering functions apply to App() -> 2. make buttons for filter & child component logic implementation -> 3. test filter -> 4. add button for favorite & filter for favorite -> 5. test favorite -> 6. sorting work & aggregator work (note: aggregator needs to be its OWN component)


// add extra fields "playlisted" and "item_id" to each item
trackData.forEach((item, index) => {
  item.playlisted = false;
  item.item_id = index;
});

function App() {
  const [data, setData] = useState(trackData.slice(0,13)); 
  const [displayType, setDisplayType] = useState("All"); // Playlist or All
  const [albumTypes, setAlbumTypes] = useState({"single" : true, "album" : true});
  const [explicity, setExplicity] = useState("All"); // "All" or "Explicit" or "Non-Explicit" 

  // ****************************************************************
  // // TO-DO: implement matchesAlbumTypes and matchesExplicity (filter functions to apply to items) - see slides 20, 21 - item here is an item in the state "data" (array)
  // const matchesAlbumTypes = (item) => {
  //   console.log(albumTypes[item.track.album.album_type]);
  //   return albumTypes[item.track.album.album_type];
  // }

  // // works when start with true true and uncheck
  // // then once unchecked one of them, anything else would not work - like check again or uncheck the other
  // // but does not work if initialized to true true on mount (i.e. checking boxes updates albumType but data does not get filtered again)
  // const handleAlbumTypesChange = (typeChanged, newBoolVal) => {
  //   const albumTypesArr = albumTypes;
  //   albumTypesArr[typeChanged] = newBoolVal;
  //   setAlbumTypes(albumTypesArr);
  //   console.log(albumTypes);
  // }
  // ****************************************************************


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

  // TO-DO: implement matchesDisplayType (also a filter to apply to items)
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

  // TO-DO: implement addToPlaylist (to be passed into item component)
  const addOrRemoveItemInPlaylist = (this_item_id) => {
    const all_data = [...data];
    all_data[this_item_id].playlisted = !(all_data[this_item_id].playlisted);
    console.log(this_item_id, all_data[this_item_id].playlisted);
    setData(all_data);
    return (all_data[this_item_id].playlisted);
  }

  // TO-DO: implement sorting functions and states -> see slides
  // note: sorting also needs a reset ("None") button

  // TO-DO: calculate aggregator using matchesDisplayType filter in map and reduce function -> see example site source code

  const filteredData = data.filter(matchesExplicity).filter(matchesDisplayType);

  return (
    <div className="app">

      <div className="title-bar">
        <h1>Spotify Top 100 Songs of 2022</h1>
      </div>

      <div className="main-grid">
        <div className="items-container">
          <p>{filteredData.length}</p>
          {filteredData.map((item) => (
              <TrackItem item={item} addOrRemoveItemInPlaylist={addOrRemoveItemInPlaylist}/>
          ))}
        </div>
        <div className="side-bar">
          <SideBar handleExplicityChange={handleExplicityChange} handleDisplayTypeChange={handleDisplayTypeChange}/>
        </div>
      </div>

    </div>
  );
}

export default App;
