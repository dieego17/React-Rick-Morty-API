import { useEffect, useState } from 'react'
import { getOneEpisode } from '../services/actoresEpi'

export const useEpisodes = (param) =>{
    const [episodes, setEpisodes] = useState({})

    const loadEpisode = async () =>{
        const oneEpisode = await getOneEpisode(param)
        setEpisodes(oneEpisode)
    }

    useEffect(() =>{
        loadEpisode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param]);

    return episodes
}