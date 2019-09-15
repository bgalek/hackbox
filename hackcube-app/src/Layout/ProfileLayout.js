import React from 'react';
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Card } from "../Components/Card";
import { VerticalLogo } from "../Components/VerticalLogo";

const useStyles = makeStyles(theme => ({
    grid: {
        minHeight: '85%',
    },
    header: {
        height: '25%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        textAlign: 'center',
        boxShadow: 'inset 0 0 0 500px rgba(0, 82, 255, 0.3)'
    },
    stepper: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        paddingBottom: 10
    }
}));

export default function ProfileLayout({ children, img, step = 0 }) {
    const classes = useStyles();
    return [
        <div className={classes.header} style={{ backgroundImage: `url(${img})` }}>
            <VerticalLogo gradient/>
        </div>,
        <Card cardStyle={{ margin: '-50px auto 0 auto' }}>
            <Grid direction="column" container justify="space-between" alignItems="center" spacing={2}
                  className={classes.grid}>
                {children}
            </Grid>
        </Card>
    ];
}
