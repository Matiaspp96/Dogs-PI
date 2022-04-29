import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllDogs } from '../redux/actions'
import Card from './Card'
import Pagination from './Pagination'

function Home(){
    const dispatch = useDispatch()
    const dogs = useSelector(state => state.allDogs)
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
                        <Link style={{textDecoration:"none"}} key={breed.id} to={`/dogs/${breed.id}`}>
                            <Card 
                            id={breed.id}
                            name={breed.name}
                            image={breed.image}
                            temperament={
                                breed.createdInDB ? breed.temperaments.map(e => e.temperament).join(", "):
                                breed.temperament}
                            weight_max={breed.weight_max}
                            weight_min={breed.weight_min}
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Home