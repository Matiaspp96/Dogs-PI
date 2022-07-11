import React from 'react'
import s from './styless/Card.module.css'

export default function Card({ id, name, image, temperament, weight_max, weight_min}){
  return (
    <div className={s.content}>
      <div key={id} className={s.card} >
        <img src={image} alt={name} className={s.card_img} />
        <div className={s.card_info}>
          <p className={s.text_title}>{name}</p>
          <div className={s.text_body}>
            <p>{temperament}</p>
            <p className={s.text_info}>Max: {weight_max}Kg</p>
            <p className={s.text_info}>Min: {weight_min}Kg</p>
            <p className={s.text_info}>See more..</p>
          </div>
        </div>
      </div>
    </div>
  )
}
