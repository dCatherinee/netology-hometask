import React, { useRef, useState } from "react";
import hex2rgb from "../../utils/hex2rgb";

const Hex2rgb = () => {
  const [color, setColor] = useState("#E76237");
  const [hex, setHex] = useState("#E76237");
  const [rgb, setRgb] = useState("rgb(231, 98, 55)");
  const timeout = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    let currColor = event.target.value;

    console.log(event.target.value);
    setHex(currColor);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      if (currColor.length === 7 && currColor[0] === "#") {
        setColor(currColor);
        setRgb(hex2rgb(currColor));
      } else {
        setColor("#E76237");
        setRgb("Ошибка!");
      }
      console.log(color);
    }, 1000);
  };

  return (
    <div className="background" style={{ background: `${color}` }}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            className="input-hex"
            type="text"
            name="hex"
            value={hex}
            onChange={handleChange}
          />
          <div className="output-rgb">
            <p>{rgb}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hex2rgb;
