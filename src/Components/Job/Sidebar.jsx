import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import RangeOne from "../range-slider";
// import RangeTwo from "../range-slider/RangleTwo";
import SelectLocation from "../Banner/dropdown";
import Dropdown from "react-dropdown";
import { fetchJobs } from '../../redux/actions/jobActions';
import { jobTitles } from '../../assets/database/jobTitles';
 
// const select2 = [
//   { value: "s1", label: "On-site" },
//   { value: "s2", label: "Remote" },
//   { value: "s3", label: "Freelancer" },
// ];

// const select4 = [
//   { value: "s1", label: "Posted Anytime" },
//   { value: "s2", label: "Last 24 hours" },
//   { value: "s3", label: "Last Week" },
//   { value: "s4", label: "Last month" },
// ];
// const select5 = [
//   { value: "s1", label: "All Seniority Levels" },
//   { value: "s2", label: "Junior" },
//   { value: "s3", label: "Senior" },
// ];
// const select6 = [
//   { value: "s1", label: "Company" },
//   { value: "s2", label: "Website" },
// ];

function Sidebar(_props) {
  const jobTypeMap = {
    '1': 'Full Time',
    'Full-time': 'Full Time',
    '2': 'Part Time',
    'Part-time': 'Part Time',
    '3': 'Shift Work',
    '4': 'Intermittent',
    '5': 'Job Sharing',
    '6': 'Multiple Schedules',
    'permanent': 'Permanent',
    'contract': 'Contract'
  };
  const select3 = [
    { value: "0", label: "All Job Types" },
    { value: "1", label: jobTypeMap['1'] },
    { value: "2", label: jobTypeMap['2'] },
    { value: "3", label: jobTypeMap['3'] },
    { value: "4", label: jobTypeMap['4'] },
    { value: "5", label: jobTypeMap['5'] },
    { value: "6", label: jobTypeMap['6'] },
    { value: "permanent", label: jobTypeMap['permanent'] },
    { value: "contract", label: jobTypeMap['contract'] },
  ];
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('All Locations');
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(jobTitles)[0]); // Default to the first category
  const [jobTitle, setJobTitle] = useState(jobTitles[Object.keys(jobTitles)[0]].titles[0].value); // Default to the first title in the first category
  const [jobType, setJobType] = useState("0");
  // const [postedTime, setPostedTime] = useState(select4[0].value);
  // const [seniorityLevel, setSeniorityLevel] = useState(select5[0].value);
  // const [company, setCompany] = useState(select6[0].value);
  const [error, setError] = useState(false);
  const loading = useSelector((state) => state.loading); 
   // Extract categories and job titles
  const categories = Object.keys(jobTitles);
  const titlesInSelectedCategory = jobTitles[selectedCategory].titles;

const handleCategoryChange = (option) => {
  setSelectedCategory(option.value);
  setJobTitle(jobTitles[option.value].titles[0].value); // Set job title to the first title in the new category
};

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation); // Update the location state with the new location
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!jobTitle || !location) return setError(true);

// allowed params { results_per_page, keyword, title, location, company, salary, pageNo }
    const queryObject = {
      keyword: keyword || jobTitle,
      location,
      title: jobTitle,
      jobType,
       // postedTime,
      // company,
    };

    // Create a query string from the queryObject
    const queryString = new URLSearchParams(queryObject).toString();
    console.log(queryString);
     
    try {
      // Dispatch the fetchJobs action with the query string
      await dispatch(fetchJobs(queryString));
      console.log("getting jobs from redux store");
    } catch (error) {
      console.error("Error fetching job data:", error);
      setError(true);
    }
  };
useEffect(() => {
  // Set the initial job title based on the selected category
  setJobTitle(jobTitles[selectedCategory].titles[0].value);
}, [selectedCategory]);
  return (
    <div className="widget-filter st2 style-scroll po-sticky">
      <form onSubmit={handleSubmit}>
        <div className="group-form">
          <label className="title">Custom Search</label>
          <div className="group-input search-ip">
            <button type="submit">
              <i className="icon-search"></i>
            </button>
            <input
              type="text"
              placeholder="Job title, keywords or company"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="group-form">
          <label className="title">Location</label>
          <div className="group-input has-icon">
            <i className="icon-map-pin"></i>
            <SelectLocation onLocationChange={handleLocationChange} />
          </div>
        </div>
{/* Dropdown for Job Categories */}
        <div className="group-form">
          <label className="title">Job Category</label>
         <Dropdown
      options={categories?.map(category => ({
      value: category,
      label: jobTitles[category].category // Show the category name instead of the key
    }))}
    className="react-dropdown select2"
    
    onChange={handleCategoryChange}
    value={{ value: selectedCategory, label: jobTitles[selectedCategory].category }} // Set the selected category name
  />
        </div>
 {/* Dropdown for Job Titles based on Selected Category */}
        <div className="group-form">
          <label className="title">Job Title</label>
          <Dropdown
            options={titlesInSelectedCategory?.map(title => ({ value: title.value, label: title.value }))}
            className="react-dropdown select2"
           
            onChange={(option) => setJobTitle(option.value)}
            value={jobTitle ? { value: jobTitle, label: jobTitle } : titlesInSelectedCategory[0]} // Ensure the selected job title is displayed correctly
          
          />
        </div>


          {/* job types filtter */}
         <div className="group-form">
          <label className="title">Job Types</label>
          <div className="group-input">
            <Dropdown
              options={select3}
              className="react-dropdown select2"
              onChange={(option) => {console.log(option);setJobType(option.value)}}
              value={select3.find(item => item.value === jobType)}
            />
          </div>
        </div> 
        {/* <RangeTwo title="Salary:" /> */}
        {/* <RangeOne miles="Miles" title="Radius:" /> */}
        {/* <div className="group-form">
          <label className="title">select period</label>
          <div className="group-input">
            <Dropdown
              options={select4}
              className="react-dropdown select2"
              
              onChange={(option) => setPostedTime(option.value)}
              value={select4.find(item => item.value === postedTime)}
            />
          </div>
        </div> */}
       
        {/* <div className="group-form">
          <label className="title">All Seniority Levels</label>
          <div className="group-input">
            <Dropdown
              options={select5}
              className="react-dropdown select2"
              onChange={(option) => setSeniorityLevel(option.value)}
              value={select5.find(item => item.value === seniorityLevel)}
            />
          </div>
        </div> */}

        {/* <div className="group-form">
          <label className="title">Company</label>
          <div className="group-input">
            <Dropdown
              options={select6}
              className="react-dropdown select2"
              onChange={(option) => setCompany(option.value)}
              value={select6.find(item => item.value === company)}
            />
          </div>
        </div> */}
        <button type="submit" onClick={handleSubmit}>
          {loading ? 'Loading...' : 'Find Jobs'}
        </button>
      </form>
      {error && <p className="error">There was an error fetching the jobs. Please try again.</p>}
    </div>
  );
}

export default Sidebar;
