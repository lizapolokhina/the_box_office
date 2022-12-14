import React, { useState } from "react";
import { movies } from "../../movies";

export const TicketMessage = ({ numberOfTickets, selectedMovie, hasError, setName, selectConfirmedNumber }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const isTheOrder = () => {
    setIsConfirmed(true);
    selectConfirmedNumber();
  }

  const clear = () => {
    localStorage.setItem('CUSTOMER_NAME', '');
    setName("");
    setIsConfirmed(false);
  }

  const chosenMovieTitle = movies.filter(movie => movie.id.toString() === selectedMovie)[0].title;
  const moviesArr = JSON.parse(localStorage.getItem('NUMBER_OF_TICKETS'));
  const ticketsLeft = moviesArr[selectedMovie];

  return (
    <>
    <div>
      <h2> Is this your order? </h2>
      <h3> {numberOfTickets} tickets for "{chosenMovieTitle}" </h3>
    </div>
    {ticketsLeft && <p>Tickets left: {ticketsLeft}</p> }
    <button onClick={isTheOrder}>
      confirm
    </button>
    {isConfirmed && !hasError && 'thanks for your order'}
    {hasError && 'sorry, we are running out of tickets. Please select a lower number'}

    <button onClick={clear}>
      clear
    </button>
    </>
  )
}
/*
<select value={state} onChange={isTheOrder}>
      <option value="yes">yes</option>
      <option value="no">no</option>
    </select>
    {state !== 'yes' && <SelectAMovie />}
    {state === 'yes' && 'Thanks for your order!'}
*/