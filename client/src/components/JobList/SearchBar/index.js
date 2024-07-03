import React, { useState } from 'react';
import { Box, Button, Select, MenuItem, CircularProgress, TextField } from '@mui/material';

const SearchBar = (props) => {
    const [loading, setLoading] = useState(false);
    const [jobSearch, setJobSearch] = useState({
        location: "us",
        title: "",
        datePosted: ""
    });

    const handleChange = (e) => {
        setJobSearch((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSearch = async () => {
        setLoading(true);
        await props.fetchJobsCustom(jobSearch);
        setLoading(false);
    };

    return (
        <Box p={2} mt={-5} mb={2} sx={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
            borderRadius: "5px",
            "& > *": {
                flex: 1,
                margin: "8px",
            },
        }}>
            <TextField
                name="title"
                value={jobSearch.title}
                onChange={handleChange}
                placeholder="Job Title"
                variant="outlined"
                size="small"
                sx={{
                    marginX: 1,
                    backgroundColor: "#f9f9f9",
                    borderRadius: "5px",
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ced4da',
                        },
                        '&:hover fieldset': {
                            borderColor: '#80bdff',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#80bdff',
                        },
                    },
                }}
            />
            <Select
                disableUnderline
                variant="outlined"
                size="small"
                name="location"
                value={jobSearch.location}
                onChange={handleChange}
                sx={{
                    backgroundColor: "#f9f9f9",
                    borderRadius: "5px",
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ced4da',
                        },
                        '&:hover fieldset': {
                            borderColor: '#80bdff',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#80bdff',
                        },
                    },
                }}
            >
                <MenuItem value="us">US</MenuItem>
                <MenuItem value="non_us">Non-US</MenuItem>
            </Select>
            {/* <Select
                disableUnderline
                variant="outlined"
                size="small"
                name="datePosted"
                value={jobSearch.datePosted}
                onChange={handleChange}
                sx={{
                    backgroundColor: "#f9f9f9",
                    borderRadius: "5px",
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ced4da',
                        },
                        '&:hover fieldset': {
                            borderColor: '#80bdff',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#80bdff',
                        },
                    },
                }}
            >
                <MenuItem value="last_24_hours">Last 24 hours</MenuItem>
                <MenuItem value="last_week">Last week</MenuItem>
                <MenuItem value="last_month">Last month</MenuItem>
            </Select> */}
            <Button
                disabled={loading}
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleSearch}
                sx={{
                    height: "40px",
                    '&:hover': {
                        backgroundColor: "primary",
                    },
                }}
            >
                {loading ? (
                    <CircularProgress color="inherit" size={22} />
                ) : (
                    "Search"
                )}
            </Button>
        </Box>
    );
};

export default SearchBar;
