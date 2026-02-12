
import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,oylar,onVote ,enFavoriFilm}) => {
  return (
    <>
    {movies.map(movie=>(
 
      <MovieCard key={movie.id} movie={movie} oylar={oylar} onVote={onVote}  enFavoriFilm={enFavoriFilm}  />

    ))} 
    </>
  )
}

export default MovieList
