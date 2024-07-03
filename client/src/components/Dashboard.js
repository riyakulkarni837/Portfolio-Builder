import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import { ResumeContext } from './ContextProvider/ResumeContextProvider';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CreateIcon from '@mui/icons-material/Create';
import DescriptionIcon from '@mui/icons-material/Description';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';
import Header from './Login/Header';

const StyledButton = styled(Button)({
    borderRadius: 20,
    padding: '10px 20px',
    textTransform: 'capitalize',
    marginTop: 10,
    '&:hover': {
        backgroundColor: '#4caf50',
    },
});

const Dashboard = () => {
    const { setLoginData, logindata } = useContext(LoginContext);
    const {setResumeData, resume} = useContext(ResumeContext);
    const [data, setData] = useState(false);
    const history = useNavigate();

    const handleNav = () =>{
        window.location.href = 'http://localhost:3000/resume-parser';
    }
    const handleNavAnalytics = () =>{
        window.location.href = 'http://localhost:8501/RESUME_ANALYZER';
    }

    const DashboardValid = async () => {
        const token = localStorage.getItem("usersdatatoken");
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await res.json();

        if (data.status === 401 || !data) {
            history("*");
        } else {
            console.log("user verify");
            setLoginData(data);
            setData(true);
        }

    }

    const FetchResume = async () => {
        const token = localStorage.getItem("usersdatatoken");
        const res1 = await fetch("http://localhost:6005/api/getResume", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const data1 = await res1.json();

        if(data1.status===201) {
            console.log("resume verify");
            console.log(data1);
            setResumeData(data1);
            setData(true);
        }
        else
        {console.log(data1.status);}
      }

    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            FetchResume();
        }, 2000);
    }, []);

    const handleNavigation = (path) => {
        history(path);
    }

    return (
        <>
        <Header/>
            {data ? (
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={{ backgroundColor: '#0B0B15', color:'white' }}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ flexGrow: 1, color:'white' }}>
                                Dashboard
                            </Typography>
                            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'right', color:'white' }}>
    Welcome, {logindata.ValidUserOne.fname}!
</Typography>

                        </Toolbar>
                    </AppBar>
                    <Box sx={{
                        height: 'calc(100vh - 64px)', // Subtracting AppBar height
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 2, // Adjusted padding to shift content upwards more
                        paddingBottom: 30, // Added padding to create more space at the bottom
                    }}>
                        <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} md={4}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', boxShadow: 10 }}>
                                    <CardContent>
                                        <Avatar sx={{ bgcolor: 'success.main', mx: 'auto', mb: 2 }}>
                                            <DescriptionIcon />
                                        </Avatar>
                                        <Typography variant="h5" component="div" gutterBottom>
                                            Resume
                                        </Typography>
                                        <StyledButton variant="contained" color="primary" onClick={handleNav}>
                                            Upload Resume
                                        </StyledButton>
                                    </CardContent>
                                </Card>
                            </Grid>
                        <Grid item xs={12} md={4}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', boxShadow: 10 }}>
                                    <CardContent>
                                        <Avatar sx={{ bgcolor: 'secondary.main', mx: 'auto', mb: 2 }}>
                                            <CreateIcon />
                                        </Avatar>
                                        <Typography variant="h5" component="div" gutterBottom>
                                            Create Portfolio
                                        </Typography>
                                        <StyledButton variant="contained" color="primary" onClick={() => handleNavigation('/createPortfolio')}>
                                            Create
                                        </StyledButton>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', boxShadow: 10 }}>
                                    <CardContent>
                                        <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                                            <WorkOutlineIcon />
                                        </Avatar>
                                        <Typography variant="h5" component="div" gutterBottom>
                                            Job List
                                        </Typography>
                                        <StyledButton variant="contained" color="primary" onClick={() => handleNavigation('/viewJob')}>
                                            View Jobs
                                        </StyledButton>
                                    </CardContent>
                                </Card>
                            </Grid>
                            
                            <Grid item xs={12} md={4}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', boxShadow: 10 }}>
                                    <CardContent>
                                        <Avatar sx={{ bgcolor: 'info.main', mx: 'auto', mb: 2 }}>
                                            <AssessmentIcon />
                                        </Avatar>
                                        <Typography variant="h5" component="div" gutterBottom>
                                            User Analytics
                                        </Typography>
                                        <StyledButton variant="contained" color="primary" onClick={handleNavAnalytics}>
                                            View Analytics
                                        </StyledButton>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            )}
        </>
    );
}

export default Dashboard;


