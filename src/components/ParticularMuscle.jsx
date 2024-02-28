import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../context/ContextResultProvider';
import MuscleVideo from './MuscleVideo';
import Loader from './Loader';

const ParticularMuscle = () => {
    const { muscle } = useParams();
    const { result, Loading } = useContext(Context);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(`/exercise`);
    };

    // Filter results based on the selected muscle
    const filteredResults = result.filter(item => item.muscle === muscle);

    // If no results found, show the back button and return early
    if (filteredResults.length === 0) {
        return (
            <div>
                <h1>{muscle}</h1>
                <button onClick={handleBack}>Back</button>
                <p>No exercises found for this muscle.</p>
            </div>
        );
    }

    // If Loading is true, show the Loader
    if (Loading) {
        return <Loader />;
    }

    // If Loading is false and there are results, show the results and MuscleVideo
    return (
        <div>
            <h1>{muscle}</h1>
            <button onClick={handleBack}>Back</button>
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
            <MuscleVideo />
        </div>
    );
};

export default ParticularMuscle;
