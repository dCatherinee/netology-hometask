import React from "react";
import PropTypes from "prop-types";
import { SlClose } from "react-icons/sl";

const Note = ({ id, text, onDelete }) => {
  return (
    <div className="notes__note">
      <p className="note__text">{text}</p>
      <SlClose className="note__icon" onClick={() => onDelete(id)} />
    </div>
  );
};

Note.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Note;
