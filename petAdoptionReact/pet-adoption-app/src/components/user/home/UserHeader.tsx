import React from 'react'
// import "../userHome.css"
import "./userHome.css"
import logo from "../../../img/IMG_1825.jpg"

function UserHeader() {
  return (
    <div className='root'>
        <header className="headergroup">
        <h1 className="title">PET ADOPTION</h1>
        <img className="logo" src={logo}/ >
        <p className='logodescription'>IM TOO CUTE FOR THIS..........ADOPT ME NOW!!!</p>
        </header>
    </div>
  )
}

export default UserHeader