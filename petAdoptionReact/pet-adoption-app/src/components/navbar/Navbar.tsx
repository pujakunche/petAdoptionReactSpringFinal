import React, { useState } from 'react'
import "../user/home/userHome.css"

import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

function Navbar() {
// const [isLogin, setIsLogin] = useState<any>(false);
// const [name, setName] = useState(localStorage.getItem('authorization') || '');
// const [user, setUSer] = useState<any>(JSON.parse(localStorage.getItem("authorization") || ''))


  // const user = localStorage.getItem(data.authorization);

  // function checkIfLogin(user : any){
  //   if(user != null){
  //     // setIsLogin(true);
  //   } 
  // }


  return (
  
    <div>
    <nav className="navClass">

    


          <Link className="navLink" to="/about"> About Us</Link>
          {/* {
              user ? (<p> Welcome! </p>)
              : ( */}

   
          <Link className="navLink" to="/login"> Login</Link><Link className="navLink" to="/signup"> Sign Up</Link>
          {/* } */}

          <Link className="navLink" to="/pets"> Pets</Link>

          <Link className="navLink" to="/"> Home</Link>
    </nav>
    
    </div>
  )
}

export default Navbar