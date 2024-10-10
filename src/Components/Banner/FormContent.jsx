import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SelectLocation from "./dropdown";
import { fetchJobs } from '../../redux/actions/jobActions'; 

function FormContent() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs); // Accessing the jobs from Redux state
  const loading = useSelector((state) => state.loading); 
  const [error, setError] = useState(false);
  const [navigated, setNavigated] = useState(false); // State to control navigation
  const [formData, setFormData] = useState({
    keyword: '',
    location: '',
  });

  const [query, setQuery] = useState(''); 
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle location change from the dropdown
  const handleLocationChange = (locationValue) => {
    setFormData({
      ...formData,
      location: locationValue
    });
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure keyword is not empty
    if (!formData.keyword || !formData.location) {
      console.log(formData);
      window.alert(`please insert keyword and location`);
      return;
    }

    // Create query string from form data
    const queryString  = new URLSearchParams(formData).toString();
    setQuery(queryString); 
    console.log(queryString)
    try {
      // Dispatch the fetchJobs action with the query
      await dispatch(fetchJobs(queryString));   
      setNavigated(true); 
  
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };
  useEffect(() => {
    if (navigated) {
        // Navigate when jobs are fetched
        navigate(`/job-list-sidebar?${query}`, { state: { jobData: jobs } });
        // Set navigated to true to trigger useEffect
        setNavigated(true);
    }
}, [navigated, jobs, query]); // Depend on jobs and navigated state

  return (
    <div className="content">
      <div className="heading">
        <h2 className="text-white">Find the job that fits your life</h2>
        <p className="text-white">
          Your Next Career Move is Just a Click Away – Empowering Product,
          Program, and Project Managers to Explore, Apply, and Succeed!
        </p>
      </div>
      <div className="form-sl">
        <form onSubmit={handleSubmit}>
          <div className="row-group-search home1">
            <div className="form-group-1">
              <input
                type="text"
                className="input-filter-search"
                placeholder="Job title, key words or company"
                name="keyword"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-2">
              <span className="icon-map-pin"></span>
                {/* Include the SelectLocation component and pass the callback */}
                <SelectLocation onLocationChange={handleLocationChange} />
            </div>
            <div className="form-group-4">
              <button type="submit" className="btn btn-find" disabled={loading}>
                 {loading ? 'Loading...' : 'Find Jobs'}
              </button>
            </div>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default FormContent;
