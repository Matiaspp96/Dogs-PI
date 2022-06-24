import React from 'react'
import { getDetailDog } from '../redux/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import Loading from './Loading';
import s from './styless/Detail.module.css'

export default function Detail() {
    const dog = useSelector(state => state.dogDetail[0]);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetailDog(id))
    }, [dispatch, id])

    console.log(dog)
        return (
    <div>
      <Header />
      <Link to='/dogs' className={s.btn_back}>Back</Link>
      {!dog ? <Loading/> : 
      <div className={s.container}>
        <div className={s.detail}>
          <div className={s.info}>
          <p className={s.h3}>{dog.name}</p>
          <p className={s.p}>Height: {dog.height_max}cm  - {dog.height_min}cm</p>
          <p className={s.p}>Weight: {dog.weight_max}kg - {dog.weight_min}kg</p>
          <p className={s.p}>Life Span: {dog.life_span}</p>
          <p className={s.p}>Temperaments: </p>
          <p className={s.p}>{dog.createdInDB ? dog.temperaments.map(e => e.temperament).join(", "):
          dog.temperament}</p>
          </div>
          <img className={s.image} src={dog.image} alt={dog.name} />
        </div>
      </div>
      }
    </div>
  )
}
