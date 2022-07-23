import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme, ThemeProvider } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

const darkTheme= createTheme({
    palette: {
        mode: 'dark',
      },
})
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ width: "100%", 
    position:"fixed", 
    bottom:0,
    backgroundColor: "#2d313a",
    zIndex:100 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
        style={{color:"white"}}
        label="Trending" 
        icon={<WhatshotIcon />} />

        <BottomNavigationAction 
         style={{color:"white"}}
         label="Movies" 
         icon={<MovieCreationIcon />} />

        <BottomNavigationAction 
         style={{color:"white"}}
         label="TV Series" 
         icon={<TvIcon />} />

        <BottomNavigationAction 
         style={{color:"white"}}
         label="Search" 
         icon={<SearchIcon />} />
      </BottomNavigation>

      
    </Box>
    </ThemeProvider>
  );
}