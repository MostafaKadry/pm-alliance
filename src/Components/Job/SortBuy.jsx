import React from "react";
import Dropdown from "react-dropdown";

const options = [
  { value: 12, label: "12 / Page" },
  { value: 1, label: "1 / Page" },
  { value: 50, label: "50 /Page" },
];

const options2 = [
  { value: "new", label: "Sort by (New)" },
  { value: "last", label: "Sort by (Last)" },
];

function SortBuy({ onSortChange, onResultsPerPageChange }) {
    const handleSortChange = (option) => {
    onSortChange(option.value);
  };
    const handleResultsPerPageChange = (option) => {
    onResultsPerPageChange(option.value);
  };
  return (
    <div className="group-select">
      <Dropdown
        options={options}
        className="react-dropdown sort-buy"
        value={options[0]}
         onChange={handleResultsPerPageChange} 
      />
      <Dropdown
        options={options2}
        className="react-dropdown sort-buy"
        value={options2[0]}
        onChange={handleSortChange}
      />
    </div>
  );
}

export default SortBuy;
