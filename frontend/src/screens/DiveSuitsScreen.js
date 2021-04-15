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


const DiveSuitsScreen = ({ match }) => {

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages, pageSize } = productList


    useEffect(() => {
        dispatch(listProducts('', pageNumber))
    }, [dispatch, pageNumber])

    const diveSuitsProducts = products.filter(product => product.category === 'Dive Wear & Suits')

    return (
        <>
            <Meta title='Proshop | Dive Suits' />
            <Link to='/' className='btn btn-dark'>Go Back</Link>

            <h1>Dive Suits</h1>
            {
                loading ?
                    <Loader /> :
                    error ?
                        <Message variant='danger'>{error}</Message> :
                        <>
                            <Row>
                                {diveSuitsProducts.map((diveSuitsProduct) => (
                                    <Col key={diveSuitsProduct._id} sm={12} md={6} lg={4} xl={3}>
                                        <Product product={diveSuitsProduct} />
                                    </Col>
                                ))}
                            </Row>
                            <Paginate pages={pages} page={page} diveSuits={true} />
                        </>
            }
        </>
    )
}

export default DiveSuitsScreen
