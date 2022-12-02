import { _getDurationStr } from "../util";
import { Typography } from "@mui/material";

// problem: confusing UI since filter can be applied INSIDE playlist which gets rid of some items, and yet total length does not change

const Aggregator = (props) => {
    const allData = props.allData;
    const playlistData = allData.filter((item) => {return item.playlisted});

    const numTracks = playlistData.length;
    const totalDurationMs = playlistData.reduce((acc, item) => acc + item.track.duration_ms, 0);
    const totalDurationStr = _getDurationStr(totalDurationMs);

    return (
        <div>
            <Typography variant="subtitle2" component="div" color="black">
                Total Tracks: {numTracks}
            </Typography>
            <Typography variant="subtitle2" component="div" color="black">
                Total Duration: {totalDurationStr}
            </Typography>
        </div>
    )
}

export default Aggregator;