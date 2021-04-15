import React from 'react'
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, isAdmin = false, diveSuits = false, accessories = false, keyword = '' }) => {

    return (
        pages > 1 && (
            <Pagination>
                {[...Array(pages).keys()].map(x => (
                    <LinkContainer
                        key={x + 1}
                        to={
                            !isAdmin ?
                                diveSuits ?
                                    `/divesuits/${x + 1}` :
                                    accessories ?
                                        `/accessories/${x + 1}` :
                                        keyword ?
                                            `/search/${keyword}/page/${x + 1}` :
                                            `/page/${x + 1}` :
                                `/admin/productlist/${x + 1}`
                        }>
                        <Pagination.Item active={x + 1 === page}>
                            {x + 1}
                        </Pagination.Item>
                    </LinkContainer>
                ))}
            </Pagination>
        )
    )
}

export default Paginate
