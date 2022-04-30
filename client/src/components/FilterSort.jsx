import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByCreated, filterByTemperaments, getAllDogs, getAllTemperaments } from '../redux/actions';

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
        event.preventDefault();
        dispatch(filterByCreated(event.target.value))
    }

    async function handleDelete(event){
        setTemp(
            temp = temp.filter(e => event.target.value !== e)
        )
        if(!temp.length){dispatch(getAllDogs())}
        // if(temp.length){
        //     let firstTemperament = await temp[0]
        //     console.log(firstTemperament)
        //     dispatch(filterByTemperaments(firstTemperament))
        // }
    }
    function handleRefresh(){
        dispatch(getAllDogs())
    }


  return (
    <div>
        <h2>Filter by:</h2>
        <div>
            <select onChange={e => handleFilterByTemperament(e)} >
            <option value="filterByTemp">Temperaments</option>
            {temperaments && temperaments.map((e,i) => {
                return(
                    <option value={e.temperament} key={i}>{e.temperament}</option>
                )
            })}
            </select>
        </div>
        <div>
            <select onChange={e => handleFilterByCreated(e)} >
            <option value=""></option>
            <option value="dogsApi">Dogs DB</option>
            <option value="dogsDb">Yours Dogs</option>
            </select>
            {temp && temp.map((temperament,i) => {
                return(
                    <button key={i} value={temperament} onClick={(e)=>handleDelete(e)}>
                        {temperament}
                    </button>
                )})}
            <button type="button" onClick={()=>handleRefresh()} >Clear Filters</button>
        </div>
    </div>
  )
}
