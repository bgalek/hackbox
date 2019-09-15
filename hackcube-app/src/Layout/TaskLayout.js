import React from 'react';
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { VerticalLogo } from "../Components/VerticalLogo";

const useStyles = makeStyles(theme => ({
    grid: {
        borderRadius: 20,
        margin: '-50px auto 0 auto',
        backgroundColor: 'white',
        width: '100%',
    },
    header: {
        height: 125,
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center'
    }
}));

export default function TaskLayout({ children, img, step = 0 }) {
    const classes = useStyles();
    return [
        <div className={classes.header}><VerticalLogo/></div>,
        <Grid direction="column" container justify="space-between" alignItems="center" spacing={2} className={classes.grid}>
            {children}
        </Grid>
    ]
}
