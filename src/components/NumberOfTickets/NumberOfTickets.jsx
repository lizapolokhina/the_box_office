import React, { useState } from "react";
import PropTypes from 'prop-types';
import { movies } from "../../movies";
import { TicketMessage } from "../TicketMessage/TicketMessage";
import './NumberOfTickets.scss';

export const NumberOfTickets = ({ selectedMovie, setName }) => {
  const [numberOfTickets, setNumberOfTickets] = useState(JSON.parse(localStorage.getItem('NUMBER_OF_TICKETS'))
  );

  const [currentNumber, setCurrentNumber] = useState(0);
  const [error, setError] = useState(false);

  const selectConfirmedNumber = () => {
    const newArr = numberOfTickets;

    if (selectedMovie && newArr[selectedMovie] - currentNumber > 0) {
      newArr[selectedMovie] = newArr[selectedMovie] - currentNumber;
    } else {
      setError(true);
      return;
    }

    setNumberOfTickets(newArr);
    localStorage.setItem('NUMBER_OF_TICKETS', JSON.stringify(newArr));
  };

  const selectANumber = (event) => {
    console.log("Number of tickets selected - ", event.target.value);
    setCurrentNumber(event.target.value);
  };

  const chosenMovie = movies.filter(movie => movie.id.toString() === selectedMovie)[0];

  return (
    <>
      <select value={currentNumber} onChange={selectANumber} className="selectANumber">
        <option>0</option>
        {[ ...Array(chosenMovie.amountOfTickets).keys()].map((seat) => (
            <option key={seat}>
              {seat}
            </option>
          )) 
        }
      </select>

      {numberOfTickets !== 0 && selectedMovie !== undefined &&
        <TicketMessage 
          numberOfTickets={currentNumber} 
          selectedMovie={selectedMovie}
          hasError={error}
          setName={setName}
          selectConfirmedNumber={selectConfirmedNumber}
        />}
    </>
  );
};

NumberOfTickets.propTypes = {
  selectedMovie: PropTypes.string,
  setName: PropTypes.func,
};
