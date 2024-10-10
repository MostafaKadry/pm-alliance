import React from "react";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Home_v1 from "./pages/Home_v1";
import Joblist_v1 from "./pages/Jobsingle_v1";
import Joblist_v3 from "./pages/Joblist_v3";
import AboutUs from "./pages/AboutUs";
import PPMTools from "./pages/PPMTools";
import AI from "./pages/AI";
import Reviews from "./pages/Reviews";
import Newsletter from "./pages/newsletter";
import Login from "./pages/Login";
import SignUp from "./pages/CreateAccount";
import NotFound from './Components/notfound';
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import Preloader from "./Components/preloader";
import ProtectedRoute from './Components/ProtectedRoute';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.user);
  let routes = useRoutes([
    { path: "/jobsPlatform-FrontEnd/", element: <Home_v1 /> },
    { path: "/jobsPlatform-FrontEnd/aboutus", element: <AboutUs /> },
    {
      path: "/jobsPlatform-FrontEnd/jobsingle_v1/:jobID",
      element: <ProtectedRoute element={<Joblist_v1 />} />,
    },
    {
      path: "/jobsPlatform-FrontEnd/job-list-sidebar",
      element: <ProtectedRoute element={<Joblist_v3 />} />,
    },
    {
      path: "/jobsPlatform-FrontEnd/job-list-sidebar/category/:title",
      element: <ProtectedRoute element={<Joblist_v3 />} />,
    },
    {
      path: "/jobsPlatform-FrontEnd/PPM Tools",
      element: <ProtectedRoute element={<PPMTools />} />,
    },
    {
      path: "/jobsPlatform-FrontEnd/AI-Resume-Editor/Job-Matcher",
      element: <ProtectedRoute element={<AI />} />,
    },
    {
      path: "/jobsPlatform-FrontEnd/reviews",
      element: <ProtectedRoute element={<Reviews />} />,
    },
    {
      path: "/jobsPlatform-FrontEnd/newsletter",
      element: <ProtectedRoute element={<Newsletter />} />,
    },
    { path: "/jobsPlatform-FrontEnd/login", element: <Login /> },
    { path: "/jobsPlatform-FrontEnd/loginWithLinkedIn", element: <Login /> },
    { path: "/jobsPlatform-FrontEnd/createaccount", element: <SignUp /> },
    
   { path:"*", element:<NotFound /> }
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
