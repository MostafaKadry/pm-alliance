import React, { useState , useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from "../Button";
import {  Link, useNavigate } from 'react-router-dom';
import {RandomJobsAction, fetchFeaturedJobsAction} from '../../redux/actions/jobActions';
Jobs.propTypes = {}; 

function Jobs(props) {
  const dispatch = useDispatch();
     useEffect(() => {
        // Dispatch the action to fetch featured jobs on component mount
        dispatch(fetchFeaturedJobsAction());
    }, [dispatch]);

  const [jobData, setJobData] = useState(null); // Store fetched job data
  const loading = useSelector((state) => state.loading);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const data = useSelector((state) => state.jobs.jobs);
  const { className } = props;
  const [dataBlock] = useState({
    title: "Featured Jobs",
    text: "Find the job that’s perfect for you. about 800+ new jobs everyday",
  });

// function to fetch random jobs 

const handleClick = async (e) => {
    e.preventDefault();
try {
      // Dispatch the fetchJobs action with the query string
      await dispatch(RandomJobsAction());
      navigate(`/jobsPlatform-FrontEnd/job-list-sidebar`);
      console.log("Random Jobs fetched successfully");
    } catch (error) {
      console.error("Error fetching job data:", error);
      setError(true);
    }
  };
  const renderContractTypeLink = (type) => {
  switch (type) {
    case '1':
    case 'Full-time':
      return <Link to="#">Full Time</Link>;
    case '2':
    case 'Part-time':
      return <Link to="#">Part Time</Link>;
    case '3':
      return <Link to="#">Shift Work</Link>;
    case '4':
      return <Link to="#">Intermittent</Link>;
    case '5':
      return <Link to="#">Job Sharing</Link>;
    case '6':
      return <Link to="#">Multiple Schedules</Link>;
    case 'permanent':
      return <Link to="#">Permanent </Link>;
    case 'contract':
      return <Link to="#">Contract</Link>;
    default:
      return null; // Or handle unknown types if needed
  }
};

  return (
    <section className={className}>
          <div className="container">
        <div className="tf-title style-2">
          <div className="group-title ">
            <h1>{dataBlock.title}</h1>
            <p>{dataBlock.text}</p>
          </div>
        </div>
        <div className="row wow fadeInUp">
          {data?.map((idx) => (
            <div key={idx.jobID} className="col-lg-6 ">
              <div className="features-job">
                <div className="job-archive-header">
                  <div className="inner-box">
                    <div className="logo-company">
                      <img src={idx.img} alt="jobtex" />
                    </div>
                    <div className="box-content">
                      <h4>
                        <Link to={`/jobsPlatform-FrontEnd/jobsingle_v1/${idx.jobID}`}>{idx.category}</Link>
                      </h4>
                      <h3>
                        <Link to={`/jobsPlatform-FrontEnd/jobsingle_v1/${idx.jobID}`}> {idx.title} </Link>
                        <span className="icon-bolt"></span>
                      </h3>
                      <ul>
                        <li>
                          <span className="icon-map-pin"></span>
                          {idx.location}
                        </li>
                        <li>
                          <span className="icon-calendar"></span>
                          {new Date(idx.createdAt).toDateString()}
                        </li>
                      </ul>
                      <span className="icon-heart"></span>
                    </div>
                  </div>
                </div>
                <div className="job-archive-footer">
                  <div className="job-footer-left">
                    <ul className="job-tag">
                      <li> 
                         {renderContractTypeLink(idx.contract_type)}
                      </li>
                      <li>
                        <Link to="#">{idx.company}</Link>
                      </li>
                    </ul>
                    <div className="star">
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                    </div>
                  </div>
                  <div className="job-footer-right">
                            <div className="price">
                              <span className="icon-dolar1"></span>
                              <p className={
                                (!idx.salary || (typeof idx.salary === 'string')) 
                                ? "blurred-salary" 
                                : ""
                              }>
                                {(!idx.salary || (typeof idx.salary === 'string')) 
                                ? "Blurred Salary" 
                                : `${idx.salary} /year`}
                              </p>
                            </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-md-12"> 
            <div className="wrap-button" onClick={handleClick}>
              
              <Button title= {loading ? 'Loading...' : 'See more Jobs'} />
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
