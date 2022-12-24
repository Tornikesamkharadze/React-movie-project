import React, { useContext, useState } from "react";
import useAxios from "./axios";

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("The walking dead");
  const { isLoading, movies, error } = useAxios(`&s=${query}`);

  return (
    <Appcontext.Provider value={{ query, setQuery, isLoading, movies, error }}>
      {children}
    </Appcontext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(Appcontext);
};

export { Appcontext, AppProvider, useGlobalContext };
