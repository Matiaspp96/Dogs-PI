import React from 'react'
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import FilterSort from './FilterSort'
import SearchBar from './SearchBar'
// import Pagination from './Pagination'
import s from './styless/NavBar.module.css'


export default function NavBar(){
    return(
        <div className={s.navbar}>
            <NavLink to='/create' ><p className={s.link}>Create your own Dog</p></NavLink>
            <div className={s.search_bar}>
            <SearchBar />
            </div>
            <div className={s.filter}>
            <FilterSort/>
            </div>
        </div>
    )
}