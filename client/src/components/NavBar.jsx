import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import FilterSort from './FilterSort'
import Hamburguer from './Hamburguer'
import SearchBar from './SearchBar'
// import Pagination from './Pagination'
import s from './styless/NavBar.module.css'


export default function NavBar(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    console.log(screenWidth)
    return(
        <div className={s.navbar}>
            {screenWidth > 640 ? null :
                <div onClick={toggleNav}>
                    <Hamburguer toggleMenu={toggleMenu}/>
                </div>
            }
            {screenWidth > 640 || toggleMenu ? 
            <div className={s.navbar}>
                <NavLink to='/create' className={s.link_parent}><p className={s.link}>Create your own Dog</p></NavLink>
                <div className={s.search_bar}>
                <SearchBar />
                </div>
                <div className={s.filter}>
                <FilterSort/>
                </div>
            </div>
             : null}
        </div>
    )
}