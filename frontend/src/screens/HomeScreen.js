import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import Quote from '../components/Quote';
import { listProducts } from '../action/productActions';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import { Link } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';
import Meteo from '../components/Meteo';
import Video from '../components/Video';


const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])


    return (
        <>
            <Meta />
            {!keyword ?
                <>  <HomeBanner />
                    <ProductCarousel />
                    <h1 className='text-center'>Latest Products</h1>
                    {
                        loading ?
                            <Loader /> :
                            error ?
                                <Message variant='danger'>{error}</Message> :
                                <>
                                    <Row>
                                        {products.map((product) => (
                                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                                <Product product={product} />
                                            </Col>
                                        )).reverse().slice(0, 4)}
                                    </Row>
                                    <Paginate
                                        pages={pages}
                                        page={page}
                                        keyword={keyword ? keyword : ''} />
                                </>
                    }
                    <Quote />
                    <Meteo />
                    <Video />
                </> :

                //SEARCH RESULTS
                <>
                    <Link to='/' className='btn btn-light'>Go Back</Link>

                    <h1 className='text-center'>Results for {keyword}</h1>
                    {
                        loading ?
                            <Loader /> :
                            error ?
                                <Message variant='danger'>{error}</Message> :
                                <>
                                    <Row>
                                        {products.length === 0 ? <p className='no-result'>There is no results for your research...</p> :
                                            products.map((product) => (
                                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                                    <Product product={product} />
                                                </Col>
                                            )).reverse()}
                                    </Row>
                                    <Paginate
                                        pages={pages}
                                        page={page}
                                        keyword={keyword ? keyword : ''} />
                                </>
                    }
                </>
            }
        </>
    )
}

export default HomeScreen
