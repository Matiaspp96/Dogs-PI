import React from 'react'
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import FilterSort from './FilterSort'
import SearchBar from './SearchBar'
// import Pagination from './Pagination'


export default function NavBar(){
    return(
        <div>
            <NavLink to='/create' >Create your own Dog</NavLink>
            <FilterSort/>
            <SearchBar />
        </div>
    )
}