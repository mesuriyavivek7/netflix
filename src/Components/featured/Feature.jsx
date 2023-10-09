import React from 'react'
import "./feature.scss"
//import icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

//import images
import Bg from "../../Images/bg.jpg"
import John_clip from "../../Images/john-clip.png"

export default function Feature({type}) {
  return (
    <div className='feature'>
          {type && (
            <div  className='category'>
                <span>{type === "movie" ? "Movies":"Series"}</span>
                <select name='genre' id='genre'>
                     <option>Genre</option>
                     <option value='adventure'>Adventure</option>
                     <option value='comedy'>Comedy</option>
                     <option value='crime'>Crime</option>
                     <option value='fantasy'>Fantasy</option>
                     <option value='historical'>Historical</option>
                     <option value='horror'>Horror</option>
                     <option value='romance'>Romance</option>
                     <option value='sci-fi'>Sci-Fi</option>
                     <option value='thriller'>Thriller</option>
                     <option value='wastern'>Wasterb</option>
                     <option value='animation'>Animation</option>
                     <option value='drama'>Drama</option>
                     <option value='documentry'>Documentry</option>
                </select>
            </div>
          )}
          <img  src={Bg}></img>

          <div className='info'>
              <img src={John_clip}></img>
              <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur tellus nec augue ornare, eu placerat nisi faucibus. Nulla rutrum enim lorem. Vestibulum blandit aliquam nunc. Duis ultrices nisl in ligula mattis porttitor. </span>
              <div className='buttons'>
                   <button className='play'>
                         <PlayArrowIcon></PlayArrowIcon>
                         <span>Play</span>
                   </button>
                   <button className='more'>
                         <InfoOutlinedIcon></InfoOutlinedIcon>
                         <span>Info</span>
                   </button>
              </div>
          </div>
    </div>
  )
}
