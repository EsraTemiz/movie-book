
import React from 'react'
import '../assets/css/card.css'
const MovieCard = ({movie,oylar,onVote,enFavoriFilm}) => {


  return (
    <div className={`movie-card  ${enFavoriFilm?.id ===movie.id ? "damgali" :" "}`}  >
 
 
     <img src={movie.image} alt={movie.title} />
     <p><strong>{movie.title}</strong> </p>
       <button className="damga-btn" onClick={()=>onVote(movie.id)}>{oylar[movie.id] || 0}-oy ver
       </button>


    </div>
  )
}

export default MovieCard
