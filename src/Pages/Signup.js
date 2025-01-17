import React from 'react';
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <div className="Signup">
        <div className="signup_container">
          <h2 className="signup_page">Sign Up</h2>
        <div className="name">
            <label className="name" htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter name" required />
          </div>
          <div className="email">
            <label className="label_email" htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter email" required />
          </div>
          <div className="password">
            <label className="label_pass" htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter password" required />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
