import { useParams } from "react-router-dom"; 
import { useEpisodes } from '../hooks/oneEpisode';
import EpisodeActors from "./EpisodeActors";


function EpisodiosActores() {
  
  const params = useParams();
  const param = params.id
  const episode = useEpisodes(param)

  return (
    <article className='container' style={{margin:'10px 10px 20px', border:'1px solid gray'}}>
      <div className="d-flex flex-column align-items-center">
        <h2>Capitulos: {episode.id}</h2>
        <p>{episode.name}</p>
      </div>
      <EpisodeActors characters={ episode.characters } />
    </article>
);

}

export default EpisodiosActores;
