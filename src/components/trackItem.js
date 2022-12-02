import "./trackItem.css";
import { _getDurationStr } from "../util";

const TrackItem = (props) => {
    const addOrRemoveItemInPlaylist = props.addOrRemoveItemInPlaylist;
    const playlisted = props.item.playlisted;
    const item_id = props.item.item_id;
    const _track = props.item.track;
    const _image = _track.album.images[1].url;
    const _trackName = _track.name;
    const _artists = _track.artists.map(el => el.name);
    const _albumType = _track.album.album_type;
    const _albumName = _track.album.name;
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
            <p>Album: {_albumName}</p>
            <p>Album type: {_albumType}</p>
            <p>Explicit lyrics: {_explicitStr}</p>
            <p>Popularity score: {_popularity}</p>
            <p>In playlist: {playlisted? "Yes" : "No"}</p>
            <button onClick={() => {addOrRemoveItemInPlaylist(item_id)}}>{playlisted ? "Remove From Playlist" : "Add To Playlist"}</button>
        </div>
    );
};

export default TrackItem;