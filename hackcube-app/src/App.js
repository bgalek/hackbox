import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import { Home } from "./Views/Home/Home";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Story } from "./Views/Story/Story";
import { Task } from "./Views/Task/Task";
import { TaskFinished } from './Views/TaskFinished/TaskFinished';
import { Profile } from "./Views/Profile/Profile";

function App() {
    return [
        <CssBaseline key="baseline"/>,
        <ThemeProvider key="theme" theme={theme}>
            <Router className="router">
                <Home path="/"/>
                <Story path="/story/:page"/>
                <Task path="/task/:id"/>
                <TaskFinished path="/taskFinished/:id"/>
                <Profile path="/profile"/>
            </Router>
        </ThemeProvider>
    ];
}

export default App;
