import React from 'react';
import { Box } from '@material-ui/core';
import  BottomNavigation  from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
   

  return (
       <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction 
        style={{color:"black"}}
        label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction
         style={{color:"black"}}
         label="Movies" icon={<MovieIcon/>} />
        <BottomNavigationAction 
         style={{color:"black"}}
        label="TV Series" icon={<TvIcon />} />
         <BottomNavigationAction 
         style={{color:"black"}}
        label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    
  );
}
