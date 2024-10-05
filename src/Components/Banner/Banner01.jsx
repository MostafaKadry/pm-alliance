import React from "react";
import "./style.scss";
import FormContent from "./FormContent";

Banner01.propTypes = {};

function Banner01(props) {
  return (
    <section className="tf-slider sl1 parallax">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <FormContent />
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Banner01;
