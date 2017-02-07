import React from 'react';

const Link = require('react-router').Link;

const About = () =>
  (
    <div>
      <Link to={'/'}>Home</Link>
      <h2>All about me</h2>
    </div>
  );

export default About;
