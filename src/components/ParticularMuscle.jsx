import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../context/ContextResultProvider';
import MuscleVideo from './MuscleVideo';
import Loader from './Loader';


const ParticularMuscle = () => {
    const { muscle } = useParams();
    const [Muscle, setMuscle] = useState(muscle);
    const { result, Loading } = useContext(Context);
    const navigate = useNavigate();

    const handle = () => {
        navigate(`/exercise`);   
    }


    const filteredResults = result.filter(item => item.muscle === Muscle);



    if (filteredResults.length === 0) {
        return (
            <div className='min-h-screen min-w-screen flex items-center justify-center bg-black text-white'>
                <p>ERROR 404 NOT FOUND</p>
            </div>
        );
    }

    return (
        <div>
            <div>
                <h1>{muscle}</h1>
                <button onClick={handle}>back</button>
                <div>
                    {filteredResults.map((item, index) => (
                        <div key={index} className='w-50 p-4 m-5 shadow-md bg-white text-black'>
                            <h1>{item.name}</h1>
                            <p>{item.instructions}</p>
                            <h2>{item.difficulty}</h2>
                            <h3>{item.equipment}</h3>
                            <h4>{item.muscle}</h4>
                            <h5>{item.type}</h5>
                        </div>
                    ))}

                    {
                        Loading ? (<Loader/>) : ( <MuscleVideo />)
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default ParticularMuscle;
