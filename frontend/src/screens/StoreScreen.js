import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col, Row } from "react-bootstrap"
import Product from "../components/Product"
import Loader from "../components/Loader"
import Message from "../components/Message"
import Meta from "../components/Meta"
import { listProducts } from "../action/productActions"
import Paginate from "../components/Paginate"
import { Link } from "react-router-dom"

const StoreScreen = ({ match }) => {
  // const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts("", pageNumber))
  }, [dispatch, pageNumber])

  return (
    <>
      <Meta />
      <Link to='/' className='btn btn-dark'>
        Go Back
      </Link>
      <h1>Store</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))
              .reverse()}
          </Row>
          <Paginate pages={pages} page={page} />
        </>
      )}
    </>
  )
}

export default StoreScreen
