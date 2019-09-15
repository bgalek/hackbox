import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import crash from './crash.png';
import plane from './plane.png';
import blackbox from './blackbox.png';
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import UsbIcon from '@material-ui/icons/Usb';
import { AppDialog } from "../../Components/AppDialog";
import StoryLayout from "../../Layout/StoryLayout";

const stories = [
    {
        title: 'You have a Black Box...',
        text: '…retrieved from a hijacked plane. There is no trace of 100 airline passengers and 10 crew members. The FBI does not know which passengers were responsible for the hijack of the aircraft and what happened to the all passengers.',
        photo: crash
    },
    {
        title: 'In the depths of the Box….',
        text: '…there is the passenger list. The airlines refuse to comment, so we don’t know which of them are the crew. The FBI found photos taken a few hours before departure - while crew trying on new uniforms. Help the FBI and break all the security levels  - solve the mystery of passenger transport.',
        photo: blackbox
    },
    {
        title: 'To resolve the secret of…',
        text: '…the hijacking, you need to break additional security levels that will uncover further pieces of information. Over time, you will discover real identification data. This application will guide you through the tasks and track your progress. Follow the instructions and play the game.',
        photo: plane
    }
];

const endAction = {
    title: 'Last thing before start...',
    text: 'To start the game, all you have to do is to plug USB cable into your device.',
    icon: <UsbIcon fontSize="large"/>,
    action: 'Connect',
    next: '/task/1'
};

const useStyles = makeStyles(theme => ({
    white: {
        color: '#fff'
    },
    heading: {
        color: '#fff',
        fontWeight: 'bolder'
    }
}));

function isLastPage(page) {
    return page < stories.length;
}

function renderNextButton(page) {
    return <Button size="large" variant="contained" color="secondary" onClick={() => navigate(`/story/${++page}`)}>Next</Button>;
}

function renderLastButton(onEnd) {
    return [
        <Button size="large" size="large" variant="contained" color="secondary" onClick={onEnd}>Start</Button>
    ]
}

export function Story({ path, page, onEnd }) {
    const classes = useStyles();
    const story = stories[page - 1];
    const [open, setOpen] = useState(false);
    return <StoryLayout key={path} img={story.photo} step={page - 1}>
        <Grid item>
            <Typography variant="h6" gutterBottom>{story.title}</Typography>
            <Typography variant="body2" gutterBottom>
                {story.text}
            </Typography>
        </Grid>
        <Grid item>
            {isLastPage(page) ? renderNextButton(page) : renderLastButton(() => setOpen(true))}
        </Grid>
        <AppDialog open={open} onClose={() => setOpen(false)} icon={endAction.icon} title={endAction.title}
                   text={endAction.text} action={endAction.action} next={() => navigate(endAction.next)}/>
    </StoryLayout>
}
