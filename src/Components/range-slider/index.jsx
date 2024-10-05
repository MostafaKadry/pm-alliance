import React, { useState } from "react";
import ReactSlider from "react-slider";
import "./style.scss";
function RangeOne(props) {
  const { miles, title } = props;
  const [value, setValue] = useState(25);

  return (
    <div className="group-form">
      <div className="group-range-title">
        <label>
          {title}
          <span>
            {value}&nbsp;{miles}
          </span>
        </label>
      </div>
      <ReactSlider
        ariaLabelledby="slider-label"
        className="horizontal-slider"
        min={0}
        max={100}
        defaultValue={[25]}
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
}

export default RangeOne;
