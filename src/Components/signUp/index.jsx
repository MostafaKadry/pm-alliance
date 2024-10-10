import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TabPanel, Tabs } from "react-tabs";
import axios from 'axios';
import "./style.css";
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URI}/api/auth/signup`, { email, password });
      // Save token to localStorage or state
      localStorage.setItem('token', res.data.token);
      alert('Signed up successfully');
      window.location = '/login';
    } catch (err) {
      setError(err.response.data.msg || 'Error signing up');
    }
  };

  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);
  const [showPass4, setShowPass4] = useState(false);
  return (
    <section className="account-section mt-5">
      <div className="tf-container">
        <div className="row">
              {error && (
              <div className="error-container">
              <p>{error}</p>
              <button className="close-btn" onClick={() => setError(null)}>✖</button>
              </div>
              )}
          <Tabs className="wd-form-login tf-tab">
            <h4>Create Link free account</h4>

            <div className="content-tab">
              <TabPanel className="inner animation-tab">
                <form action="/">
                  <div className="ip">
                    <label>
                     Email address<span>*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="ip">
                    <label>
                      Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                    <input
                    type={`${showPass ? "text" : "password"}`}
                     className="input-form password-input"
                     placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />

                      <Link
                        className={`password-addon ${
                          showPass ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass(!showPass)}
                      />
                    </div>
                  </div>
                  <div className="ip">
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">

                        <input
                        type={`${showPass2 ? "text" : "password"}`}
                        className="input-form password-input"
                        placeholder="Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <Link
                        className={`password-addon ${
                          showPass2 ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass2(!showPass2)}
                      />
                    </div>
                  </div>
                  <div className="group-ant-choice st">
                    <div className="sub-ip">
                      <input type="checkbox" />I agree to the
                      <Link to="/termsofuse"> Terms of User</Link>
                    </div>
                  </div>
                  <button onClick={handleSubmit}>Register</button>
                  <div className="sign-up">
                    Already have an account?
                    <Link to="/login">&nbsp;Login Here</Link>
                  </div>
                </form>
              </TabPanel>
              <TabPanel className="inner animation-tab">
                <form action="/">
                  <div className="ip">
                    <label>
                      Username or email address<span>*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue="Tony Nguyen"
                      placeholder="Name"
                    />
                  </div>
                  <div className="ip">
                    <label>
                      Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type={`${showPass3 ? "text" : "password"}`}
                        className="input-form password-input"
                        defaultValue="userabcdefg123"
                        placeholder="Password"
                        required
                      />
                      <Link
                        className={`password-addon ${
                          showPass3 ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass3(!showPass3)}
                      />
                    </div>
                  </div>
                  <div className="ip">
                    <label>
                      Confirm Password<span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type={`${showPass4 ? "text" : "password"}`}
                        className="input-form password-input"
                        defaultValue="userabcdefg123"
                        placeholder="Password"
                        required 
                      />
                      <Link
                        className={`password-addon ${
                          showPass4 ? "icon-eye" : "icon-eye-off"
                        }`}
                        onClick={() => setShowPass4(!showPass4)}
                      />
                    </div>
                  </div>
                  <div className="group-ant-choice st">
                    <div className="sub-ip">
                      <input type="checkbox" />I agree to the
                      <Link to="/termsofuse"> Terms of User</Link>
                    </div>
                  </div>
                  <button onClick={handleSubmit}>Register</button>
                  <div className="sign-up">
                    Already have an account?
                    <Link to="/login">&nbsp;Login Here</Link>
                  </div>
                </form>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
