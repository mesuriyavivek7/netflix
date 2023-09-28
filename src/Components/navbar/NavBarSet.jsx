import React from 'react'
import "./navbar.scss"
//import images
import Logo from "../../Images/logo.png"
import Person from "../../Images/person.jpg"
//import icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function NavBarSet() {
  return (
    <div className='navbar'>
       <div className='container'>
             <div className='left'>
                  <img src={Logo}></img>
                  <span>Homepage</span>
                  <span>Sereies</span>
                  <span>Movies</span>
                  <span>New and Populer</span>
                  <span>My List</span>
             </div>
             <div className='right'>
                  <SearchIcon className='icon'></SearchIcon>
                  <span>KID</span>
                  <NotificationsIcon className='icon'></NotificationsIcon>
                  <img src={Person}></img>
                  <div className='profile'>
                     <ArrowDropDownIcon className='icon'></ArrowDropDownIcon>
                     <div className='options'>
                         <span>Settings</span>
                         <span>Logout</span>
                     </div>
                  </div>
             </div>
       </div>
    </div>
  )
}
