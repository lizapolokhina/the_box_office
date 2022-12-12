import React, { useState, useEffect } from "react";
import { movies } from '../../movies';
import { NumberOfTickets } from "../NumberOfTickets/NumberOfTickets";

export const SelectAMovie = () => {
  const [selectedMovie, setSelectedMovie] = useState('default');
  //const [selectShown, setSelectShown] = useState(false)

  useEffect(() => {
    localStorage.setItem('SELECTED_MOVIE', JSON.stringify(selectedMovie))
  }, [selectedMovie])

  const SelectMovie = (event) => {
    console.log("A movie selected - ", event.target.value)
    setSelectedMovie(event.target.value)
}

  return (
    <>
      <select  value={selectedMovie} onChange={SelectMovie}>
        <option value='default'>Select a movie</option>
        {movies.map((movie, index) => (
          <option value={movie.title} key={index}>
            {movie.title}
          </option>
        )) 
           
        }
      </select>
      {selectedMovie !== 'default' && <NumberOfTickets />}
       
    </>
  )
}