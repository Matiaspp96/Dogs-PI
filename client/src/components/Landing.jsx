import React from 'react';
import {Link} from 'react-router-dom';
import s from './styless/Landing.module.css'

function Landing(){
    return(
        <div className={s.container}>
            <section>
                <p className={s.title}>
                Dogs Breeds APP <br/><span className={s.subtitle}> find your perfect <span className={s.span}> Dog Breed </span> </span>
                </p>
            </section>
            <Link to='/dogs' className={s.btn}>Enter App</Link>
        </div>
    )
}

export default Landing;