// src/pages/Home.js
import React from 'react';
import JobList from '../components/JobList';

const Home = () => {
  return (
    <div>
      <h1>Job Listings</h1>
      <JobList />
    </div>
  );
};

export default Home;
