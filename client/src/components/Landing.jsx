import React from 'react';
import {Link} from 'react-router-dom';
import s from './styless/Landing.module.css'

function Landing(){
    return(
        <div className={s.container}>
            <div className={s.outer}>
                <p className={s.title}>
                Dogs Breeds APP <br/><span className={s.subtitle}> find your perfect <span className={s.span}> Dog</span> </span>
                </p>
                <Link to='/dogs' className={s.btn}>Enter App</Link>
            </div>
        </div>
    )
}

export default Landing;