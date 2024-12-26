import React from 'react'
import Navbar from '../../navbar/Navbar';
import { Container } from 'react-bootstrap'
import logo from "../../../img/IMG_1825.jpg"


function ContactUs() {
  return (
    <div className='root'>
        <Navbar/>

        <Container>
            <div className='contactgroup'>
                <div className='contacttitlehead'>
                    <h1 className='contacttitle'> Contact US</h1>
                </div>
                <p className='contactparagraph'> Please reach out to us to start your new life with your favorite companion!</p>
                <div className='contacttitlehead2'>
                    <h1 className='contacttitle'> Our Location</h1>
                </div>
                <p className='contactparagraph'>New Jersey Princeton Lawerence Township</p>
                <div className='contacttitlehead3'>
                    <h1 className='contacttitle'> Call Us To Book An Appointment</h1>
                </div>
                <p className='contactparagraph'>478 - 123 - 4567</p>
            </div>


            <img className="logo" src={logo}/ >

        </Container>
        
    </div>
  )
}

export default ContactUs