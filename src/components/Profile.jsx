import React, { useContext, useState } from 'react'
import { Context } from '../context/ContextResultProvider'

const Profile = () => {
  const { BMI, setBMI, BMIresult } = useContext(Context);
  const [weight, setweight] = useState('');
  const [height, setheight] = useState('');

  const cal = () => {
    const BM = Number(weight) / Number((height * height));
    setBMI(Math.floor(BM));

  }
  return (

    <>
      <div>Profile User</div>
      <h1>Calulate The Bode Mass Index</h1>
      <input type="number" placeholder='Wight in (KG)' value={weight} onChange={(e) => setweight(e.target.value)} />
      <input type="number" placeholder='Height in (m)' onChange={(e) => setheight(e.target.value)} value={height} />
      <button onClick={cal}>Calculate</button><br />
      {BMI}<br/>
      {BMIresult}
    </>
  )
}

export default Profile