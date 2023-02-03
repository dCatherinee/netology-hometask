import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const StepsForm = ({ onAddNewDiary, edit }) => {
  const [date, setDate] = useState("");
  const [km, setKm] = useState("");

  useEffect(() => {
    setDate(edit.date);
    setKm(edit.km);
  }, [edit.date, edit.km]);

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (edit.id) {
      onAddNewDiary({
        id: edit.id,
        date: date,
        km: km,
      });
    } else {
      onAddNewDiary({
        id: nanoid(),
        date: date,
        km: km,
      });
    }

    setDate("");
    setKm("");
  };

  const handlerChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handlerChangeKm = (event) => {
    setKm(event.target.value);
  };

  return (
    <form onSubmit={handlerSubmit} className="steps-form">
      <div className="input-box">
        <label className="input-label">Дата (ДД.ММ.ГГ)</label>
        <input
          onChange={handlerChangeDate}
          className="input"
          type="text"
          name="date"
          value={date}
        />
      </div>
      <div className="input-box">
        <label className="input-label">Пройдено км</label>
        <input
          onChange={handlerChangeKm}
          className="input"
          type="text"
          name="km"
          value={km}
        />
      </div>
      <button className="input-button">ОК</button>
    </form>
  );
};

StepsForm.propTypes = {
  onAddNewDiary: PropTypes.func,
  edit: PropTypes.object,
  clearEdit: PropTypes.func,
};

export default StepsForm;
