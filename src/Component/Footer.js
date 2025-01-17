import React from 'react'
import "./Footer.css"
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    
    navigate('/Signup'); 
};
  return (
    <>
    <div className="footer">
<button onClick={handleLogin} className="btn">Register for Free</button>
    </div>
      
    </>
  )
}

export default Footer
