import React, { useContext, useEffect, useState } from "react"

const API_URL = `http://www.omdbapi.com/?apikey=db024b5f&s=titanic`;

const AppContext = React.createContext();

//we need to create Provider
const AppProvider = ({children})=>{

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show: "false", msg: ""});

    const getMovies = async(url) =>{
       
        try{
const res = await fetch (url);
const data = await res.json();
console.log(data);

if(data.Response === "True") {

    setIsLoading(false);
    setMovie(data.Search);

}

else {

    setIsError({
show:true,
msg: data.error,

    });

}

        }catch (error) {

console.log(error);

        }

    }

    useEffect( ()=>{
    
        getMovies(API_URL);

    }, []);

return <AppContext.Provider value={{isLoading, isError, movie}}>{children}</AppContext.Provider>;
};

// use globle custom hook

const useGlobleContext = () =>{

    return useContext(AppContext);
}

export default  AppProvider;
export{AppContext, useGlobleContext};