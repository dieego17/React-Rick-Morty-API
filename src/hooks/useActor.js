import { useEffect, useState } from 'react'
import { getAllCharacters } from '../services/actoresEpi';

export const useActor = () =>{

    const [actores, setActores] = useState([]);

    const allactors = async () => {
        const data = await getAllCharacters()
        setActores(data.results); 
    };

    useEffect(() =>{
        allactors();
    }, []);

    return actores
}