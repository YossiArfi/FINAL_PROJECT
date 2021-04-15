import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from "../action/productActions";
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';


const AccessoriesScreen = ({ match }) => {

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages, pageSize } = productList

    const accessoriesProducts = products.filter(product => product.category === 'Accessories')

    useEffect(() => {
        dispatch(listProducts('', pageNumber))
    }, [dispatch, pageNumber])


    return (
        <>
            <Meta title='Proshop | Accessories' />
            <Link to='/' className='btn btn-dark'>Go Back</Link>

            <h1>Dive Suits</h1>
            {
                loading ?
                    <Loader /> :
                    error ?
                        <Message variant='danger'>{error}</Message> :
                        <>
                            <Row>
                                {accessoriesProducts.map((accessoriesProduct) => (
                                    <Col key={accessoriesProduct._id} sm={12} md={6} lg={4} xl={3}>
                                        <Product product={accessoriesProduct} />
                                    </Col>
                                ))}
                            </Row>
                            <Paginate pages={pages} page={page} accessories={true} />
                        </>
            }
        </>
    )
}

export default AccessoriesScreen
