import React from 'react';
import {Link} from 'react-router-dom';

function Landing(){
    return(
        <div>
            <section>
                <h1 className=''>Dogs Breeds APP</h1>
                <p className=''>find your perfect <span>Dog Breed</span></p>
            </section>
            <Link to='/dogs' className=''>Enter App</Link>
        </div>
    )
}

export default Landing;