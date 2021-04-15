import React from 'react'
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../action/userActions';
import SearchBox from './SearchBox';



const Header = () => {
    const dispatch = useDispatch()


    const cart = useSelector(state => state.cart)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <header>
            <Navbar variant="dark" expand="lg" collapseOnSelect className='navbar'>
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img
                                src="/images/white_logo_transparent_background.png"
                                width="190"
                                height="110"
                                className="d-inline-block align-top"
                                alt="Poseidon logo"
                            />
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Route render={({ history }) => <SearchBox history={history} />} />
                        <Nav className="ml-auto">

                            <NavDropdown title='Store' className='lineStyled'>
                                <LinkContainer to='/divesuits'>
                                    <NavDropdown.Item><i className="fas fa-tshirt mr-1"></i> Dive Suits</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/accessories'>
                                    <NavDropdown.Item><i className="fas fa-tools mr-1"></i> Accessories</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='userName' className='lineStyled'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item><i className="fas fa-user mr-1"></i> Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}><i className="fas fa-sign-out-alt mr-1"></i> Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                    <LinkContainer to="/login" className='lineStyled'>
                                        <Nav.Link><i className='fas fa-user'></i> Sign in</Nav.Link>
                                    </LinkContainer>
                                )}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu' className='lineStyled'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item><i className="fas fa-users mr-1"></i> Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item><i className="fas fa-tags mr-1"></i> Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item><i className="fas fa-dolly mr-1"></i> Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}

                            <LinkContainer to='/cart' className='lineStyled'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart'></i> Cart <i className="fa badge" value={cart.cartItems.length}>{' '}</i>
                                </Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
