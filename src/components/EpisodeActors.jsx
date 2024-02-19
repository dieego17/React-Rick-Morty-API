/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getOneActor } from "../services/actoresEpi";

function EpisodeActors({ characters }) {

    const [actorImages, setActorImages] = useState([]);

    const loadImages = (characters) => {
        // Mostramos 12 Actores
        characters = characters.length > 12 ? characters.slice(0, 12) : [...characters];
        // Actualización del estado con las imagenes de los actores de un capítulo
        setActorImages(getOneActor(characters));
    };

    useEffect(() => {
        if (characters) {
          loadImages(characters);
        }
      }, [characters]);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {actorImages.map((image) => (
        <img style={{ width:'100px', borderRadius:'5px', margin: '5px 0px' }} key={image} src={image} alt={image} />
      ))}
    </div>
  )
}

export default EpisodeActors