import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByCreated, filterByTemperaments, getAllDogs, getAllTemperaments, orderByName, orderByWeight } from '../redux/actions';
import s from './styless/FilterSort.module.css'

export default function FilterSort() {
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperaments);
    let [temp, setTemp] = useState([]);


    useEffect(()=>{
        // dispatch(filterByTemperaments(temp[0]))
        dispatch(getAllTemperaments());
    }, [dispatch, temp]);

    function handleFilterByTemperament(event){
        event.preventDefault();
        dispatch(filterByTemperaments(event.target.value))
        setTemp(
            temp = [...temp, event.target.value]
        )
    }

    function handleFilterByCreated(event){
        dispatch(filterByCreated(event.target.value))
        if(event.target.value === "allDogs"){
            dispatch(getAllDogs())
        }
    }

    // async function handleDelete(event){
    //     setTemp(
    //         temp = temp.filter(e => event.target.value !== e)
    //     )
    //     // if(!temp.length){dispatch(getAllDogs())}
    //     // if(temp.length){
    //     //     let firstTemperament = await temp[0]
    //     //     console.log(firstTemperament)
    //     //     dispatch(filterByTemperaments(firstTemperament))
    //     // }
    // }

    function handleRefresh(){
        dispatch(getAllDogs())
        dispatch(filterByCreated('allDogs'))
        setTemp([])
    }

    function handleOrderByWeight(event){
        event.preventDefault();
        dispatch(orderByWeight(event.target.value))
    }

    function handleOrderByName(event){
        event.preventDefault();
        dispatch(orderByName(event.target.value))
    }


  return (
    <div className={s.content}>
        <div className={s.filter}>
        <p className={s.title}>Filter by</p>
            <select onChange={e => handleFilterByTemperament(e)} >
            <option>Temperaments</option>
            <option value="filterByTemp">All Temperaments</option>
            {temperaments && temperaments.map((e,i) => {
                return(
                    <option value={e.temperament} key={i}>{e.temperament}</option>
                )
            })}
            </select>
            <select onChange={e => handleFilterByCreated(e)} >
            <option value="allDogs">All Dogs</option>
            <option value="dogsApi">Dogs APP</option>
            <option value="dogsDb">Yours Dogs</option>
            </select>
        </div>
        <div className={s.sort}>
            <p className={s.title}>Order by</p>
            <select onChange={e => handleOrderByName(e)}>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>
            <select onChange={e => handleOrderByWeight(e)}>
                <option value="desc">Max weight - Min</option>
                <option value="asc">Min weight - Max</option>
            </select>
        </div>
        {/* <ul className={s.list}>
            {temp && temp.map((temperament,i) => {
                return(
                <li key={i}>
                    <button className={s.item} value={temperament} onClick={(e)=>handleDelete(e)}>
                        {temperament}
                    </button>
                </li>
            )})}    
        </ul> */}
        <button className={s.btn} type="button" onClick={()=>handleRefresh()} >Remove Filters</button>
    </div>
  )
}
