import React, { useContext, useState } from 'react';
import { Context } from '../context/ContextResultProvider';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import herologo from "../../assets/hero-logo.png";

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
            
            <div className='min-h-screen bg-black text-white flex flex-wrap item-center justify-evenly'>
            <Navbar/>
                <div className=" h-full p-4 mt-32 ">
                    <h1 className='text-6xl'>GET READY FOR <br/> FIGHT</h1>
                    <p className='py-5 px-1'>HEALTHY MIND LIVES IN A HEALTHY BODY</p>

                    <div className='p-2 flex gap-2'>
                    <input type="text" value={type} className='text-black flex-1 p-1 border-none outline-none' onChange={(e) => setType(e.target.value)} />
                    <button onClick={handle} className='px-3 py-1 bg-red-700'>Start</button>
                    </div>
                    
                </div>
                <div className='p-3 w-[32%]'>
                    <img src={herologo} className='w-full' alt="" />
                </div>

            </div>
            
            
        </div>
    );
};

export default Home;
