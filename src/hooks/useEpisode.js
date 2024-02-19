import { useEffect, useState } from 'react'
import { getAllEpisodes } from '../services/actoresEpi'

export const useEpisodes = () =>{
    const [episodes, setEpisodes] = useState([])

    const allepisodes = async () =>{
        const data = await getAllEpisodes()
        setEpisodes(data.results)
    }

    useEffect(() =>{
        allepisodes()
    }, [])

    return episodes
}