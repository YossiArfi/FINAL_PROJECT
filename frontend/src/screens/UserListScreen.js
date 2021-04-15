import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers, deleteUser } from '../action/userActions'
import Meta from '../components/Meta';


const UserListScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo, successDelete])

    //ici on recupere le user._id pour le passer a deleteUser et le user.name pour le petit message
    const deleteHandler = (id, name) => {
        if (window.confirm(`Do you really want to delete ${name}?`)) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <>
            <Meta title='Proshop | Admin Dashboard' />
            <h1>Users</h1>
            {loading ? <Loader /> :
                error ? <Message variant='danger'>{error}</Message> :
                    (
                        <Table striped bordered hover responsive className='table-sm text-center'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ADMIN</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>
                                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Send an email</Tooltip>}>
                                                <span className="d-inline-block">
                                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                                </span>
                                            </OverlayTrigger>
                                        </td>
                                        <td>{user.isAdmin ?
                                            <i className='fas fa-check' style={{ color: '#5cb85c' }}></i> :
                                            <i className='fas fa-times' style={{ color: '#d9534f' }}></i>
                                        }</td>
                                        <td>
                                            <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>
                                            {' '}
                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user._id, user.name)}>
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
        </>
    )
}

export default UserListScreen
