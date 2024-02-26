import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const ContextResultProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [muscle, setMuscle] = useState("");
  const [Loading, setLoading] = useState(false);
  const [BodyType, setBodyType] = useState("");
  const [MuscleVideo, setMuscleVideo] = useState("");
  const [VideoData, setVideoData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
        params: { muscle: muscle },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      };

      try {
        setLoading(true);
        const response = await axios.request(options);
        console.log(response.data);
        setResult(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData(); // Call fetchData directly
  }, [muscle]); // Remove debounce dependency

  useEffect(() => {
    const fetchdata = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
        params: { q: `${MuscleVideo}` },
        headers: {
          "X-RapidAPI-Key":
            "83888ec039mshe14aa2763a37e31p12244fjsn136ace113459",
          "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        console.log(response.data.videos);
        setVideoData(response.data.videos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  },[MuscleVideo]);

  const value = {
    result,
    setResult,
    muscle,
    setMuscle,
    Loading,
    setBodyType,
    BodyType,
    MuscleVideo,
    setMuscleVideo,
    VideoData,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useResultProvider = () => useContext(Context);
