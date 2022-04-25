import React, { useState } from 'react'

const Pagination = ({page,setPage,maxPerPage}) => {
    const [input, setInput] = useState(1);

    function nextPage(){
        setInput(input + 1)
        setPage(page + 1)
    }
    
    function backPage(){
        if(input >= 1 && page >= 1){
            setInput(input - 1)
            setPage(page - 1)    
        }
    }


  return (
    <div>
        <button onClick={backPage}>◄</button>
        <input type="text" value={input} name='page' autoComplete='off' />
        <p>de {maxPerPage}</p>
        <button onClick={nextPage} >►</button>
        </div>
  )
}

export default Pagination