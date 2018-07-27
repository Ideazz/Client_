import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">List</Link></li>
      <li><Link to="/form">Form</Link></li>
      <li><Link to="/test">Test</Link></li>
      <li><Link to="/login_one">Login As Ideators</Link></li>
      <li><Link to="/login_two">Login As Entreprenuer</Link></li>
      <li><Link to="/ideas">Ideas</Link></li>
    </ul>
  </nav>
);


export default Navigation;
