import React from 'react'
import { useGlobleContext } from './context';
const Movies = () => {
  const {movie} = useGlobleContext();  
  return (
   <>
   {
      movie.map((curMovie) => {
     return (
      <div key={curMovie.imdbID}>
     <h2>Movie List: {curMovie.Title}</h2>
    </div>
     ) }
    )
 }
    </>
  )}

export default Movies