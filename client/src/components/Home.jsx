import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs } from '../redux/actions'
import Pagination from './Pagination'

function Home(){
    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogs)
    useEffect(()=>{
        dispatch(getAllDogs())
    }, [dispatch])

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(8);

    const maxPage = Math.ceil(dogs.length / perPage);



    return(
        <div>
            All Breeds
            <Pagination page={page} setPage={setPage} maxPage={maxPage} />
            {
                dogs&&dogs
                .slice((page - 1) * perPage,
                (page - 1) * perPage + perPage)
                .map(breed => {
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