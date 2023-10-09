import "./list.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import ListItem from "../listitem/ListItem";
import { useRef, useState } from "react";

export default function List() {
   const [slideNumber,setSlideNumber]=useState(0);

   const [isMoved,setisMoved]=useState(false)
  const listRef=useRef()

  const handleClick=(direction)=>{
            setisMoved(true)
            let distance=listRef.current.getBoundingClientRect().x-50;
            if(direction==="left" && slideNumber>0){
               setSlideNumber(slideNumber-1);
               listRef.current.style.transform = `translateX(${230+distance}px)`

            }

            if(direction==="right" && slideNumber<5){
              setSlideNumber(slideNumber+1);
              listRef.current.style.transform = `translateX(${-230+distance}px)`
           }

           
  }

  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon className="sliderArrow left" onClick={()=>handleClick("left")}  style={{display: !isMoved ? "none":"block"}} ></ArrowBackIosNewOutlinedIcon>
           <div className="container" ref={listRef}>
                <ListItem index={0}></ListItem>
                <ListItem index={1}></ListItem>
                <ListItem index={2}></ListItem>
                <ListItem index={3}></ListItem>
                <ListItem index={4}></ListItem>
                <ListItem index={5}></ListItem>
                <ListItem index={6}></ListItem>
                <ListItem index={7}></ListItem>
                <ListItem index={8}></ListItem>
                <ListItem index={9}></ListItem>
           </div>
        <ArrowForwardIosOutlinedIcon className="sliderArrow right"  onClick={()=>handleClick("right")}></ArrowForwardIosOutlinedIcon>
        </div>
    </div>
  )
}
