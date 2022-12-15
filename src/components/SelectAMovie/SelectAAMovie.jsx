import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { movies } from '../../movies';
import { NumberOfTickets } from "../NumberOfTickets/NumberOfTickets";
import './SelectAMovie.scss';

export const SelectAMovie = ({ name, setName }) => {
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  useEffect(() => {
    localStorage.setItem('SELECTED_MOVIE', JSON.stringify(selectedMovie))
  }, [selectedMovie]);

  const SelectMovie = (event) => {
    console.log("A movie selected - ", event.target.value)
    setSelectedMovie(event.target.value)
};

  return (
    <>
      <p className="selectMessage">Dear {name}, select a movie: </p>
        <select  value={selectedMovie} onChange={SelectMovie} className="selectAMovie">
          <option value={''} className="selectAMovie__option">Select a movie</option>
          {movies.map((movie, index) => (
            <option value={movie.id} key={index} className="selectAMovie__option">
              {movie.title}
          </option>
          ))};
        </select>

      {selectedMovie !== undefined && <NumberOfTickets selectedMovie={selectedMovie} setName={setName} />}
       
    </>
  );
};

SelectAMovie.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
};
