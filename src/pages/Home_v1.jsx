import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner01 from "../Components/Banner/Banner01";
import Category from "../Components/category";

import Jobs from "../Components/Job/Job";

import Gotop from "../Components/gotop";

import dataCate from "../assets/fakeData/dataCategory";

import {fetchFeaturedJobs} from '../assets/database/featuredJobs'; 

import { Link } from "react-router-dom";
import logo from "../Components/logo.jpeg";

Home_v1.propTypes = {};

function Home_v1(props) {
  const [username, setUsername] = useState(null);

  // Check if user is logged in by checking the token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const email = localStorage.getItem('email'); // Assuming email is saved when user logs in
      if (email) {
        const user = email.split('@')[0]; // Get the part before '@'
        setUsername(user);
      }
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setUsername(null);
  };
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
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/jobsPlatform-FrontEnd/">
                <img className="site-logo" src={logo} alt={'PM NETWORK ALLIANCE'} />
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
                          to="/jobsPlatform-FrontEnd/PPM Tools"
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
                          to="/jobsPlatform-FrontEnd/AI-Resume-Editor/Job-Matcher"
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
            {/* Conditionally render login link or username */}
        {username ? (
          <>
          {username && <button onClick={handleLogout}>Logout</button>}
          <div>Welcome, {username}</div>
          </>
        ) : (
          <div className="button">
            <Link to="/jobsPlatform-FrontEnd/login">Login</Link>
          </div>
        )}
          </div>
        </div>
      </div>

      <Header clname="act1" handleMobile={handleMobile} />
      <Banner01 />
      <Category data={dataCate} className="job-category-section" />
        
      <Jobs data={fetchFeaturedJobs} className="jobs-section-three" />

      <Footer />

      <Gotop />
    </>
  );
}

export default Home_v1;
