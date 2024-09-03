import axios from 'axios';

const API_URL = 'https://dsentryjobsbe.onrender.com/';  // Adjust this to match your backend's URL

export const fetchJobs = async () => {
  try {
    const response = await axios.get(`${API_URL}/jobs/fetch`);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};
