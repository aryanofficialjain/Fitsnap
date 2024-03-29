import React, { useContext, useState } from 'react';
import { Context } from '../context/ContextResultProvider';
import Loader from "./Loader";
import { useNavigate } from 'react-router-dom';

const ExerciseResult = () => {
  const [value, setValue] = useState('');
  const { setMuscle, result, Loading, BodyType, setMuscleVideo } = useContext(Context);
  const navigate = useNavigate();

  const handle = () => {
    setMuscle(value);
    navigate(`/${value}`)
    setMuscle('');
  };

  const btnhandle = (item) => {
    // setMuscle(item.muscle);
    setMuscleVideo(item.muscle);
    navigate(`/${item.muscle}`);
    setMuscle(BodyType);
    console.log(item.muscle);
  };


  return (
    <div>
      {Loading ? (
        <Loader />
      ) : (
        <div>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={handle}>Go</button>

          <div className='flex gap-3 '>
            {result.map((item, index)=> (
              <div key={index} className='p-3 rounded-lg'>
                <button onClick={() => btnhandle(item)}>{item.muscle}</button>
              </div>
            ))}
          </div>
          <div className='flex flex-wrap gap-4 bg-black text-white'>
            {result.map((item, index) => (
              BodyType === item.type ? (
                <div key={index} className='w-50 p-4 m-5 shadow-md bg-white text-black'>
                  <h1>{item.name}</h1>
                  <p>{item.instructions}</p>
                  <h2>{item.difficulty}</h2>
                  <h3>{item.equipment}</h3>
                  <h4>{item.muscle}</h4>
                  <h5>{item.type}</h5>
                </div>
              ) : ( // for ramdom exercises 
                <div key={index} className='w-50 p-4 m-5 shadow-md bg-white text-black'>
                  <h1>{item.name}</h1>
                  <p>{item.instructions}</p>
                  <h2>{item.difficulty}</h2>
                  <h3>{item.equipment}</h3>
                  <h4>{item.muscle}</h4>
                  <h5>{item.type}</h5>
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseResult;
