/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom'
import EpisodiosItem from './EpisodiosItem'
import { useEpisodes } from '../hooks/useEpisode'

function Episodios() {

  const episodes = useEpisodes()

  return (
    <div className='container'>
      <h1 style={{textAlign:'center', color:'gray', padding:'10px'}}>Episodios</h1>
      <section style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <article style={{display:'flex', flexWrap:'wrap', justifyContent:'left', width:'50%'}}>
          {episodes.map((episodio) =>(
            <EpisodiosItem key={ episodio.id } episodio={ episodio } />
          ))}
        </article>
        <article style={{display:'flex', flexWrap:'wrap', justifyContent:'center', width:'50%'}}>
          <Outlet />
        </article>
      </section>
    </div>
  )
}

export default Episodios