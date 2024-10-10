import React, { useState } from "react"; 
import { useLocation, Link } from 'react-router-dom';
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import Gotop from "../Components/gotop";
import logo from "../Components/logo.jpeg"; 

import JobSec3 from "../Components/Job/JobSec3";
// import dataJobs from "../assets/fakeData/dataJobs";
 
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

Joblist_v3.propTypes = {};

function Joblist_v3(_props) {
   
  const location = useLocation(); 
  const jobData = location.state?.jobData || []; // Retrieve the job data from the previous page
  console.log("job data", location.state);
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

  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/">
                <img className="site-logo" src={logo} alt="..." />
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


                      <li className="menu-item">
                        <Link
                          to="/aboutus"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("job");
                          }}
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="menu-item current-item">
                        <Link
                          to="/"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("home");
                          }}
                        >
                          Job Board
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          to="/PPM Tools"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          PPM Tools
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link
                          to="/AI-Resume-Editor/Job-Matcher"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                           Eli - AI
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link
                          to="/reviews"
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
                          to="/newsletter"
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
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      <Header clname="act1" handleMobile={handleMobile} />
      <JobSec3 data={jobData} />
      <div style={{ marginBottom: "85px" }}></div>
      <Footer />
      <Gotop />
    </>
  );
}

export default Joblist_v3;
