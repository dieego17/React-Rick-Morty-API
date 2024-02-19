/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function EpisodiosItem({ episodio }) {
  return (
    <div style={{border:'1px solid gray', margin:'10px', width:'190px', height:'60px', padding:'5px 10px'}}>
        <Link style={{textDecoration:'none', color:'black'}} to={`/episodios/${episodio.id}`}>
            <p>{episodio.id}.{episodio.name}</p>
        </Link>
    </div>
  )
}

export default EpisodiosItem