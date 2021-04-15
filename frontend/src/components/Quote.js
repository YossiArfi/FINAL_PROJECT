import React from 'react'
import { Card } from 'react-bootstrap'

const Quote = () => {
    return (
        <Card
            className='text-center rounded my-5'
            style={{
                backgroundColor: '#4e5d6c00',
                boxShadow: '2px 5px 10px #081C25, -2px -5px 10px #257ea5'
            }}>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        <i>"The sea is an underwater museum still awaiting its visitors."</i>
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">Philippe Diole</cite> <br />
                        Scuba Diver & Explorator
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default Quote
