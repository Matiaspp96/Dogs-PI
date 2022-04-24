import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {createDog, getAllTemperaments} from '../redux/actions'

export default function Create(){
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)
    const [dog, setDog] = useState({
        name:'',
        height_max: '',
        height_min: '',
        weight_max: '',
        weight_min: '',
        life_span: '',
        temperament:[],
        image: '',
    })

    useEffect(()=>{
        dispatch(getAllTemperaments())
    }, [dispatch])

    function handleChange(event){
        event.preventDefault();
        setDog(dog => {
            let newDog={
                ...dog,
                [event.target.name]: event.target.value
            };
            return newDog;
        })
    };

    function handleTemperaments(event){
        if(!dog.temperament.includes(event.target.value)){
            setDog({
                ...dog,
                temperament:[...dog.temperament, event.target.value]
            })
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        if(dog.name && dog.height_max && dog.height_min && dog.weight_max && dog.weight_min && dog.temperament && dog.life_span){
            dispatch(createDog(dog))
            alert("Dog created successfully!", {/* <img src={dog.image}/> */})
            setDog({
                name:'',
                height_max: '',
                height_min: '',
                weight_max: '',
                weight_min: '',
                life_span: '',
                temperament:[],
                image: '',
            })
        } else {
            alert("Complete all required fields")
        }
    }
    
    function handleDelete(event){

    }

    return(
        <div>
            <form onSubmit={e=>handleSubmit(e)} type="submit">
                <label > Name Breed <input onChange={e=>handleChange(e)} type="text" id='name' name='name' placeholder='Breed...' /></label>
                <label > Weight Max. <input type="text" name='weight_max' value={dog.weight_max} onChange={e=>handleChange(e)}/></label>
                <label > Weight Min. <input type="text" name='weight_min' value={dog.weight_min} onChange={e=>handleChange(e)}/></label>
                <label > Height Max. <input type="text" name='height_max' value={dog.height_max} onChange={e=>handleChange(e)}/></label>
                <label > Height Min. <input type="text" name='height_min' value={dog.height_min} onChange={e=>handleChange(e)}/></label>
                <label > Life-Span <input type="text" name='life_span' value={dog.life_span} onChange={e=>handleChange(e)}/></label>
                {!temperaments ? null : <label>Temperaments
                <select onChange={e=>handleTemperaments(e)} >
                {temperaments.map((e,i)=>{
                    return <option value={e.temperament} key={i} >{e.temperament}</option> 
                })}
                {
                    dog.temperament.length < 3 ? <span> Select 3 temperament</span> : null
                }   
                </select></label>}
                <div>
                    {!dog.temperament ? null : dog.temperament.map((e,i) =>{
                        return(
                            <article key={i}><span>{e}</span>
                            <button value={e} onClick={e=>handleDelete(e)}>x</button>
                            </article>
                        )})}
                </div>
                <label > Image <input type="text" name='image' value={dog.image} onChange={e=>handleChange(e)}/></label>
                <button onSubmit={e=>handleSubmit(e)} type="submit" >Create Dog</button>
            </form>
        </div>
    )
}