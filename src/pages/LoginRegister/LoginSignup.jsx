import React, { useState } from 'react';
import './style.css';
import loginImg from '../../assets/login.jpg'
import signUpImg from '../../assets/signup.jpg'

import UopLogo from '../../assets/crest.png';
import LoginNav from '../../components/nav/LoginNav';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className=''>
      <LoginNav/>

    <section id="reg_login" className=''>
      <div className={`container ${isSignup ? "active" : ""} rounded-2xl`}>

        {/* Sign In */}
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src={loginImg}
              alt="signin"
              className=' relative'
            />


          </div>

          <div className="formBx">
            <form action="contactus.php" method="post">
              <h2>Sign In</h2>
              <input type="text" name="loginUsername" placeholder="Username" required />
              <input type="password" name="pass" placeholder="Password" required />
              <input type="submit" name="Login" value="Login" />
              <p className="signup">
                Don't have an account?{" "}
                <a href="#" onClick={toggleForm}>
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Sign Up */}
        <div className="user signupBx">
          <div className="formBx">
            <form action="contactus.php" method="post">
              <h2>Create an account</h2>
              <input type="text" name="signupUsername" placeholder="Username" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="password" name="crpass" placeholder="Create Password" required />
              <input type="password" name="conpass" placeholder="Confirm Password" required />
              <input type="submit" name="signup" value="Sign Up" />
              <p className="signup">
                Already have an account?{" "}
                <a href="#" onClick={toggleForm}>
                  Sign In
                </a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src={signUpImg}
              alt="signup"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default LoginSignup;
