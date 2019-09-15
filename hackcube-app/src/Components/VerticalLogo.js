import logoVertical from "./logo-vertical.png";
import React from "react";
import { makeStyles } from "@material-ui/core";
import gradientBackground from './gradient.png';

const useStyles = makeStyles(theme => ({
    grid: {
        height: '100%',
    },
    header: {
        height: '23%',
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center'
    },
    logoContainer: {
        padding: '25px 0'
    },
    logo: {
        textAlign: 'center'
    }
}));

export function VerticalLogo({ gradient }) {
    const classes = useStyles();
    return <div className={classes.logoContainer}
                style={gradient ? { backgroundImage: `url(${gradientBackground})` } : {}}>
        <img alt="logo" src={logoVertical} className={classes.logo}/>
    </div>;
}
