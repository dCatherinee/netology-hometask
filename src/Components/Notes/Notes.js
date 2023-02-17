import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";

const Notes = ({ notes, onDelete }) => {
  return (
    <div className="notes__container">
      {notes.map((item) => (
        <Note
          key={item.id}
          id={item.id}
          text={item.content}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

Notes.propTypes = {
  notes: PropTypes.array,
  onDelete: PropTypes.func,
};

export default Notes;
