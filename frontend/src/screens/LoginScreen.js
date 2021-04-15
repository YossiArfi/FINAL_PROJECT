import React, { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { googleLogin, login } from '../action/userActions'

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    //GOOGLE LOGIN//
    const responseSuccessGoogle = (response) => {
        console.log("Google login SUCCESS !!");

        dispatch(googleLogin(response))
    }
    const responseErrorGoogle = (error, details) => {
        console.log(error, details);
    }
    const customGoogleButton = {
        backgroundColor: '#1A73E8',
        borderColor: '#1A73E8',
        marginLeft: '20px'
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        className='rounded'
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        className='rounded'
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    <i className="fas fa-sign-in-alt"></i> Sign In
                </Button>

                <GoogleLogin
                    clientId="588719051015-amgo4fkgkcrprp2k112pfbdqtm7j206s.apps.googleusercontent.com"
                    render={renderProps => (
                        <button
                            onClick={renderProps.onClick}
                            className='btn btn-primary'
                            style={customGoogleButton}>
                            <i className="fab fa-google"></i> Login with Google
                        </button>
                    )}
                    buttonText="Login with Google"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={'single_host_origin'}
                    theme='dark'
                />

            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer ?{' '}
                    <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}
                        className='register-link'>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen