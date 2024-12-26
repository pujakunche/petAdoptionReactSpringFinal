import React from 'react'
import Navbar from '../../navbar/Navbar';
import { Card, Col, Container, Row } from 'react-bootstrap'

import coupleDog from "../../../img/couple_dog.jpg";
import dogMan from "../../../img/dog_man.jpg";
import dogMan2 from "../../../img/dog_man_2.jpg";
import UserFooter from './UserFooter';

function AboutUs() {
  return (
    <div className='root'>
    <Navbar/>

    <Container>
        <div className='contactgroup'>
            <div className='contacttitlehead'>
                <h1 className='contacttitle'> About Us</h1>
            </div>
            <p className='contactparagraph'> 
                Our mission is to end the suffering of precious animals and give them a second breath at life with
                loving family. These aniamls haven't had a great life but have so much love and joy to bring to any one. 
                By adopting today, you will a new journey with a smile on your face.
            </p>
        </div>

      <section>
        <div className='contacttitlehead3'>
            <h1 className='contacttitle'> Some success stories</h1>
        </div>
        {/* Add images of dogs with their owners */}
        <div className='contentimggroup'>
          <Row>
            <Col>
              <Card>
                <img className='contentimg' src={coupleDog} alt="Picture of dog between a couple" />
                <caption>Our dog makes the family complete</caption>
              </Card>
            </Col>
            <Col>
              <Card>
                <img className='contentimg' src={dogMan} alt="Picture of a dog and man" />
                <caption>Sparky make my day good and happy!</caption>
              </Card>
            </Col><Col>
              <Card>
                <img className='contentimg' src={dogMan2} alt="Picture of a dog and man" />
                <caption>He make a bit impact on my life</caption>
              </Card>
            </Col>
           
          </Row>
        </div>
        
      </section>
        

        
    </Container>
    <UserFooter/>
    
</div>
  )
}

export default AboutUs