import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import logo from "../logo.jpeg";
// import user from "../user.png";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Smart icon
import "./style.css";
import { logoutUser } from '../../redux/actions/userActions';
function Header({ clname = "", handleMobile }) {
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown toggle
  const dispatch = useDispatch();

  // Check if user is logged in by checking the token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const email = localStorage.getItem("email");
      if (email) {
        const user = email.split("@")[0]; // Extract the part before '@'
        setUsername(user);
      }
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    // Dispatch logout action to clear user state in Redux store
    dispatch(logoutUser());
    setUsername(null);
    setDropdownOpen(false); // Close the dropdown after logout
  };

  // Toggle the dropdown menu visibility
  const toggleDropdown = (e) => {
    console.log("clicked")
    e.stopPropagation(); // Prevent any event propagation issues
    setDropdownOpen((prevState) => !prevState); // Toggle dropdown state
  };

  // Close dropdown when clicking outside
  const handleOutsideClick = () => {
    setDropdownOpen(false); // Close dropdown when clicked outside
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownOpen]);

  // Handle navbar scroll effect
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);

  return (
    <header
      id="header"
      className={`header header-default style-absolute header-fixed ${
        scroll ? "is-fixed is-small" : "is-fixed is-small"
      }`}
    >
      <div className="tf-container ct2">
        <div className="row">
          <div className="col-md-12 navbar-light">
            <div className="sticky-area-wrap">
              <div className="header-ct-left m-0 p-0">
                <div id="logo" className="logo m-0 p-0">
                  <Link to="/jobsPlatform-FrontEnd/">
                    <img
                      className="site-logo p-3"
                      id="trans-logo"
                      src={logo}
                      alt="img"
                    />
                  </Link>
                </div>
              </div>

              <div className="header-ct-center">
                <div className="nav-wrap">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                    <li className={`menu-item`}>
                        <NavLink to="/jobsPlatform-FrontEnd/aboutus">
                          About Us
                        </NavLink>
                      </li> 
                      <li className={`menu-item`}>
                        <NavLink to="/jobsPlatform-FrontEnd/">Job Board</NavLink>
                      </li>
                      <li className="menu-item">
                        <NavLink to="/jobsPlatform-FrontEnd/PPM Tools">
                          PPM Tools
                        </NavLink>
                      </li>
                      <li className="menu-item">
                        <NavLink to="/jobsPlatform-FrontEnd/AI-Resume-Editor/Job-Matcher">
                          Eli - AI
                        </NavLink>
                      </li>
                      <li className="menu-item">
                        <NavLink to="/jobsPlatform-FrontEnd/reviews">
                          Reviews
                        </NavLink>
                      </li>
                      <li className="menu-item">
                        <NavLink to="/jobsPlatform-FrontEnd/newsletter">
                          Newsletter
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="header-ct-right">
              {/**
               * 
                <div className="header-customize-item account">
                  <img src={user} alt="user icon" />
                  <div className="name">Candidates</div>
                </div>
                  */} 

                <div className="header-customize-item account">
                  {/* Conditionally render login link or username with dropdown */}
                  {username ? (
                    <div className="dropdown-wrapper" >
                      <FaUserCircle
                        className="user-icon"
                        size={30}
                         // Handle icon click to toggle dropdown
                         onClick={(e)=> toggleDropdown(e)}
                      />
                      {dropdownOpen && (
                        <div className="dropdown-menu">
                          <div className="dropdown-item" onClick={handleLogout}>
                            Logout
                          </div>
                          <div
                            className="dropdown-item"
                            onClick={() => setDropdownOpen(false)}
                          >
                            Close
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="button">
                      <Link
                        to="/jobsPlatform-FrontEnd/login"
                        className="btn-login"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </div>

                <div className="nav-filter" onClick={handleMobile}>
                  <div className="nav-mobile">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
