import React from 'react'

import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <Link to='/' className='btn'>Back to Home</Link>
        </div>
    )
}

export default PageNotFound
