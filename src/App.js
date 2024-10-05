import React from "react";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Home_v1 from "./pages/Home_v1";
import Joblist_v1 from "./pages/Jobsingle_v1";
import Joblist_v3 from "./pages/Joblist_v3";
import AboutUs from "./pages/AboutUs";
import Insights from "./pages/Insights";
import AI from "./pages/AI";
import Reviews from "./pages/Reviews";
import Newsletter from "./pages/newsletter";
import Login from "./pages/Login";
import SignUp from "./pages/CreateAccount";

import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import Preloader from "./Components/preloader";

const App = () => {
  let routes = useRoutes([
    { path: "/jobsPlatform-FrontEnd/", element: <Home_v1 /> },
    { path: "/jobsPlatform-FrontEnd/jobsingle_v1/:jobID", element: <Joblist_v1 /> },
    { path: "/jobsPlatform-FrontEnd/job-list-sidebar", element: <Joblist_v3 /> },
    { path: "/jobsPlatform-FrontEnd/job-list-sidebar/category/:title", element: <Joblist_v3 /> },
    { path: "/jobsPlatform-FrontEnd/aboutus", element: <AboutUs /> },
    { path: "/jobsPlatform-FrontEnd/insights", element: <Insights /> },
    { path: "/jobsPlatform-FrontEnd/AI-Resume-Editor/Job-Matcher", element: <AI /> },
    { path: "/jobsPlatform-FrontEnd/reviews", element: <Reviews /> },
    { path: "/jobsPlatform-FrontEnd/newsletter", element: <Newsletter /> },
    { path: "/jobsPlatform-FrontEnd/login", element: <Login /> },
    { path: "/jobsPlatform-FrontEnd/createaccount", element: <SignUp /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default AppWrapper;
