import axios from "axios";
import React, { useEffect, useState } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useAxios = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });

  const getData = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      if (data.Response === "True") {
        setError({ show: false, msg: "" });
        setMovies(data.Search || data);
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, movies, error };
};

export default useAxios;
