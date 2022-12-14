import React, { useEffect, useState } from 'react';
import './App.scss';
import { User } from './components/User/User';
import { movies } from './movies';
//import { Screen } from './components/Screen/Screen';
//import { SelectAMovie } from './components/SelectAMovie/SelectAAMovie';
//import { BuyTicketForm } from './components/BuyTicket/BuyTicketForm';
import { BuyTicketResult } from './components/BuyTicket/BuyTicketResult';
//import { NumberOfTickets } from './components/NumberOfTickets/NumberOfTickets';



export const App = () => {
  const [showResult, setShowResult] = useState(false);

  /*const [] = useState(() => {
    const saved = localStorage.getItem('summary');
    const innitialValue = JSON.parse(saved);
    
    return innitialValue || '';
  })*/

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
    
    <button onClick={printSaved}>the end</button>
    {showResult && <BuyTicketResult />}
    </>
  )
}

