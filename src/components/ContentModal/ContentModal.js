import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { img_500, unavailable } from '../../config/config';

const style = {
 width:"90%",
 height:"80%",
 backgroundColor:"#39445a",
 border:"1px solid #282c34",
 borderRadius:10,
 color:"white",
 boxShadow:5,
 padding:"1,1,3",
};

export default function ContentModal({children,media_type,id}) {
  const [open, setOpen] = React.useState(false);
  const [content,setContent]= useState();
  const [video,setVideo]=useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData=async()=>{
   const {data}= await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
   setContent(data);
  }

  const fetchVideo=async()=>{
    const {data}= await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
   console.log(data);
    setVideo(data.results[0]?.key);
  }
useEffect(()=>{
  fetchData();
  fetchVideo();
},[])

  return (
    <div>
      <Button className="media"onClick={handleOpen}>{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
       {content && (  <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <img className='content_portrait' alt={content.name||content.title}src={content.poster_path ? `${img_500}/${content.poster_path}`:unavailable}/>
            <img className='content_landscape' alt={content.name||content.title} src={content.backdrop_path ? `${img_500}/${content.poster_path}`:unavailable}/>
            
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
          )}
        </Fade>
       
      </Modal>
    </div>
  );
}
