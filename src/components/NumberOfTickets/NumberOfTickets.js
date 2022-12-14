import React, { useState, useEffect } from "react";
//import { seats } from "../../Seats";
import { movies } from "../../movies";
import { TicketMessage } from "../TicketMessage/TicketMessage";

export const NumberOfTickets = ({ selectedMovie }) => {
  const [numberOfTickets, setNumberOfTickets] = useState(movies.map(el => el.amountOfTickets));
  const [currentNumber, setCurrentNumber] = useState(0);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('NUMBER_OF_TICKETS', JSON.stringify(numberOfTickets))
  }, [numberOfTickets, currentNumber]);

  console.log(selectedMovie);

  const selectANumber = (event) => {
    console.log("Number of tickets selected - ", event.target.value);
    setCurrentNumber(event.target.value);

    const newArr = numberOfTickets;

    if (selectedMovie && newArr[selectedMovie] - event.target.value > 0) {
      newArr[selectedMovie] = newArr[selectedMovie] - event.target.value;
    } else {
      setError(true);
      return;
    }

    setNumberOfTickets(newArr);
    
    //numberOfTickets - setNumberOfTickets???

    //var foo = [ ...Array(N).keys() ];
  }

  const chosenMovie = movies.filter(movie => movie.id.toString() === selectedMovie)[0];

  return (
    <>
      <select value={currentNumber} onChange={selectANumber}>
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
          />}
    </>
  )
}