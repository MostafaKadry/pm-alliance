import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import img from "../../assets/images/review/google.png";
import img2 from "../../assets/images/review/tweet.png";
import axios from 'axios';
import { useDispatch } from 'react-redux'; // Import useDispatch to access Redux actions
import { setUser  } from '../../redux/actions/userActions'; // Import your login action
import { FaLinkedin } from 'react-icons/fa';
// import "./style.css";
function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize useNavigate
  const handleSubmit = async (e) => {
    if(!email || !password) {
      return setError('Error logging in');
    }
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URI}/api/auth/login`, { email, password });
      // Save token to localStorage or state
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('email', email);
      dispatch(setUser(res.data.token)); // Dispatch action to set user
      alert('Logged in successfully');
      navigate('/jobsPlatform-FrontEnd/');
    } catch (err) {
      setError(err.response.data.msg || 'Error logging in');
    }
  }; 
  const LinkedInLogin = async () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_SERVER_URI}/api/auth/linkedin`;  
  };
  // Create a new useEffect to handle the response after LinkedIn authentication
  useEffect(() => {
    const handleLinkedInResponse = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      console.log('Token:', token); // Check if token is received

      if (token) {
        // Save token to localStorage
        localStorage.setItem('token', token);

        // Optionally fetch user data from backend
        try { 
          const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URI}/api/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const userData = res.data;

          // Save user data to localStorage or Redux
          localStorage.setItem('user', JSON.stringify(userData));
          localStorage.setItem('email',JSON.stringify(userData.email) );
          dispatch(setUser(userData));

          // Navigate to home or any protected route
          navigate('/jobsPlatform-FrontEnd');
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
    };

    handleLinkedInResponse();
  }, [dispatch, navigate]);
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
              <button onClick={handleSubmit} style={{marginBottom: '20px'}}> Login</button>
              <p className="line-ip">
                <span>or sign up with</span>
              </p>
              {/* <Link onClick={LinkedInLogin} className="btn-social">
                Continue with LinkedIn
              </Link> */}
              <button 
            onClick={LinkedInLogin} 
            style={{
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#0077B5', // LinkedIn Blue
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                padding: '10px 20px', 
                cursor: 'pointer',
                fontSize: '16px',
            }}
        >
            <FaLinkedin style={{ marginRight: '8px' }} />
            Continue with LinkedIn
        </button>
              {/* <Link to="#" className="btn-social">
                <img src={img} alt="images" /> Continue with Google
              </Link>
              <Link to="#" className="btn-social">
                <img src={img2} alt="images" /> Continue with Twitter
              </Link> */}
              
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
