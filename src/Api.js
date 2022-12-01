// getting data
// code modified from tutorial https://www.youtube.com/watch?v=SbelQW2JaDQ

// TO-DO: env var credentials
const clientID = '7ff5a3326baa4009903cdb46c0293f41';
const clientSecret = '55b3a55234ca4901920dd9ca43eb68d1';

const getToken = async () => {
    try {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientID + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
            });
        
            const data = await result.json();
            return data.access_token;
    } catch (error) {
        console.log("error", error);
    }
}

const getPlaylist = async (token, playlistID) => {
    try {
        const result = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json', 
                'Authorization' : 'Bearer ' + token
            }
            });
            const data = await result.json();
            return data.items;
    } catch (error) {
        console.log("error", error);
    }
}



// TO-DO: 
// Tutorial: why do we store token in UI controller?
// Specify only needed fields in getPlaylist API call

// TO-DO:
// look at post about modern api calls in react and add handling of http errors
// figure out if this is due to http error
// The following code should be in App.js and state & useEffect should be inside the functional component App
// const getData = async () => {
//     const playlistID = '37i9dQZF1DXcBWIGoYBM5M';
//     const token = await getToken();
//     const tracks = await getPlaylist(token, playlistID);
//     return tracks;
// }

// const [data, setData] = useState({});
  
// useEffect(() => {
//   const fetchData = async () => {
//       try {
//           const tracks = await getData();
//           setData(tracks);
//           console.log(tracks.items[0]);
//       } catch (error) {
//           console.log("error", error);
//       }
//   };
//   fetchData();
// }, []);

export { getToken, getPlaylist };