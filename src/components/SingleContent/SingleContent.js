import { Badge } from '@mui/material';
import React from 'react';
import { img_300 } from '../../config/config';
import { unavailable } from '../../config/config';
import './SingleContent.css';
const SingleContent=({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
})=>{
   return <div className='media'>
    <Badge badgeContent={vote_average} color={vote_average>6 ? 'primary':'secondary'} />
    <img  className='poster'src={poster?`${img_300}/${poster}` : unavailable } alt ={title}/>
   <b className='title'>{title}</b>
   <span className='subTitle'>
    {media_type==='tv'? "TV Series":"Movie"}
   </span>
    <span className='subTitle'>{date}</span>
   </div>
}
export default SingleContent;