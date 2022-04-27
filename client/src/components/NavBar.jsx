import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
// import Pagination from './Pagination'


export default function NavBar(){
    return(
        <div>
            <NavLink to='/create' >Create your own Dog</NavLink>
            <section>Filtros</section>
            <SearchBar />
        </div>
    )
}