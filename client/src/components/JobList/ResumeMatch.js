import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Grid, Button, TextField, Card, CardContent, CircularProgress } from '@mui/material';
import Header from "../Login/Header";

const App = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false); // State to manage loading state
  
  const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const description = params.get('description');
        if (description) {
            setJobDescription(description);
        }
    }, [location]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('jobDescription', jobDescription);
    formData.append('resumeFile', resumeFile);
    setLoading(true); // Set loading state to true when submit button is clicked

    try {
      const apiResponse = await axios.post('/api/resume-analysis', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(apiResponse.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading state to false after response is received
    }
  };

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  return (
    <>
    <Header/>
    <Container maxWidth="md">
      <Typography variant="h6" component="h1" gutterBottom style={{ fontWeight: 'bold' }}>
        Resume Matcher ATS
      </Typography>

      <br></br>
      {response && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', boxShadow: 10 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <strong>Analysis Result</strong>
                </Typography>
                <br></br>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>JD Match:</strong> {response['JD Match']}
                </Typography>
                <br></br>
                {response['MissingKeywords'] && (
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>Missing Keywords:</strong> {response['MissingKeywords'].join(', ')}
                  </Typography>
                )}
                <br></br>
                {response['Profile Summary'] && (
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>Profile Summary:</strong> {response['Profile Summary']}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
      {!response && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', boxShadow: 10 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <strong>Job Description</strong>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  &nbsp;
                </Typography>
                <TextField
                  label="Paste the Job Description"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', boxShadow: 10 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <strong>Upload Resume</strong>
                </Typography>
                <input type="file" accept=".pdf" onChange={handleFileChange} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            {loading ? (
              <CircularProgress /> // Show loading indicator when loading state is true
            ) : (
              <Button
  variant="contained"
  style={{
    backgroundColor: '#0B0B15',
    color: 'white',
    opacity: jobDescription && resumeFile ? 1 : 0.5 // Adjust opacity based on conditions
  }}
  onClick={handleSubmit}
  disabled={!jobDescription || !resumeFile}
>
  Submit
</Button>

            )}
          </Grid>
        </Grid>
      )}
    </Container>
    </>
  );
};

export default App;
