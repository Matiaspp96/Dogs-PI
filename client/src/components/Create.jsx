import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {createDog, getAllTemperaments} from '../redux/actions'
import Header from './Header'
import s from './styless/Create.module.css'

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
    
    function handleDelete(event){
        setDog({
            ...dog,
            temperament: dog.temperament.filter(temp => temp !== event)
        })
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
    

    return(
        <div>
            <Header/>
            <div className={s.container}>
            <Link to='/dogs' className={s.btn_back}>Back</Link>
            <p className={s.section}>Create your own dog</p>
            <form onSubmit={e=>handleSubmit(e)} type="submit" className={s.form}>
                <p className={s.title}>Dog details</p>
                <p className={s.subtitle}>Please fill this information so we can create your dog</p>
                <hr />
                <div className={s.input_container}>
                <label className={s.label_name}><p className={s.label_p}> Name </p><input onChange={e=>handleChange(e)} type="text" id='name' name='name' placeholder='Name...' /></label>
                <label className={s.label_lifespan}><p className={s.label_p}> Life Span </p><input type="text" name='life_span' placeholder='12 years...' value={dog.life_span} onChange={e=>handleChange(e)}/></label>
                <label className={s.label_weight_max}><p className={s.label_p}> Weight Max. </p><input type="text" name='weight_max' placeholder='24kg...' value={dog.weight_max} onChange={e=>handleChange(e)}/></label>
                <label className={s.label_weight_min}><p className={s.label_p}> Weight Min. </p><input type="text" name='weight_min' placeholder='18kg...' value={dog.weight_min} onChange={e=>handleChange(e)}/></label>
                <label className={s.label_height_max}><p className={s.label_p}> Height Max. </p><input type="text" name='height_max' placeholder='35cm...' value={dog.height_max} onChange={e=>handleChange(e)}/></label>
                <label className={s.label_height_min}><p className={s.label_p}> Height Min. </p><input type="text" name='height_min' placeholder='28cm...' value={dog.height_min} onChange={e=>handleChange(e)}/></label>
                {!temperaments ? null : <label className={s.label_temperaments}><p className={s.label_p}> Temperaments </p>
                <select onChange={e=>handleTemperaments(e)} >
                {temperaments.map((e,i)=>{
                    return <option value={e.temperament} key={i} >{e.temperament}</option> 
                })}
                </select></label>}
                <ul className={s.list}>
                    {dog.temperament.map((e,i) =>{
                        return(
                            <li key={i}>
                                <button className={s.item} type="button" key={i} value={e} onClick={()=>handleDelete(e)}>{e}</button>
                            </li>
                        )})}
                </ul>
                <label className={s.label_img}><p className={s.label_p}> Image </p><input type="text" name='image' placeholder='URL...' value={dog.image} onChange={e=>handleChange(e)}/></label>
                </div>
                <button onSubmit={e=>handleSubmit(e)} type="submit" className={s.btn}>Create Dog</button>
            </form>
            </div>
        </div>
    )
}