import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Grid, Card, CardContent, Button, Avatar } from '@mui/material';
import { ImportContacts as ImportContactsIcon, ViewCarousel as ViewCarouselIcon } from '@mui/icons-material';
import Header from "../Login/Header";

const CreatePortfolioDashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
    <Header/>
    <Container maxWidth="md">
      <Box mt={8} mb={8}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Create Your Portfolio
        </Typography>
        <Typography variant="h6" component="p" gutterBottom align="center" sx={{ color: 'text.secondary' }}>
          Choose an option to get started
        </Typography>
        <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                textAlign: 'center', 
                boxShadow: 3, 
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                } 
              }}
            >
              <CardContent>
                <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                  <ViewCarouselIcon />
                </Avatar>
                <Typography variant="h5" component="div" gutterBottom>
                  Select Templates
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleNavigation('/templates')}>
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                textAlign: 'center', 
                boxShadow: 3, 
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                } 
              }}
            >
              <CardContent>
                <Avatar sx={{ bgcolor: 'secondary.main', mx: 'auto', mb: 2 }}>
                  <ImportContactsIcon />
                </Avatar>
                <Typography variant="h5" component="div" gutterBottom>
                  Custom Portfolio
                </Typography>
                <Button variant="contained" color="secondary" onClick={() => handleNavigation('/customPortfolio')}>
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </Box>
    </Container>
    </>
  );
};

export default CreatePortfolioDashboard;
