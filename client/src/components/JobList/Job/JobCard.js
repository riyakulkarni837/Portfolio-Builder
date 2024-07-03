import React from 'react';
import { Box, Grid, Typography, Button, useTheme } from '@mui/material';
import { differenceInMinutes, formatDistanceToNow } from 'date-fns';

export default props => {
    const theme = useTheme();
    const minutes = differenceInMinutes(Date.now(), props.postedOn);
    const timeDisplay = minutes > 60 ? `${Math.floor(minutes / 60)} hours ago` : `${minutes} min ago`;

    return (
        <Box p={2} sx={{ border: "1px solid #e8e8e8", cursor:"pointer", transition:'0.3s', '&:hover': {
            boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
            borderLeft: "6px solid #4D64E4",
        } }}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography variant='subtitle1'>{props.title}</Typography>
                    <Typography variant='subtitle2' sx={{ fontSize: "13.5px", backgroundColor: "#0B0B15", padding: "8px", borderRadius: "5px", display: "inline-block", fontWeight: 600, color: 'white' }}>{props.companyName}</Typography>
                </Grid>
                <Grid item container xs>
                    {props.skills && props.skills.map((skill) => (
                        <Grid key={skill} sx={{ margin: theme.spacing(0.5), padding: theme.spacing(0.75), fontSize: "14.5px", borderRadius: "5px", fontWeight: 600, backgroundColor: theme.palette.primary.main, color: "fff" }} item>{skill}</Grid>
                    ))}
                </Grid>
                <Grid item container direction="column" alignItems='flex-end' xs>
                    <Grid item>
                        <Typography variant='caption'>{timeDisplay} | {props.type} | {props.location}</Typography>
                    </Grid>
                    <Box mt={2}>
                        <Grid item>
                        <Button variant='outlined' sx={{ color: "black", border: '2px solid black' }} onClick={props.open}>Check</Button>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
