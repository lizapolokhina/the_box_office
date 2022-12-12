import React, { useState } from "react";
import { movies } from '../../movies';

export const Screen = () => {
  const [tickets, setTickets] = useState(50);

  return (
    <>
    <div>
      {movies.map(movie => (
        <div
        key={movie.id}
        >
          <p>{movie.title}</p>
          <p>{movie.time}</p>
          <button
            onClick={() => setTickets(tickets - 1)}
          >
            buy a ticket
          </button>
        </div>
      ))}
  </div>
  </>
  )
} 
