import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '100%',
        height: '63.5%',
        padding: '20px 30px 30px 30px',
        textAlign: "center"
    },
}));

export function Card({ children, cardStyle }) {
    const classes = useStyles();
    return <div style={cardStyle} className={classes.card}>{children}</div>
}
