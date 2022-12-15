import React, {  useState, useEffect } from 'react';
import './App.scss';
import { User } from './components/User/User';
import { movies } from './movies';
import { BuyTicketResult } from './components/BuyTicket/BuyTicketResult';



export const App = () => {
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    localStorage.setItem('NUMBER_OF_TICKETS', JSON.stringify(movies.map(el => el.amountOfTickets)));
    console.log(localStorage.getItem("NUMBER_OF_TICKETS"));
  }, []);

  const printSaved = () => setShowResult(true);

  return (
    <>
    <div className='App'>
      <User />
    </div>
    
    <button 
      onClick={printSaved}
      className="endButton"
    >
      the end
    </button>
    
    {showResult && <BuyTicketResult />}
    </>
  );
};

