import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider, Grid, CircularProgress, Button } from '@mui/material';
import './App.css';
import theme from "./theme";
import HeaderJob from "./HeaderJob";
import SearchBar from './SearchBar';
import JobCard from './Job/JobCard';
import { Close as CloseIcon } from '@mui/icons-material'; 
import ViewJobModel from './Job/ViewJobModel'; 
import Header from '../Login/Header';
const API_URL_US = 'https://api.adzuna.com/v1/api/jobs/us';
const API_URL_GB = 'https://api.adzuna.com/v1/api/jobs/gb';
const API_ID = 'f93d8839';
const API_KEY = '18141be7cdcf78887fabda94de38a549';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [viewJob, setViewJob] = useState({});

  const fetchJobs = async () => {
    setCustomSearch(false);
    setLoading(true);
    try {
      const response = await fetch(`${API_URL_GB}/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=20`);
      const data = await response.json();
      const tempJobs = data.results.map(job => ({
        id: job.id,
        title: job.title,
        companyName: job.company.display_name,
        location: job.location.display_name,
        description: job.description,
        type: job.contract_time,
        postedOn: new Date(job.created),
        skills: job.category.label.split(' ')
      }));
      setJobs(tempJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
    setLoading(false);
  };

  const fetchJobsCustom = async (jobSearch) => {
    setLoading(true);
    setCustomSearch(true);
    try {
        const locationParam = jobSearch.location === "us" ? API_URL_US : API_URL_GB;
        const apiUrl = `${locationParam}/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=20&what=${jobSearch.title}`;
        console.log("API URL:", apiUrl);
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (!data.results || data.results.length === 0) {
          console.log('No jobs found for the given criteria');
          setJobs([]);
        } else {
          const tempJobs = data.results.map(job => ({
              id: job.id,
              title: job.title,
              companyName: job.company.display_name,
              location: job.location.display_name,
              description: job.description,
              type: job.contract_time,
              postedOn: new Date(job.created),
              skills: job.category.label.split(' ')
          }));
          setJobs(tempJobs);
        }
    } catch (error) {
        console.error('Error fetching custom jobs:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleCloseModal = () => {
    setViewJob({});
  };

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <HeaderJob />
      <ViewJobModel job={viewJob} closeModal={handleCloseModal} /> 
      <Box mb={3}>
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <SearchBar fetchJobsCustom={fetchJobsCustom} /> 
            {loading ? (
              <Box display="flex" justifyContent="center"><CircularProgress /></Box>
            ) : (
              <>
                {customSearch && (
                  <Box display="flex" justifyContent="flex-end">
                    <Button color='secondary' onClick={fetchJobs}><CloseIcon size={20}/>Custom Search</Button>
                  </Box>
                )}
                {jobs.map(job => <JobCard open={() => setViewJob(job)} key={job.id} {...job} />)}
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
