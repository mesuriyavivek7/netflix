import React from 'react'
import './watch.scss'
//import video
import Trailer from "../../Images/trailer.mp4"

//import icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Watch() {
  return (
    <div className='watch'>
        <div className='back'>
           <ArrowBackIcon></ArrowBackIcon>
           Home
        </div>
        <video className='video' autoPlay progress controls src={Trailer}></video>
        
    </div>
  )
}
