import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs } from '../redux/actions'

function Home(){
    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogs)
    useEffect(()=>{
        dispatch(getAllDogs())
    }, [dispatch])
    return(
        <div>
            All Breeds
            {
                dogs&&dogs.map(breed => {
                    return(
                        <div key={breed.id}>
                            <p>{breed.name}</p>
                            <img src={breed.image} alt={breed.nam} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home