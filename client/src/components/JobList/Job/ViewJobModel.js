import React from 'react';
import { Box, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton, Grid, Button } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const ViewJobModel = (props) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { job, closeModal } = props;

    const isOpen = job && Object.keys(job).length > 0;
    const handleNavigation = () => {
        navigate(`/resumeMatch?description=${encodeURIComponent(job.description)}`);
    };

    return (
        <Dialog open={isOpen} fullWidth>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">{job.title} @ {job.companyName}</Typography>
                <IconButton onClick={closeModal}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box>
                    {job.postedOn && (
                        <Box sx={{ display: 'flex', margin: 5 }}>
                            <Typography variant='body2' sx={{ marginRight: '10px' }}>Posted on: </Typography>
                            <Typography variant='body2'>
                                {format(job.postedOn, "dd/MMM/yyyy HH:MM")}
                            </Typography>
                        </Box>
                    )}
                    {job.type && (
                        <Box sx={{ display: 'flex', margin: 5 }}>
                            <Typography variant='body2' sx={{ marginRight: '10px' }}>Job type: </Typography>
                            <Typography variant='body2'>
                                {job.type}
                            </Typography>
                        </Box>
                    )}
                    {job.location && (
                        <Box sx={{ display: 'flex', margin: 5 }}>
                            <Typography variant='body2' sx={{ marginRight: '10px' }}>Job location: </Typography>
                            <Typography variant='body2'>
                                {job.location}
                            </Typography>
                        </Box>
                    )}
                    {job.description && (
                        <Box sx={{ display: 'flex', margin: 5 }}>
                            <Typography variant='body2' sx={{ marginRight: '10px' }}>Job description: </Typography>
                            <Typography variant='body2'>
                                {job.description}
                            </Typography>
                        </Box>
                    )}
                    {job.companyName && (
                        <Box sx={{ display: 'flex', margin: 5 }}>
                            <Typography variant='body2' sx={{ marginRight: '10px' }}>Company name: </Typography>
                            <Typography variant='body2'>
                                {job.companyName}
                            </Typography>
                        </Box>
                    )}
                    {job.skills && job.skills.length > 0 && (
                        <Box ml={.5} sx={{ display: 'flex', margin: 5 }}>
                            <Typography variant='body2' sx={{ marginRight: '10px' }}>Skills: </Typography>
                            <Grid container alignItems="center">
                                {job.skills.map((skill) => (
                                    <Typography variant="body2" key={skill} sx={{ margin: theme.spacing(0.5), padding: theme.spacing(0.75), fontSize: "14.5px", borderRadius: "5px", fontWeight: 600, backgroundColor: theme.palette.secondary.main, color: "white" }}>
                                        {skill}
                                    </Typography>
                                ))}
                            </Grid>
                        </Box>
                    )}
                </Box>
            </DialogContent>
            <Button
      variant="outlined"
      sx={{
        color: 'black',
        border: '2px solid black',
        minWidth: '150px',
        marginLeft: 'auto', 
        marginBottom: '10px',
        marginRight: '20px',
      }}
      onClick={handleNavigation}>
      Resume Match
    </Button>
        </Dialog>
    );
}

export default ViewJobModel;
