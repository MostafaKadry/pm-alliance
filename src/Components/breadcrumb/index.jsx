import React from "react";
import { Link } from "react-router-dom";

Breadcrumb.propTypes = {};

function Breadcrumb({ title, className }) {
  return (
    <section
      className={`bg-f5 ${className ? className : ""}`}
      style={{ position: "relative", top: "14vh" }}
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title">
              <div className="widget-menu-link">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">{title}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
