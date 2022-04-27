import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { getDogByName } from '../redux/actions'

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


  return (
    <div className='search'>
        <div>
            <input
             type="text" 
             placeholder='Find your favorite breed...'
             value={name}
             onChange={e => handleChange(e)}
             />
            <div>
                <button className='' type='submit' onClick={e => handleSubmit(e)} >🔍</button>
            </div>
        </div>
        <div className='dataResults'>

        </div>
    </div>
  )
}
