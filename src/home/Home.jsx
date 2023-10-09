import React from 'react'
import "./home.scss"
import NavBarSet from '../Components/navbar/NavBarSet'
import Feature from '../Components/featured/Feature'
import List from '../Components/list/List'


export default function Home() {
  return (
    <div className='home'>
          <NavBarSet></NavBarSet>
          <Feature></Feature>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
    </div>
  )
}
