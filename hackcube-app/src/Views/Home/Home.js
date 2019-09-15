import React from "react";
import { makeStyles } from "@material-ui/core";
import logo from "../../Layout/logo.svg";
import StoryLayout from "../../Layout/Layout";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";

const useStyles = makeStyles(theme => ({
    white: {
        color: '#fff'
    },
    heading: {
        color: '#fff',
        fontWeight: 'bolder'
    }
}));

export function Home({ path }) {
    const classes = useStyles();
    return <StoryLayout key={path}>
        <Grid item>
            <img src={logo} style={{ marginLeft: -20 }} alt="logo"/>
        </Grid>
        <Grid item>
            <Typography align="center" variant="h4" className={classes.heading} gutterBottom>Hack Cube</Typography>
            <Typography align="center" variant="body1" className={classes.white}>Don't get hacked<br/>Hack them first!</Typography>
        </Grid>
        <Grid item>
            <Button size="large" variant="contained" color="secondary" onClick={() => navigate('/story/1')}>Start</Button>
        </Grid>
    </StoryLayout>
}
