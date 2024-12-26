import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserFooter() {
  return (
    <div className='root'>
        <footer className="footer">
            <div className='footeritemsgroup'>
                <Link className='footeritems' to="/about">About us </Link>
                <p className='footeritems'>We save pets so you can give them a Life</p>
                <Link className='footeritems' to="/contact">Contact us</Link> 
            </div>
           
        </footer>
    </div>
    
  )
}

export default UserFooter;