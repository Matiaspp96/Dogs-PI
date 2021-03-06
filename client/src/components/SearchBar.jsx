import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { getDogByName } from '../redux/actions'
import s from './styless/SearchBar.module.css'

export default function SearchBar() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();


    function handleSubmit(event){
        event.preventDefault();
        dispatch(getDogByName(name));
        setName('');
    }


    function handleChange(event){
        event.preventDefault();
        setName(event.target.value)
    }

    function handleKeyDown(event){
        if(event.key === "Enter"){
            event.preventDefault();
            dispatch(getDogByName(name));
            setName('');
        }
    }


  return (
    <div className={s.group}>
        <input
            className={s.input}
            type="text" 
            placeholder='Find your favorite breed...'
            value={name}
            onChange={e => handleChange(e)}
            onKeyDown={e => handleKeyDown(e)}
            />
        <div className={s.icon}>
            <button className={s.gg_search} type="button" onClick={e => handleSubmit(e)} ></button>
        </div>
    </div>
  )
}
