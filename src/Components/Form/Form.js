import React, { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { SlArrowRightCircle } from "react-icons/sl";

const Form = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAdd({
      id: nanoid(),
      content: text,
    });

    setText("");
  };

  return (
    <div className="form__container">
      <h3 className="form__title">New Note</h3>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          rows="10"
          cols="45"
          value={text}
          onChange={handleChangeText}
        />
        <button>
          <SlArrowRightCircle className="form__icon" />
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onAdd: PropTypes.func,
};

export default Form;
