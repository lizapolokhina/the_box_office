import React from "react";
//import { TicketsContext } from "../TicketsContext";
import { movies } from "../../movies";

export const BuyTicketResult = () => {
  const data = JSON.parse(localStorage.getItem('NUMBER_OF_TICKETS'));
  console.log("data", data)
  return (
    <div>{movies.map((movieEl, index) => 
      <div key={index}>{`Movie: ${movieEl.title} sold: ${movieEl.amountOfTickets - data[index]} left: ${data[index]}`}</div>
      )}</div>
  )
}