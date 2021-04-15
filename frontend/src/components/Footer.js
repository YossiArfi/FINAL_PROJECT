import React from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
    return (
        <footer className="footer-menu text-center text-md-left fluid pt-4 mt-4">
            <Container className="fluid text-center text-md-left">
                <Row>
                    <Col md="6" className='text-center'>
                        <LinkContainer to='/'>
                            <Navbar.Brand>
                                <img
                                    src="/images/white_logo_transparent_background.png"
                                    width="250"
                                    height="140"
                                    className="d-inline-block align-top"
                                    alt="Poseidon logo"
                                />
                            </Navbar.Brand>
                        </LinkContainer>
                    </Col>
                    <Col md="3">
                        <h5 className="title">Quick Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="/" className='lineStyled'>Home</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/store" className='lineStyled'>Store</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/profile" className='lineStyled'>Profile</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/contact" className='lineStyled'>Contact Us</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <h5 className="title">Store</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="/divesuits" className='lineStyled'>Dive Suits</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/accessories" className='lineStyled'>Accessories</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='lineStyled'>Bags</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='lineStyled'>Computer</a>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Container>
            <div className="footer-copyright text-center py-4">
                <Container className='fluid'>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Poseidon.com </a>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
