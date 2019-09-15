import React from "react";
import { makeStyles, Typography, CircularProgress, TextField, Divider } from "@material-ui/core";
import { Card } from "../../Components/Card";
import logoVertical from "../../Components/logo-vertical.png";
import TaskLayout from "../../Layout/TaskLayout";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import taskHeader from "./task1.png";
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import { navigate } from "@reach/router";
import CheckIcon from '@material-ui/icons/Check';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CloseIcon from '@material-ui/icons/Close';
import { display } from "@material-ui/system";


const tasks = [
    {
        name: 'Airplane Blackbox',
        text: <div>
            <Typography gutterBottom variant="h5">Congratulations!</Typography>

            <Typography paragraph>You have hacked the admin panel</Typography>
            <Typography paragraph>It wasn't dificult rtight?</Typography>
            <Typography paragraph>Weak passwords used by users greatly reduce security of the application. In this case , the user had the same login and password.</Typography>
            <Typography paragraph>Changing the password itself would make it harder for the hacker to get into your account.</Typography>

            <Typography gutterBottom variant="h5">How to do it?</Typography>
            <Typography paragraph>Easy for computer, easy to remember</Typography>
            <Typography paragraph style={{ display: 'flex' }} > <CloseIcon color="error" style={{ marginRight: 10 }} />  admin</Typography>
            <Divider style={{ margin: 10 }} />

            <Typography paragraph>Hard for computer, difficult to remember</Typography>
            <Typography paragraph style={{ display: 'flex' }}><ReportProblemIcon style={{ color: 'orange', marginRight: 10 }} />  dnxT^&*JKDAzbGF%^*</Typography>
            <Divider style={{ margin: 10 }} />

            <Typography paragraph>hard for computer, easy to remember</Typography>
            <Typography paragraph style={{ display: 'flex' }}><CheckIcon style={{ color: 'green', marginRight: 10 }} />  JestemBardzoDobrymAdminem</Typography>
            <Divider style={{ margin: 10 }} />

        </div>
        ,
        photo: taskHeader,
        next: '/task/2',
    },
    {
        name: 'Airplane Blackbox',
        text: <div>
            <Typography gutterBottom variant="h5">Congratulations!</Typography>

            <Typography paragraph>You have completed another task!</Typography>
            <Typography paragraph style={{ display: 'flex' }}><AccessTimeIcon style={{ color: 'green', marginRight: 10 }} />Time validation on the client side brings many dangers.</Typography>
            <Typography paragraph>All time validations should be handled by the application server, where user has no access.</Typography>

        </div>
        ,
        photo: taskHeader,
        next: '/profile',
    },

];


const useStyles = makeStyles(theme => ({
    white: {
        color: '#fff'
    },
    header: {
        borderRadius: 20,
        padding: '10px 10px 0px 10px'
    }
}));

export function TaskFinished({ path, id }) {
    const classes = useStyles();
    const task = tasks[id - 1];
    return <TaskLayout key={path} >
        <TaskHeader className={classes.header} task={task} id={id} />
        <img src={task.photo} style={{ width: "100%" }} />
        <TaskBody task={task} id={id} />
    </TaskLayout>
}

function TaskHeader({ className, task, id }) {
    return <Grid container direction="row" className={className} alignItems="center">
        <Grid item><AirplanemodeActiveIcon style={{ margin: 10 }} /></Grid>
        <Grid item style={{ flex: "1 0 auto" }}>
            <Grid container direction="column" justify="start">
                <Grid item><Typography variant="body2">{task.name}</Typography></Grid>
                <Grid item><Typography variant="caption">Task {id}</Typography></Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Typography style={{ margin: 10 }}>{id * 10}%</Typography>
        </Grid>
    </Grid>
}

function TaskBody({ task, id }) {
    return <div style={{ padding: 20, flexGrow: 1 }}>
        <Typography variant="h5">{task.header}</Typography>
        {task.text}
        <Grid direction="column" container alignItems="center" style={{ paddingBottom: 20 }}>

            <Grid item>
                <Button size="large" variant="contained" color="secondary" onClick={() => navigate(task.next)}>Next task</Button>
            </Grid>
        </Grid>
    </div>
}
