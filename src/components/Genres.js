import Chip  from '@mui/material/Chip';
import axios from 'axios';
import React, { useEffect } from 'react';

const Genres=({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
})=>{

    const fetchGenres=async()=>{
     const {data}=   await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setGenres(data.genres);
    };
    console.log(genres);
    useEffect(()=>{
      fetchGenres();
      // eslint-disable-next-line

      return ()=>{
        setGenres({});
        // eslint-disable-next-line
      }
    },[]);
    return(
        <div style={{padding:"6px 0"}}>
         {selectedGenres.map((genre)=>(
            <Chip/>
         ))}
        </div>
    )
}

export default Genres;