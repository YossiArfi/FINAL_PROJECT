import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';



const HomeBanner = () => {

    return (
        <Container className='banner-image'>
            <div className='banner-text'>
                <Row className='hidden-mobile'>
                    <Col
                        style={{ marginBottom: '40px' }}>
                        <h1 className='banner-title'>Welcome to Poseidon</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <p>
                            All the equipment you need to enjoy your dive in our shop online !
                        </p>
                    </Col>
                    <Col sm={12} md={6} className='hidden-mobile'>
                        <p>
                            Get the current sea temperature in the bests dive locations around the world !
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <Link to='/store' className='btn btn-primary my-3'>
                            Shop now
                        </Link>
                    </Col>
                    <Col sm={12} md={6}>
                        <HashLink smooth to='/#weather-app' className='btn btn-primary my-3'>
                            Dive in
                        </HashLink>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default HomeBanner
