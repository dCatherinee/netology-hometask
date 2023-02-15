import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SlClose } from "react-icons/sl";
import clock from "./utils";

const Watch = ({ zone, currDate, onRemove }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let date = clock(zone);

      setHours(date.hours);
      setMinutes(date.minutes);
      setSeconds(date.seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="watch-wrapper">
      <h3 className="watch-title">{zone.city}</h3>
      <div className="watch">
        <div className="watch-clock">
          <p>
            {hours}:{minutes}:{seconds}
          </p>
        </div>
        <SlClose onClick={() => onRemove(zone)} className="watch-icon" />
      </div>
    </div>
  );
};

Watch.propTypes = {};

export default Watch;
