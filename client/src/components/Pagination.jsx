import React, { useState } from 'react'
import { useEffect } from 'react';
import s from './styless/Pagination.module.css'

const Pagination = ({page,setPage,maxPage}) => {
    const [input, setInput] = useState(1);

    useEffect(() => {
        if(input > maxPage){
            setInput(1)
            setPage(1)
        }
    }, [maxPage])

    function nextPage(){
        setInput(input + 1)
        setPage(page + 1)
    }
    
    function previousPage(){
        if(input >= 1 && page >= 1){
            setInput(input - 1)
            setPage(page - 1)    
        }
    }

    function handleKeyDown(event){
        if(event.keyCode === 13){ // 13 "enter"
            setPage(parseInt(event.target.value))
            if(parseInt(event.target.value < 1 || 
            parseInt(event.target.value) > Math.ceil(maxPage) || 
            isNaN(parseInt(event.target.value))))
            {
                setPage(1);
                setInput(1);
            } else {
                setPage(parseInt(event.target.value))
            }
        }
    }

    
    function handleChange(event){
        event.preventDefault();
        console.log(event.target.value)
        if(isNaN(event.target.value) || event.target.value > Math.ceil(maxPage)){
            setInput(1)
        } else {
            setInput(parseInt(event.target.value))
        }
    }


  return (
    <div className={s.content}>
        <button className={s.button} onClick={previousPage} disabled={ page < 1 || page === 1} >◄</button>
        <input type='number' className={s.input} onChange={e=> handleChange(e)} onKeyDown={e=> handleKeyDown(e)} value={input} name='page' autoComplete='off' />
        <p>de {maxPage}</p>
        <button className={s.button} onClick={nextPage} disabled={ page > maxPage || page === maxPage} >►</button>
    </div>
  )
}

export default Pagination