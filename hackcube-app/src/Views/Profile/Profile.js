import React from "react";
import { makeStyles } from "@material-ui/core";
import plane from '../Story/plane.png';
import profile from './profile.png';
import ProfileLayout from "../../Layout/ProfileLayout";

const useStyles = makeStyles(theme => ({
    white: {
        color: '#fff'
    },
    heading: {
        color: '#fff',
        fontWeight: 'bolder'
    }
}));

export function Profile({ path }) {
    const classes = useStyles();
    return <ProfileLayout key={path} img={plane}>
        <img style={{width: '100%'}} src={profile} alt="" onClick={() => alert("More tasks to come!")}/>
    </ProfileLayout>
}
