import React from "react"
import { Link } from "react-router-dom"

const NotFoundScreen = () => {
  return (
    <>
      <Link className='btn btn-primary my-3' to='/'>
        Go Back
      </Link>
      <p className='not-found-screen'>
        <span>404 Error</span> <br />
        You are diving too deep in water you have to go back.
      </p>
      <div className='image text-center'>
        <img src='/images/scuba2.png' alt='scuba-diver' />
      </div>
    </>
  )
}

export default NotFoundScreen
