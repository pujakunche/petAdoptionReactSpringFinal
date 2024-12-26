import React from 'react'
import "./userHome.css"
import { Col, Container, Row } from 'react-bootstrap';
import flower_dog from "../../../img/flower-dog.jpg";
import aussie_puppy from "../../../img/aussiepuppy.jpg";
import cat from "../../../img/cat.jpg";
import { Link } from 'react-router-dom';

function UserHomeContent() {

  return (
    <div className='root'>
      <Container>
        <section className="midsectiongroup">
            <h2 className="midsection"> Adopt a Life today and save a Life</h2>
            <p className="midsection">Adopting a pets will bring happiness and joy in your Life. And we make adoption process easy.</p>
        </section>

        <div className='contentimggroup'>
          <Row>
            <Col><img className='contentimg' src={aussie_puppy} alt="picture of an aussie puppy" /></Col>
            <Col><img className='contentimg' src={cat} alt="picture of cat on their backlegs" /></Col>
            <Col><img className='contentimg' src={flower_dog} alt="a goldendoodle in a flower background" /></Col>
          </Row>
        </div>

        <div className="=buttoncontainer">
          <Row>
            <Col lg={4}></Col> 
            <Col>
              <section className="buttongroup">
              <Link to="/pets">
                  <button className="button">Adopt Now</button>
                </Link>
              </section>
            </Col>
            <Col>
              <section className="buttongroup">
                <Link to="/pets">
                  <button className="button">View All Pets</button>
                </Link>
              </section>
            </Col>
            <Col lg={4}></Col>             
          </Row>
        </div>
        
      </Container>
    
    </div>
  )
}

export default UserHomeContent