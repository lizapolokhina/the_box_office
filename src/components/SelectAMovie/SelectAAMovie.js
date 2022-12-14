import React, { useState, useEffect } from "react";
import { movies } from '../../movies';
import { NumberOfTickets } from "../NumberOfTickets/NumberOfTickets";

export const SelectAMovie = ({ name }) => {
  const [selectedMovie, setSelectedMovie] = useState(undefined);
  //const {movieIndex, setMovieIndex} = useState(null);
  //const [selectShown, setSelectShown] = useState(false)

  useEffect(() => {
    localStorage.setItem('SELECTED_MOVIE', JSON.stringify(selectedMovie))
  }, [selectedMovie])

  const SelectMovie = (event) => {
    console.log("A movie selected - ", event.target.value)
    setSelectedMovie(event.target.value)
    console.log(event.target.value)
}

console.log('state', selectedMovie)

  return (
    <>
    <p>Dear {name}, select a movie: </p>
      <select  value={selectedMovie} onChange={SelectMovie}>
        <option value={''}>Select a movie</option>
        {movies.map((movie, index) => (
          <option value={movie.id} key={index}>
            {movie.title}
          </option>
        )) 
           
        }
      </select>
      {selectedMovie !== undefined && <NumberOfTickets selectedMovie={selectedMovie} />}
       
    </>
  )
}