import React, { useState } from "react";
import PropTypes from 'prop-types';
import { movies } from "../../movies";
import './TicketMessage.scss';

export const TicketMessage = ({ numberOfTickets, selectedMovie, hasError, setName, selectConfirmedNumber }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const isTheOrder = () => {
    setIsConfirmed(true);
    selectConfirmedNumber();
  };

  const clear = () => {
    localStorage.setItem('CUSTOMER_NAME', '');
    setName("");
    setIsConfirmed(false);
  };

  const chosenMovieTitle = movies.filter(movie => movie.id.toString() === selectedMovie)[0].title;
  const moviesArr = JSON.parse(localStorage.getItem('NUMBER_OF_TICKETS'));
  const ticketsLeft = moviesArr[selectedMovie];

  return (
    <>
      <div className="ticketMessage">
        <div>
          <p> Is this your order? </p>
          <p> {numberOfTickets} tickets for `{chosenMovieTitle}` </p>
        </div>

        {ticketsLeft && <p>Tickets left: {ticketsLeft}</p>}

        <button 
          onClick={isTheOrder}
          className="ticketMessage__confirm-button"
        >
          confirm
        </button>

        {isConfirmed && !hasError && 'thanks for your order'}
        {hasError && 'sorry, we are running out of tickets. Please select a lower number'}

          <button 
            onClick={clear}
            className="ticketMessage__clear-button"
          >
            clear
          </button>
      </div>
    </>
  );
};

TicketMessage.propTypes = {
  numberOfTickets: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  selectedMovie: PropTypes.string, 
  hasError: PropTypes.bool, 
  setName: PropTypes.func, 
  selectConfirmedNumber: PropTypes.func,
};
