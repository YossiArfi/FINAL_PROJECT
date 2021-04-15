import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../action/productActions'


const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return (
        <>
            <h1 className='text-center'>Top Reviewed Products</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Carousel pause='hover' id='carousel'>
                    {products.map(product => (
                        <Carousel.Item key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <Image src={product.image} alt={product.name} fluid />
                                <Carousel.Caption className='carousel-caption'>
                                    <h2>{product.name} (${product.price.toFixed(2)})</h2>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </>
    )
}

export default ProductCarousel