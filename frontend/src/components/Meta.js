import React from 'react'
import { Helmet } from "react-helmet";


const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To Poseidon',
    description: 'Explore the Underwater World',
    keywords: 'dive, dive equipment, diving info',
}

export default Meta
