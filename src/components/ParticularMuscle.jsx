import React from 'react'
import { useParams } from 'react-router-dom'

const ParticularMuscle = () => {
    const {muscle} = useParams();
  return (
    <div>{muscle}</div>
  )
}

export default ParticularMuscle