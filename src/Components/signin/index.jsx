import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/review/google.png";
import img2 from "../../assets/images/review/tweet.png";
import axios from 'axios';
// import "./style.css";
function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      // Save token to localStorage or state
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('email', email);
      alert('Logged in successfully');
      window.location = '/jobsPlatform-FrontEnd/'
    } catch (err) {
      setError(err.response.data.msg || 'Error logging in');
    }
  };
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
          <div className="wd-form-login">
            <h4>Log In</h4>
            <form action="/">
              <div className="ip">
                <label>
                  email address<span>*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="ip">
                <label>
                  Password<span>*</span>
                </label>
                <div className="inputs-group auth-pass-inputgroup">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input-form password-input"
                    placeholder="Password"
                    id="password-input"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <Link
                    className={`password-addon ${
                      showPass ? "icon-eye" : "icon-eye-off"
                    }`}
                    id="password-addon"
                    onClick={() => setShowPass(!showPass)}
                  />
                </div>
              </div>
              <div className="group-ant-choice">
                <div className="sub-ip">
                  <input type="checkbox" />
                  Remember me
                </div>
                <Link to="#" className="forgot">
                  Fogot password?
                </Link>
              </div>
              <p className="line-ip">
                <span>or sign up with</span>
              </p>
              <Link to="#" className="btn-social">
                Continue with LinkedIn
              </Link>
              <Link to="#" className="btn-social">
                <img src={img} alt="images" /> Continue with Google
              </Link>
              <Link to="#" className="btn-social">
                <img src={img2} alt="images" /> Continue with Twitter
              </Link>
              <button onClick={handleSubmit}>Login</button>
              <div className="sign-up">
                Not registered yet? <Link to="/jobsPlatform-FrontEnd/createaccount">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
