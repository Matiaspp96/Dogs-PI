import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar(){
    return(
        <div>
            <NavLink to='/create' >Create your own Breeds</NavLink>
        </div>
    )
}