import React from 'react'

export default function Card({ id, name, image, temperament, weight_max, weight_min}){
  return (
    <div key={id}>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{temperament}</p>
        <p>{weight_max} Kg</p>
        <p>{weight_min} Kg</p>
        <p>See more...</p>
    </div>
  )
}
