/* eslint-disable no-unused-vars */
import React from 'react'
import episodios from '../../mocks/episode.json'
import { Link, Outlet } from 'react-router-dom'


function Episodios() {
  return (
    <div className='container'>
      <h1 style={{textAlign:'center', color:'gray', padding:'10px'}}>Episodios</h1>
      <section style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <article style={{display:'flex', flexWrap:'wrap', justifyContent:'left', width:'50%'}}>
          {episodios.results.map((episodio) =>(
            <div style={{border:'1px solid gray', margin:'10px', width:'190px', height:'60px', padding:'5px 10px'}} key={episodio.id}>
              <Link style={{textDecoration:'none', color:'black'}} to={'/episodios/'+episodio.id}>
                <p>{episodio.id}.{episodio.name}</p>
              </Link>
            </div>
          ))}
        </article>
        <article style={{display:'flex', flexWrap:'wrap', justifyContent:'center', border:'1px solid gray', width:'50%'}}>
          <Outlet />
        </article>
      </section>
    </div>
  )
}

export default Episodios