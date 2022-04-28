import React from 'react'
import { getDetailDog } from '../redux/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Header from './Header';
import Loading from './Loading';

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
      {!dog ? <Loading/> : 
      <div>
        <img src={dog.image} alt={dog.name} />
        <h1>{dog.name}</h1>
        <p>Weight Max.: {dog.height_max} cm</p>
        <p>Weight Max.: {dog.height_min} cm</p>
        <p>Weight Max.: {dog.weight_max} kg</p>
        <p>Weight Max.: {dog.weight_min} kg</p>
        <p>Life Span: {dog.life_span}</p>
        <p>Temperamentos: </p>
        <p>{dog.createdInDB ? dog.temperaments.map(e => e.temperament).join(", "):
        dog.temperament}</p>
      </div>
      }
    </div>
  )
}
