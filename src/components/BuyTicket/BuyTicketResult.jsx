import React from "react";
import { movies } from "../../movies";

export const BuyTicketResult = () => {
  const data = JSON.parse(localStorage.getItem('NUMBER_OF_TICKETS'));

  return (
    <div>{movies.map((movieEl, index) => 
      <div key={index}>
        {`Movie: ${movieEl.title} sold: ${movieEl.amountOfTickets - data[index]} left: ${data[index]}`}
      </div>
    )}
    </div>
  );
};