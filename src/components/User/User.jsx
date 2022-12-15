import React, { useState, useEffect } from "react";
import { SelectAMovie } from "../SelectAMovie/SelectAAMovie";
import './User.scss';

export const User = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    localStorage.setItem('CUSTOMER_NAME', JSON.stringify(name))
  }, [name]);

  return (
    <>
      <div className="nameForm">
        <label htmlFor='user-name' className="nameForm__title"> Name: </label>
          <input 
            id={'user-name'}
            type={'text'}
            value={name}
            placeholder={'Type here'}
            onChange={event => {
            setName(event.target.value)
            }}
            className="nameForm__input"
          />
      </div>

      {name !== '' && <SelectAMovie name={name} setName={setName} />}
    </>
  );
};