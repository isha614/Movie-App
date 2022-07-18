import React from 'react';
import  BottomNavigation  from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from "@material-ui/core/styles";

const styles={
  root:{
    backgroundColor:"black"
  }
}
class MyBottomNavigation extends React.Component {
  render(){

  const actionClasses = this.props.classes;
   

  return (
       <BottomNavigation value={1} showLabels={true} classes={actionClasses}>
        <BottomNavigationAction 
        style={{color:"white"}}
        label="Trending" icon={<WhatshotIcon />} />

        <BottomNavigationAction
         style={{color:"white"}}
         label="Movies" icon={<MovieIcon/>} />

        <BottomNavigationAction 
         style={{color:"white"}}
        label="TV Series" icon={<TvIcon />} />
         <BottomNavigationAction 
         style={{color:"white"}}
        label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    
  );
}
}
export default withStyles(styles)(MyBottomNavigation);
