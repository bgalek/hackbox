import React from 'react';
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        backgroundColor: theme.palette.primary.main
    },
    grid: {
        height: '100%',
    }
}));

export default function Layout({ children }) {
    const classes = useStyles();
    return <Container key="main" className={classes.container}>
        <Grid direction="column" container justify="space-evenly" alignItems="center" className={classes.grid}>
            {children}
        </Grid>
    </Container>
}
