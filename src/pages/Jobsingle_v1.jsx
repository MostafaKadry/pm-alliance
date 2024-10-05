import React from "react";
import { useSelector } from 'react-redux';
import Header from "../Components/Navbar";
import Footer from "../Components/Footer"; 
import Gotop from "../Components/gotop";
import logo from "../Components/logo.jpeg";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MapSingle from "../Components/Job/MapSingle";
import lo1 from "../assets/images/logo-company/cty4.png";
import { useParams } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import DOMPurify from 'dompurify';  //Before rendering raw HTML content, it's recommended to sanitize it to prevent XSS attacks.
Jobsingle_v1.propTypes = {};

// Function to check if the string contains HTML
const containsHTML = (str) => {
    return /<\/?[a-z][\s\S]*>/i.test(str);
};
const JobDescription = ({ description }) => {

    // Check if description contains HTML tags
    if (containsHTML(description)) {

        const sanitizedDescription = DOMPurify.sanitize(description); // Sanitize the HTML content

        return (
            <div
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            />
        );
    }

    // If it's plain text, render it normally
    return <p>{description}</p>;
};
function Jobsingle_v1(props) {
  const { jobID } = useParams(); // Get jobId from the URL
  console.log(jobID)
  const marKers = [];
    // Get job data from Redux store
  const jobs = useSelector((state) => state.jobs.jobs);
  const job = jobs.find((job) => job.jobID == jobID);
  console.log(job);
  marKers.push(job);
  
  
  const progressRef = useRef();
  const [targetHeight, setTargetHeight] = useState(0);
  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  useEffect(() => {
    if (progressRef?.current) {
      const offsetHeight = progressRef?.current?.offsetTop;
      setTargetHeight(offsetHeight);
    }
  }, [progressRef]);
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
  if (!job) return <p>No Page Found</p>;
  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/jobsPlatform-FrontEnd/">
                <image className="site-logo" src={logo} alt="Image" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>

          <Tabs className="tf-tab">
            <TabList className="menu-tab d-flex">
              <Tab className="user-tag flex-grow-1">Menu</Tab>
            </TabList>

            <div className="content-tab">
              <TabPanel className="header-ct-center menu-moblie animation-tab">
                <div className="nav-wrap">
                  <nav className="main-nav mobile">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item current-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("home");
                          }}
                        >
                          Home
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/aboutus"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("job");
                          }}
                        >
                          About Us
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/insights"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          Insights
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/AI-Resume-Editor/Job-Matcher"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          AI Resume Editor / Job Matcher
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/reviews"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          Reviews
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/newsletter"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          Newsletter
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </TabPanel>
            </div>
          </Tabs>
          <div className="header-customize-item button">
            <Link to="/jobsPlatform-FrontEnd/login">Login</Link>
          </div>
        </div>
      </div>

      <Header clname="act1" handleMobile={handleMobile} />

      <section className="single-job-thumb">
        <img src={require("../Components/singlejob.png")} alt="images" />
      </section>

      <section className="form-sticky fixed-space">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wd-job-author2">
                <div className="content-left">
                  <div className="thumb">
                    <img
                      src={require("../Components/fulllogo_transparent_nobuffer 4.png")}
                      alt="logo"
                    />
                  </div>
                  <div className="content">
                    <Link to="#" className="category">
                      {job.category}
                    </Link>
                    <h6>
                      <Link to="#">
                        {job.title}
                        <span className="icon-bolt"></span>
                      </Link>
                    </h6>
                    <ul className="job-info">
                      <li>
                        <span className="icon-map-pin"></span>
                        <span>{job.location}</span>
                      </li>
                      <li>
                        <span className="icon-calendar"></span>
                        <span>{new Date(job.createdAt).toDateString()}</span>
                      </li>
                    </ul>
                    <ul className="tags">
                       {renderContractTypeLink(job.contract_type)}
                    </ul>
                  </div>
                </div>
                <div className="content-right">
                  <div className="top">
                    <Link to="#" className="share">
                      <i className="icon-share2" />
                    </Link>
                    <Link to="#" className="wishlist">
                      <i className="icon-heart" />
                    </Link>
                    <Link to={job.redirect_url} className="btn btn-popup"
                      onClick={(e) => {
                      e.preventDefault(); // Prevent the default behavior
                      window.open(job.redirect_url, '_blank', 'noopener,noreferrer'); // Open in new tab
                      }}
                    >
                      <i className="icon-send" />
                      Apply Now
                    </Link>
                  </div>
                  <div className="bottom">
                    <div className="gr-rating">
                      <p>Company: {job.company}</p>
                      <ul className="list-star">
                        <li className="icon-star-full" />
                        <li className="icon-star-full" />
                        <li className="icon-star-full" />
                        <li className="icon-star-full" />
                        <li className="icon-star-full" />
                      </ul>
                    </div>
                          <Link to={`${job.redirect_url}`}
                             onClick={(e) => {
                            e.preventDefault(); // Prevent the default behavior
                            window.open(job.redirect_url, '_blank', 'noopener,noreferrer'); // Open in new tab
                            }}
                            >
                            <div className="price">
                              <span className="icon-dolar1"></span>
                              {" "}
                              <p className={
                                (!job.salary || (typeof job.salary === 'string')) 
                                ? "blurred-salary" 
                                : ""
                              }>
                                {(!job.salary || (typeof job.salary === 'string')) 
                                ? "Blurred Salary" 
                                : `${job.salary} /year`}
                              </p>
                            </div>
                        </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inner-jobs-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <Tabs className="job-article tf-tab single-job">
                <TabList className="menu-tab">
                  <Tab className="ct-tab">About</Tab>
                  {/* <Tab className="ct-tab">Jobs (2)</Tab>
                  <Tab className="ct-tab">reviews</Tab> */}
                </TabList>
                <div className="content-tab">
                  <TabPanel className="inner-content animation-tab">
                    <h5>Full Job Description</h5>
                    <p>
                      {/* {job.description} */}
                    </p>
                    <JobDescription description={job.description}/>
                    {/* <div dangerouslySetInnerHTML={{ __html: job.description }}/> */}

                  </TabPanel>
                </div>
              </Tabs>
            </div>
            <div className="col-lg-4">
              <div className="cv-form-details po-sticky job-sg single-stick">
                <MapSingle marKers={marKers} />



              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </>
  );
}

export default Jobsingle_v1;
