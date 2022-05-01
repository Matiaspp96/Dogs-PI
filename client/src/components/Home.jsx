import React from 'react'
import NavBar from './NavBar';
import Header from './Header'
import DogArea from './DogArea';
import s from './styless/Home.module.css'


export default function Home() {
  return (
    <div className={s.Body}>
        <Header />
        <NavBar />
        <DogArea />
    </div>
  )
}
