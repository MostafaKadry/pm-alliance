import React, {useState} from "react";

import Select from 'react-select'; 
import {options} from '../../assets/database/countries';

function SelectLocation({ onLocationChange }) {
  const [selectedLocation, setSelectedLocation] = useState(options[0]);
  const handleLocationChange = (option) => {
    setSelectedLocation(option);
    onLocationChange(option.value); // Call the parent callback with the selected location value
  };
  return (
    <Select
      options={options}
      value={selectedLocation}
      onChange={handleLocationChange} // Handle location change
      className="react-dropdown select-location" // Custom class for styling
      placeholder="Select a location" // Placeholder text
      isSearchable={true} // Enable search functionality
    />
  );
}

export default SelectLocation;
