import React from "react";
import { Link } from "react-router-dom";
import logo from "../print_transparent.svg";

Footer.propTypes = {};

function Footer(props) {
  const width = window.innerWidth;
  const flex = width > 750 ? "justify-content-between" : "flex-column";

  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-2 col-md-4">
              <div className="footer-logo">
                <img src={logo} alt="images" />
              </div>
            </div>
            <div className="col-lg-10 col-md-8">
              <div className="wd-social d-flex aln-center">
                <span>Follow Us:</span>
                <ul className="list-social d-flex aln-center">
                  <li>
                    <Link to="#">
                      <i className="icon-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-instagram1"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="bi bi-github"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inner-footer">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-cl-1">
                <div className="icon-infor d-flex aln-center">
                  <div className="icon">
                    <span className="icon-call-calling">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </span>
                  </div>
                  <div className="content">
                    <p>Need help? 24/7</p>
                    <h6>
                      <Link to="">info@pmnetworkaliance.com</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="footer-cl-2">
                <h6 className="ft-title">Quick Links</h6>
                <ul className={`navigation-menu-footer d-flex ${flex}`}>

                  <li>
                    {" "}
                    <Link to="/jobsPlatform-FrontEnd/aboutus">About Us</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/jobsPlatform-FrontEnd/">Job Board</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/jobsPlatform-FrontEnd/PPM Tools">PPM Tools</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/jobsPlatform-FrontEnd/AI-Resume-Editor/Job-Matcher">
                      Eli - AI
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/jobsPlatform-FrontEnd/newsletter">Newsletter</Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
