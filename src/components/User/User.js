import React, { useState, useEffect } from "react";
import { SelectAMovie } from "../SelectAMovie/SelectAAMovie";

export const User = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    localStorage.setItem('CUSTOMER_NAME', JSON.stringify(name))
  }, [name])

  return (
    <>
        <div>
          <label htmlFor='user-name'> Name: </label>
          <input 
            id={'user-name'}
            type={'text'}
            value={name}
            placeholder={'Type here'}
            onChange={event => {
            setName(event.target.value)
          }}
          />
        </div>

        {name !== '' && <SelectAMovie name={name}/>}
    </>
  )
}