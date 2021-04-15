import React from 'react'

const Video = () => {
    return (
        <>
            <h1 className='text-center mb-4 mt-5' >A whole other world is waiting for you ...</h1>
            <video autoPlay muted loop className="myVideo">
                <source src="/images/fish-video.mp4" type="video/mp4" />
            </video>
        </>
    )
}

export default Video
