import React, { useState, useEffect } from "react";
import { seats } from "../../Seats";
import { TicketMessage } from "../TicketMessage/TicketMessage";

export const NumberOfTickets = () => {
  const [numberOfTickets, setNumberOfTickets] = useState('default');
  
  useEffect(() => {
    localStorage.getItem('NUMBER_OF_TICKETS', JSON.stringify(numberOfTickets))
  }, [numberOfTickets])

  const SelectANumber = (event) => {
    console.log("Number of tickets selected - ", event.target.value);
    setNumberOfTickets(event.target.value);
}
  return (
    <>
      <select value={numberOfTickets} onChange={SelectANumber}>
        <option>0</option>
        {seats.map((seat, index) => (
          <option key={index}>
            {seat.id}
          </option>
        )) 
         
        }
      </select>
      {numberOfTickets !== 'default' && <TicketMessage />}
    </>
  )
}