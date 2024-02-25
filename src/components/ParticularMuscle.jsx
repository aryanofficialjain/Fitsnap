import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../context/ContextResultProvider';

const ParticularMuscle = () => {
    const { muscle } = useParams();
    const particularMuscle = muscle;
    const { result } = useContext(Context);

    const filteredResults = result.filter(item => item.muscle === particularMuscle);


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
                </div>
            </div>
        </div>
    );
};

export default ParticularMuscle;
