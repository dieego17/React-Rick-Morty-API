const API_URL = 'https://rickandmortyapi.com/api/';

export async function getAllCharacters() {
    const response = await fetch(`${API_URL}/character`)
    const data = await response.json()
    return data;
}

export async function getAllEpisodes(){
    const response = await fetch(`${API_URL}/episode`)
    const data = await response.json()
    return data;
}

export const getOneEpisode = async (episodeId) => {
    const result = await fetch(`${API_URL}episode/${episodeId}`);
    const episode = await result.json();
    return episode;
};

export const getOneActor = (actors) => {
    let images = [];
    actors.forEach(async (actorurl) => {
      const result = await fetch(actorurl);
      const actor = await result.json();
      images.push(actor.image);
    });

    return images;
};
  