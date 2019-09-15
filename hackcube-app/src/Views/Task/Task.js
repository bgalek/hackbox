import React, { useState } from "react";
import { makeStyles, TextField, Typography } from "@material-ui/core";
import TaskLayout from "../../Layout/TaskLayout";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import task1Header from "./task1.png";
import task2Header from "./task2.png";
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import { navigate } from "@reach/router";
import LockIcon from '@material-ui/icons/Lock';
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const tasks = [
    {
        name: 'Airplane Blackbox',
        header: 'Tutorial',
        text: ['The HackCube has many sensors and modules. One of them is the Wifi module.',
            'Find the HackCube network among the available Wifi networks on your computer and connect to it',
            'The password is: HackCube2019',
            'After connecting to the network enter the address: http://hackcube.local',
            'Try to Log in to the Cube.',
        ],
        hint: 'Check the attached case file. Who was accused and for what?',
        photo: task1Header,
        inputText: 'Insert serial number',
        answer: '4CE0460D0G',
    },
    {
        name: 'Airplane Blackbox',
        header: 'Passenger List',
        text: ['The administrative panel  in only avaliable to mechanics during a stopover',
            'On this plane it\'s active only on every Friday  between 9:00pn and 11:00 pm. Somewhere on the disk there is a full list of the passengers',
            'Find it and it will be a breakthrough in this case',
            'Remember that one of the passengers is responsible for the hijack!',
            'To get to the next task you have to get the MD5 checksum of the file',
        ],
        hint: 'As an administrator you can change your system time.',
        photo: task2Header,
        inputText: 'Input MD5 hash',
        answer: 'MD12345',
    },
];

const useStyles = makeStyles(theme => ({
    white: {
        color: '#fff'
    },
    header: {
        borderRadius: 20,
        padding: 10
    }
}));

export function Task({ path, id }) {
    const classes = useStyles();
    const task = tasks[id - 1];
    return <TaskLayout key={path}>
        <TaskHeader className={classes.header} task={task} id={id} />
        <img alt="photo" src={task.photo} style={{ width: "100%" }} />
        <TaskBody task={task} id={id} />
    </TaskLayout>
}

function TaskHeader({ className, task, id }) {
    return <Grid container direction="row" className={className} alignItems="center">
        <Grid item><AirplanemodeActiveIcon style={{ margin: 10 }} /></Grid>
        <Grid item style={{ flex: "1 0 auto" }}>
            <Grid container direction="column" justify="start">
                <Grid item><Typography variant="body2"><strong>{task.name}</strong></Typography></Grid>
                <Grid item><Typography variant="caption">Task {id}</Typography></Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Typography style={{ margin: 10 }}>{id * 10}%</Typography>
        </Grid>
    </Grid>
}

function TaskBody({ task, id }) {
    const [answer, setAnswer] = useState();
    const [open, setOpen] = useState(false);
    return <div style={{ padding: 20, flexGrow: 1 }}>
        <Typography variant="h5">{task.header}</Typography>
        {task.text.map(t => <p><Typography variant="body">{t}</Typography></p>)}
        <Grid direction="column" container alignItems="center" style={{ paddingBottom: 20 }} spacing={3}>
            <Grid item style={{ width: '100%' }}>
                <TextField value={answer} placeholder={task.inputText} onChange={(e) => setAnswer(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined" />
                <Button fullWidth variant="contained" color="secondary" onClick={() => {
                    if (answer === task.answer) {
                        navigate(`/taskFinished/${id}`);
                    } else {
                        alert('Wrong password');
                        setAnswer('');
                    }
                }}>Submit</Button>
            </Grid>
        </Grid>
        <Grid item>
            <Typography gutterBottom variant="h5">Additional tips</Typography>
            <Button onClick={() => setOpen(true)} variant="contained" color="secondary">
                <LockIcon />USE HINT
            </Button>
            <Dialog onClose={() => setOpen(false)} open={open}>
                <DialogTitle onClose={() => setOpen(false)}>Hint</DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>{task.hint}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">Ok</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    </div>
}
