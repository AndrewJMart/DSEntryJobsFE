// src/components/JobList.js
import React, { useEffect, useState } from 'react';
import JobItem from './JobItem';
import { fetchJobs } from '../services/api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const jobData = await fetchJobs();
      setJobs(jobData);
    };
    getJobs();
  }, []);

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
