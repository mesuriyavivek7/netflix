import "./listitem.scss"
//import images
import image_poster from "../../Images/extraction.jpg"

//import trailer
import Trailer from "../../Images/trailer.mp4"
//import icons
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import {useState} from "react";

export default function ListItem({index}) {

    const [isHovered,setIsHovered]=useState(false);
    

  return (
    <div className="listitem" 
      style={{left:isHovered && index * 225-50 + index*2.5}}
      onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
           <img src={image_poster}></img>
           {isHovered && (
            <>
            <video src={Trailer} autoPlay={true} loop></video>
           <div className="icons">
              <PlayCircleFilledIcon></PlayCircleFilledIcon>
              <AddIcon></AddIcon>
              <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
              <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
           </div>
           <div className="itemInfoTop">
               <span>1 hour 14 mins</span>
               <span className="limit">+16</span>
               <span>1999</span>
           </div>
             <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesentium 
              hic rem evenient error possimut.
             </div>
           <div className="genre">Action</div>
           </>
           )}
           
    </div>
  )
}
