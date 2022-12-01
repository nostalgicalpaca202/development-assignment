import "./trackItem.css";
import { useState } from "react";


const _getDurationStr = (ms) => {
    // code snippet modified from https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
    const mins = Math.floor(ms / 60000);
    const secs = ((ms % 60000) / 1000).toFixed(0);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
}

// const Button = (props) => {
//     const [text, setText] = useState(props.playlisted ? "Remove From Playlist" : "Add To Playlist");

//     const handleClick = () => {
//         // newPlaylisted should be a state that is directly hooked with state of item's playlisted property
//         // anothe problem: filtered data does not automatically refresh when removing item in the playlisted display
//         // also: item's "in playlist" text does not update as we click button, unless we click buttons on sidebar
//         const newPlaylisted = props.addOrRemoveItemInPlaylist(props.item_id);
//         setText(newPlaylisted ? "Remove From Playlist" : "Add To Playlist");
//     }
    
//     return (
//         <button onClick={handleClick}>{text}</button>
//     );
// }

const TrackItem = (props) => {
    const addOrRemoveItemInPlaylist = props.addOrRemoveItemInPlaylist;
    const playlisted = props.item.playlisted;
    const item_id = props.item.item_id;
    const _track = props.item.track;
    const _image = _track.album.images[1].url;
    const _trackName = _track.name;
    const _artists = _track.artists.map(el => el.name);
    const _albumType = _track.album.album_type;
    const _explicitStr = _track.explicit ? "Yes" : "No";
    const _popularity = _track.popularity;
    const _durationMs = _track.duration_ms;
    const _durationStr = _getDurationStr(_durationMs);

    return (
        <div className="track-item">
            <div>
                <img src={_image}></img>
            </div>
            <h2>{_trackName}</h2>
            <p>{_durationStr}</p>
            <p>{_artists.join(', ')}</p>
            <p>Album type: {_albumType}</p>
            <p>Explicit lyrics: {_explicitStr}</p>
            <p>Popularity score: {_popularity}</p>
            <p>In playlist: {playlisted? "Yes" : "No"}</p>
            <button onClick={() => {addOrRemoveItemInPlaylist(item_id)}}>{playlisted ? "Remove From Playlist" : "Add To Playlist"}</button>
        </div>
    );
};

export default TrackItem;