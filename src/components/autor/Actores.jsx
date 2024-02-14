/* eslint-disable no-unused-vars */
import React from 'react'
import actores from '../../mocks/results.json'

function Actores() {


  return (
    <div className='container'>
      <h1 style={{textAlign:'center', color:'gray', padding:'10px'}}>Actores</h1>
      <article className='article d-flex flex-wrap justify-content-center m-5'>
        {actores.results.map((actor) =>(
          <div style={{border:'1px solid gray', borderRadius:'5px', width:'15rem', margin:'5px 10px 10px'}} key={actor.id}>
            <img style={{width:'100%'}} src={actor.image} alt={actor.name} />
            <p style={{padding:'5px'}}>{actor.name}</p>
            <p style={{padding:'5px'}}>{actor.species}</p>
          </div>
        ))}
      </article>
    </div>
  )
}

export default Actores