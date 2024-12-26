 import React from 'react';

import "./userHome.css"
import Navbar from '../../navbar/Navbar';
import HomeContent from './HomeContent';
import UserHeader from './UserHeader';
import UserFooter from './UserFooter';

function UserHome (){
 
  return (
    <div>
      <UserHeader/>
      <Navbar/>
      <HomeContent/>
      <UserFooter/>
    </div>
  )
}

export default UserHome

