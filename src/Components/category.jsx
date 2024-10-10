import React, { useState , useCallback, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from "./Button";
import {  Link, useNavigate } from 'react-router-dom';
 import {RandomJobsAction, categoryFilteredJobsAction} from '../redux/actions/jobActions';
 import dataCate from '../assets/fakeData/dataCategory';
Category.propTypes = {};

function Category(props) {
   const dispatch = useDispatch();
    const [jobData, setJobData] = useState(null); // Store fetched job data
    const loading = useSelector((state) => state.loading);
    const [error, setError] = useState(null);
const navigate = useNavigate();
  const { className } = props;

  const [dataBlock] = useState({
    title: "Browse by category",
    text: "Recruitment Made Easy in 100 seconds",
  });

const handleCategoryClick = async (title) => {
  console.log(title)
  // e.preventDefault();
  try {
    // Dispatch the fetchRandomJobs action based on category title
    await dispatch(categoryFilteredJobsAction({category: title}));
    // Redirect to the job list page with jobData passed through state
    navigate(`/job-list-sidebar/category/${title}`);
  } catch (error) {
    console.error("Error fetching category jobs:", error);
  }
};

const handleClick = async (e) => {
    e.preventDefault();
try {
      // Dispatch the fetchJobs action with the query string
      await dispatch(RandomJobsAction());
      navigate(`/job-list-sidebar`);
      console.log("Random Jobs fetched successfully");
    } catch (error) {
      console.error("Error fetching job data:", error);
      setError(true);
    }
  };

  return ( 
    <section className={className}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title">
              <div className="group-title">
                <h1>{dataBlock.title}</h1>
                <p>{dataBlock.text}</p>
              </div>
              {/* <div onClick={handleClick}>
              <Button title={loading ? 'Loading...' : 'All Categories'}
              />
              </div>
                   */}
            </div>
          </div>

          <div className="col-md-12">
            <div
              className="group-category-job wow fadeInUp row"
              data-wow-delay=".2s"
            >
              {dataCate.map((idx) => (
                <div
                  key={idx.id}
                  className={`job-category-box col-4 ${idx.margin}`}
                >
                  <div className="job-category-header">
                    <h1>
                      <span onClick={()=> handleCategoryClick(idx.title)}>
                        {idx.title}
                      </span>
                    </h1>
                  </div>
                  <span
                    className="btn-category-job"
                    onClick={()=> handleCategoryClick(idx.title)}
                  >
                    Explore Jobs{" "}
                    <span className="icon-keyboard_arrow_right"></span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
