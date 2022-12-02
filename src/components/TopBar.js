import { Slide, AppBar, Toolbar, Typography, useScrollTrigger, Divider, Box, FormControlLabel, FormGroup, Switch} from '@mui/material';
import Aggregator from './Aggregator';

// code snippet modified from https://mui.com/material-ui/react-app-bar/
const HideOnScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  

const TopBar = (props) => {
    const allData = props.allData;
    const handleDisplayTypeChange = props.handleDisplayTypeChange;

    return (

            <AppBar sx={{ bgcolor: "white", width: 4/5}}>
            <Toolbar>
                <Typography variant="h3" component="div" style={{ color: "black"}}>
                Spotify Top 100 Songs of 2022
                </Typography>
            </Toolbar>
            <Divider />
            <Toolbar>
            <div>
              <div>
                <Typography variant="h5" component="div" color="black">
                In My Playlist
                </Typography>
              </div>
              <div>
              <FormGroup>
                <FormControlLabel componentsProps={{ typography: { variant: "body1", color: "black"}}} control={<Switch onChange={(event) => {handleDisplayTypeChange(event.target.checked)}}/>} label="Only Show Songs In My Playlist" />
              </FormGroup>
              </div>              
              
              <Aggregator allData={allData}/>
            </div>
            </Toolbar>
            </AppBar>
    );
}

export default TopBar;