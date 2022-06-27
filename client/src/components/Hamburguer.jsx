import React from 'react'
import s from './styless/Hamburguer.module.css'

export default function Hamburguer({toggleMenu}) {
    console.log(toggleMenu)
  return (
    <div className={s.hamburguer}>
        <div className={toggleMenu ? s.burguer_transform : s.burguer}></div>
        <div className={toggleMenu ? s.burguer_transform : s.burguer}></div>
        <div className={toggleMenu ? s.burguer_transform : s.burguer}></div>
    </div>
    )
}
