import React, { useState } from "react";
import { movies } from "../../movies";

export const TicketMessage = ({ numberOfTickets, selectedMovie, hasError }) => {
  const [state, setState] = useState(false);

  const isTheOrder = () => {
    setState(true);
  }

  const chosenMovieTitle = movies.filter(movie => movie.id.toString() === selectedMovie)[0].title;

  return (
    <>
    <div>
      <h2> Is this your order? </h2>
      <h3> {numberOfTickets} tickets for "{chosenMovieTitle}" </h3>
    </div>
    <button onClick={isTheOrder}>
      confirm
    </button>
    {state && !hasError && 'thanks for your order'}
    {hasError && 'sorry, we are running out of tickets. Please select a lower number'}
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