import React from 'react'
import { Link } from 'react-router-dom'
import s from './styless/Header.module.css'

export default function Header() {
  return (
    <div className={s.header}>
        <Link to='/dogs' className={s.title}>Dog App</Link>
    </div>
  )
}
