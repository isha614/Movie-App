import React,{useState} from "react";
import { TextField, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
const Search=()=>{

const[type,setType]=useState(0);
const darkTheme=createTheme({
    palette: {
      mode:"dark",
    },
   })
return(
    <>
    <div style={{display:'flex',margin:'15px 0'}}>
<TextField 
style={{flex:1}}
id="standard-basic" label="Search" variant="standard" color="primary" />
<Button variant='contained' style={{marginLeft: 10}}><SearchIcon/></Button>
</div>
<Tabs value={type} indicatorColor='primary' textColor="primary">
<Tab style={{width:"50%"}} label="Search Movies"/>
</Tabs>
</>
)
}
export default Search;