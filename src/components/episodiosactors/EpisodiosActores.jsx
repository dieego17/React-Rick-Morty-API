/* eslint-disable no-unused-vars */
import React from 'react'
import episodios from '../../mocks/episode.json'
import { useParams } from 'react-router-dom'

function EpisodiosActores() {

  const params = useParams()

  const getCharacters = (id) =>{
    // Convertir el parámetro de la URL a un número antes de compararlo con el ID del episodio
    const episodeId = parseInt(id);
    return episodios.results.find((episodio) => episodio.id === episodeId);
  }

  let character = getCharacters(params.id)

  return (
    <div className='container'>
      <h2 style={{textAlign:'center'}}>Capitulo: {character.id}</h2>
      <h3 style={{textAlign:'center', fontSize:'1rem', color:'blue'}}>{character.name}</h3>
      {
        character.characters.map((actor, index) =>(
          <img key={index} src={actor} alt={`Actor ${index + 1}`} />
        ))
      }
    </div>
  )
}

export default EpisodiosActores