/* eslint-disable react/prop-types */


function ActorItem({ actor }) {
  return (
    <div style={{border:'1px solid gray', borderRadius:'5px', width:'15rem', margin:'5px 10px 10px'}}>
        <img style={{width:'100%'}} src={actor.image} alt={actor.name} />
        <p style={{padding:'5px'}}>{actor.name}</p>
        <p style={{padding:'5px'}}>{actor.species}</p>
    </div> 
  )
}

export default ActorItem