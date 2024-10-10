import React from "react";

import Header from "../Components/Navbar";
import Footer from "../Components/Footer";

import Review from "../Components/breadcrumb/Review";
import Iconbox3 from "../Components/breadcrumb/Iconbox3";

import Gotop from "../Components/gotop";
import logo from "../Components/logo.jpeg";

import { Link } from "react-router-dom";

import img1 from "../assets/images/job/work-icon-1.jpg";
import img2 from "../assets/images/job/work-icon-2.jpg";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { useState } from "react";

AboutUs.propTypes = {};

function AboutUs(props) {
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

      <Review />
      <section className="wd-iconbox style-3 inner-iconbox-section">
        <div className="tf-container">
          <div className="title-iconbox style-3 stc">
            <h4>How it work?</h4>
            <p>
              One of the most valuable benefits we offer is our dedicated job
              board, tailored specifically for project, program, and product
              managers. Here’s how it supports your career growth:
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="group-col-3 d-flex justify-content-evenly">
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img1} alt="img" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">Regular updates</Link>
                    </h6>
                    <p>
                      On job openings from leading companies seeking experienced
                      professionals like you.
                    </p>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img2} alt="img" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">
                        Special job opportunities{" "}
                      </Link>
                    </h6>
                    <p>
                      for members, including roles from within the network or
                      our partner companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Iconbox3 />
      <Footer />
      <Gotop />
    </>
  );
}

export default AboutUs;
