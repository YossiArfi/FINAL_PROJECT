import React from 'react'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import Meta from '../components/Meta'

const ContactScreen = () => {
    return (
        <>
            <Meta title='Poseidon | Contact Us' />

            <Row className='contact-banner'>
                <h1>Contact Us</h1>
            </Row>


            <Row className='contact'>
                <Col md={6}>
                    <Image src="/images/contact.jpg"
                        alt="Happy Diver who dealed with us"
                        style={{
                            height: '618px',
                            width: '448px',
                            borderRadius: '20px'
                        }}
                        fluid
                    />
                </Col>
                <Col md={6}>
                    <ListGroup variant='flush' className='rounded'>
                        <ListGroup.Item>
                            <h6><i className="fas fa-map-marker-alt"></i> Address :</h6>
                            <p>Malibu Point 10880, 90265 <br />
                            Malibu, California
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h6><i className="fas fa-envelope"></i> Email :</h6>
                            <p><a href={`mailto: contact@poseidon.com`}>contact@poseidon.com</a></p>

                            <h6><i className="fas fa-phone-alt"></i> Phone :</h6>
                            <p>212-970-4133</p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h6><i className="fas fa-clock"></i> Available Hours :</h6>
                            <p>Mon - Thur : 08:00 AM - 06:00PM</p>
                            <p>Fri : 08:00 AM - 02:00PM</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ContactScreen
