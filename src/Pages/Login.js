import React from 'react';
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="Login">
        <div className="login_container">
        <h2 className="login_page">Login</h2>
          <div className="email">
            <label className="label_email" htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter email" required />
          </div>
          <div className="password">
            <label className="label_pass" htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter password" required />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
