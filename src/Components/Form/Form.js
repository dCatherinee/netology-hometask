import React, { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const Form = ({ onAddNewTimezone }) => {
  const [country, setCountry] = useState("");
  const [timeZone, setTimeZone] = useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeTimeZone = (event) => {
    setTimeZone(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    onAddNewTimezone({
      id: nanoid(),
      city: country,
      time: timeZone,
    });

    setCountry("");
    setTimeZone("");
  };

  return (
    <form className="form-wrapper" onSubmit={handlerSubmit}>
      <div className="input-wrapper">
        <label>Название</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={handleChangeCountry}
          placeholder="Москва"
        />
      </div>
      <div className="input-wrapper">
        <label>Временная зона</label>
        <input
          type="text"
          name="timeZone"
          value={timeZone}
          onChange={handleChangeTimeZone}
          placeholder="+03:00"
        />
      </div>
      <button className="form-button">Добавить</button>
    </form>
  );
};

Form.propTypes = {};

export default Form;
