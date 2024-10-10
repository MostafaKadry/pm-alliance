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
    { path: "/", element: <Home_v1 /> },
    { path: "/aboutus", element: <AboutUs /> },
    {
      path: "/jobsingle_v1/:jobID",
      element: <ProtectedRoute element={<Joblist_v1 />} />,
    },
    {
      path: "/job-list-sidebar",
      element: <ProtectedRoute element={<Joblist_v3 />} />,
    },
    {
      path: "/job-list-sidebar/category/:title",
      element: <ProtectedRoute element={<Joblist_v3 />} />,
    },
    {
      path: "/PPM Tools",
      element: <ProtectedRoute element={<PPMTools />} />,
    },
    {
      path: "/AI-Resume-Editor/Job-Matcher",
      element: <ProtectedRoute element={<AI />} />,
    },
    {
      path: "/reviews",
      element: <ProtectedRoute element={<Reviews />} />,
    },
    {
      path: "/newsletter",
      element: <ProtectedRoute element={<Newsletter />} />,
    },
    { path: "/login", element: <Login /> },
    { path: "/loginWithLinkedIn", element: <Login /> },
    { path: "/createaccount", element: <SignUp /> },
    
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
