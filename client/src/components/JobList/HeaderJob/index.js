import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const HeaderJob = (props) => (
  <Box py={5} bgcolor="secondary.main" color="#2d3748" fontWeight="bold">
    <Grid container justifyContent="center" alignItems="center"> {/* Add alignItems="center" */}
      <Grid item xs={10}>
        <Typography variant="h4" color="white" >Open Job Listing</Typography> {/* Apply fontWeight to Typography */}
      </Grid>
    </Grid>
  </Box>
);

export default HeaderJob;
