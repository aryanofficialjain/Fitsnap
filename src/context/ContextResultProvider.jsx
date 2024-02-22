import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

export const Context = createContext();

export const ContextResultProvider = ({ children }) => {
    const [result, setResult] = useState([]);
    const [muscle, setMuscle] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
                params: { muscle: muscle },
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
                }
            };
            
            try {
                const response = await axios.request(options);
                console.log(response.data);
                setResult(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const debounce = (func, delay) => {
            let timeoutId;
            return function(...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                }, delay);
            };
        };

        const delayedFetchData = debounce(fetchData, 500); // Set debounce delay to 500ms

        delayedFetchData(); // Call delayedFetchData directly inside useEffect

    }, [muscle]);

    const value = {
        result,
        setResult,
        muscle,
        setMuscle,
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export const useResultProvider = () => useContext(Context);
