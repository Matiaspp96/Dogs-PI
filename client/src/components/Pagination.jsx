import React, { useState } from 'react'
import s from './styless/Pagination.module.css'

const Pagination = ({page,setPage,maxPage}) => {
    const [input, setInput] = useState(1);

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
        setInput(event.target.value)
    }


  return (
    <div className={s.content}>
        <button onClick={previousPage} disabled={ page < 1 || page === 1} >◄</button>
        <input className={s.input} onChange={e=> handleChange(e)} onKeyDown={e=> handleKeyDown(e)} value={input} name='page' autoComplete='off' />
        <p>de {maxPage}</p>
        <button onClick={nextPage} disabled={ page > maxPage || page === maxPage} >►</button>
    </div>
  )
}

export default Pagination