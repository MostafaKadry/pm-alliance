import React, { useState } from "react";
import ReactSlider from "react-slider";
import "./style.scss";
function RangeTwo({title}) {
  const [value, setValue] = useState([17000, 24000]);
  return (
    <div className="group-form">
      <div className="group-range-title">
        <label>
          {title}
          <span>{value[0]}$ &nbsp;-</span>
          <span>{value[1]}$</span>
        </label>
      </div>
      <ReactSlider
        ariaLabelledby="slider-label"
        className="horizontal-slider st2"
        min={0}
        max={50000}
        defaultValue={[17000, 24000]}
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
}

export default RangeTwo;
