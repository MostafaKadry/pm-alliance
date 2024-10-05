import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Sidebar from "./Sidebar";
import SortBuy from "./SortBuy";
import { useSelector } from 'react-redux'; 

JobSec3.propTypes = {};

function JobSec3() {
  const [sortOrder, setSortOrder] = useState("new"); // Default sort order
  const [resultsPerPage, setResultsPerPage] = useState(12); // Default results per page
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const data = useSelector((state) => state.jobs.jobs);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleResultsPerPageChange = (count) => {
    setResultsPerPage(count);
    setCurrentPage(1); // Reset to first page when results per page changes
  };
    const handlePageChange = (page) => {
    setCurrentPage(page);
  };

// Ensure data is an array or default it to an empty array
const sortedData = (Array.isArray(data) ? [...data] : []).sort((a, b) => {
  if (sortOrder === "new") {
    return new Date(b.createdAt) - new Date(a.createdAt); // Newest to oldest
  } else {
    return new Date(a.createdAt) - new Date(b.createdAt); // Oldest to newest
  }
});
// Calculate total pages
  const totalPages = Math.ceil(sortedData.length / resultsPerPage);

 // Calculate the data for the current page
  const startIndex = (currentPage - 1) * resultsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + resultsPerPage);

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
    <section
      className="inner-employer-section-two"
      style={{ position: "relative", top: ' 15vh'}}
    >
      
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="group-4-8">
              <div className="cl4">
                <Sidebar />
              </div>
              <Tabs className="cl8 tf-tab">
                <div className="wd-meta-select-job">
                  <div className="wd-findjob-filer">
                    <div className="group-select-display">
                      <TabList className="inner menu-tab">
                        <Tab className="btn-display">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              d="M0.5 12.001L0.5 16.0005C0.880952 16.001 1.09693 16.001 1.83333 16.001L15.1667 16.001C15.9031 16.001 16.5 16.0005 16.5 16.0005L16.5 12.001C16.5 12.001 15.9031 12.001 15.1667 12.001L1.83333 12.001C1.09693 12.001 0.880952 12.001 0.5 12.001Z"
                              fill="#A0A0A0"
                            ></path>
                            <path
                              d="M0.5 6.00098L0.5 10.0005C0.880952 10.001 1.09693 10.001 1.83333 10.001L15.1667 10.001C15.9031 10.001 16.5 10.0005 16.5 10.0005L16.5 6.00098C16.5 6.00098 15.9031 6.00098 15.1667 6.00098L1.83333 6.00098C1.09693 6.00098 0.880952 6.00098 0.5 6.00098Z"
                              fill="#A0A0A0"
                            ></path> 
                            <path
                              d="M0.5 0.000976562L0.5 4.0005C0.880952 4.00098 1.09693 4.00098 1.83333 4.00098L15.1667 4.00098C15.9031 4.00098 16.5 4.0005 16.5 4.0005L16.5 0.000975863C16.5 0.000975863 15.9031 0.000975889 15.1667 0.000975921L1.83333 0.000976504C1.09693 0.000976536 0.880952 0.000976546 0.5 0.000976562Z"
                              fill="#A0A0A0"
                            ></path>
                          </svg>
                        </Tab>
                        <Tab className="btn-display ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <path
                              d="M4.5 0H0.500478C0.5 0.380952 0.5 0.596931 0.5 1.33333V14.6667C0.5 15.4031 0.500478 16 0.500478 16H4.5C4.5 16 4.5 15.4031 4.5 14.6667V1.33333C4.5 0.596931 4.5 0.380952 4.5 0Z"
                              fill="white"
                            ></path>
                            <path
                              d="M10.5 0H6.50048C6.5 0.380952 6.5 0.596931 6.5 1.33333V14.6667C6.5 15.4031 6.50048 16 6.50048 16H10.5C10.5 16 10.5 15.4031 10.5 14.6667V1.33333C10.5 0.596931 10.5 0.380952 10.5 0Z"
                              fill="white"
                            ></path>
                            <path
                              d="M16.5 0H12.5005C12.5 0.380952 12.5 0.596931 12.5 1.33333V14.6667C12.5 15.4031 12.5005 16 12.5005 16H16.5C16.5 16 16.5 15.4031 16.5 14.6667V1.33333C16.5 0.596931 16.5 0.380952 16.5 0Z"
                              fill="white"
                            ></path>
                          </svg>
                        </Tab>
                      </TabList>
                      <p className="nofi-job">
                        <span>{sortedData?.length}</span> jobs recommended for you
                      </p>
                    </div>
                    <SortBuy 
                      onSortChange={handleSortChange} 
                      onResultsPerPageChange={handleResultsPerPageChange} 
                    />
                  </div>
                </div>
                <div className="content-tab">
                  <TabPanel className="inner">
                    {paginatedData.length? paginatedData.map((idx) => (
                      <div key={idx.jobID} className="features-job mb1">
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
                                <Link to={`/jobsPlatform-FrontEnd/jobsingle_v1/${idx.jobID}`}>{idx.title} </Link>
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
                             <Link to={`${idx.redirect_url}`}>
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
                              </Link>
                          </div>
                        </div>
                      </div>
                    )): 'No Jobs Found...'}
                  </TabPanel>
                  <TabPanel className="inner">
                    <div className="group-col-2">
                      {paginatedData.length? paginatedData.map((idx) => (
                        <div className="features-job cl2" key={idx.jobID}>
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
                                  <Link to={`/jobsPlatform-FrontEnd/jobsingle_v1/${idx.jobID}`}>{idx.title} </Link>
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
                             <Link to={`${idx.redirect_url}`}
                             onClick={(e) => {
                            e.preventDefault(); // Prevent the default behavior
                            window.open(idx.redirect_url, '_blank', 'noopener,noreferrer'); // Open in new tab
                            }}
                            >
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
                              </Link>
                             
                            </div>
                          </div>
                          <Link
                            to={`/jobsPlatform-FrontEnd/jobsingle_v1/${idx.jobID}`}
                            className="jobtex-link-item"
                            tabIndex="0"
                          ></Link>
                        </div>
                      )) : 'No Jobs Found...'}
                    </div>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
             {/* Add pagination controls */}
            <ul className="pagination-job p-top">
              {/* Previous Button */}
              <li>
                <Link
                  to="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "disabled" : ""}
                >
                  <i className="icon-keyboard_arrow_left"></i>
                </Link>
              </li>

              {/* First Page and Dots if necessary */}
              {currentPage > 3 && (
                <>
                  <li>
                    <Link to="#" onClick={() => handlePageChange(1)}>1</Link>
                  </li>
                  {currentPage > 4 && (
                    <li>
                      <span>...</span>
                    </li>
                  )}
                </>
              )}

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                if (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2) {
                  return (
                    <li key={pageNumber} className={currentPage === pageNumber ? "current" : ""}>
                      <Link to="#" onClick={() => handlePageChange(pageNumber)}>
                        {pageNumber}
                      </Link>
                    </li>
                  );
                }
                return null;
              })}

              {/* Last Page and Dots if necessary */}
              {currentPage < totalPages - 2 && (
                <>
                  {currentPage < totalPages - 3 && (
                    <li>
                      <span>...</span>
                    </li>
                  )}
                  <li>
                    <Link to="#" onClick={() => handlePageChange(totalPages)}>{totalPages}</Link>
                  </li>
                </>
              )}

              {/* Next Button */}
              <li>
                <Link
                  to="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "disabled" : ""}
                >
                  <i className="icon-keyboard_arrow_right"></i>
                </Link>
              </li>
            </ul>
 

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobSec3;
