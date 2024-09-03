// src/components/JobItem.js
import React from 'react';

const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary ? `Salary: ${job.salary}` : 'Salary: Not specified'}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobItem;
