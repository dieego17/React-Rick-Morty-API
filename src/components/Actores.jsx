import ActorItem from './ActorItem';
import { useActor } from '../hooks/useActor';


function Actores() {
  
  const actores = useActor()

  return (
    <div className='container'>
      <h1 style={{textAlign:'center', color:'gray', padding:'10px'}}>Actores</h1>
      <article className='article d-flex flex-wrap justify-content-center m-5'>
        {actores.map(actor => (
          <ActorItem key={actor.id} actor = {actor} />
        ))}
      </article>
    </div>
  )
}

export default Actores


