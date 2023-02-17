import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SlClose } from "react-icons/sl";
import clock from "../../utils/utils";

const Watch = ({ zone, onRemove }) => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

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

Watch.propTypes = {
  zone: PropTypes.object,
  onRemove: PropTypes.func,
};

export default Watch;
