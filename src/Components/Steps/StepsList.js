import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";

const StepsList = (props) => {
  return (
    <div className="list-wrapper">
      <div className="list-title">
        <h3>Дата (ДД.ММ.ГГ)</h3>
        <h3>Пройдено км</h3>
        <h3>Действия</h3>
      </div>
      <ul className="list">
        {props.diary.map((item) => (
          <li className="list-item" key={item.id}>
            <p>{item.date}</p>
            <p>{item.km}</p>
            <div>
              <FiEdit3 onClick={() => props.onEdit(item)} />
              <MdOutlineDelete onClick={() => props.onRemove(item.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

StepsList.propTypes = {
  diary: PropTypes.array,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};

export default StepsList;
