import React, { useContext, useState } from 'react';
import { Context } from '../context/ContextResultProvider';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { setBodyType, BodyType } = useContext(Context);
    const [type, setType] = useState('');
    const navigate = useNavigate();

    const handle = () => {
        setBodyType(type);

        console.log(BodyType);
        navigate('/exercise');
    };

    return (
        <div>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
            <button onClick={handle}>Start</button>        </div>
    );
};

export default Home;
