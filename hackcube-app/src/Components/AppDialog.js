import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";

export function AppDialog({ open, onClose, icon, title, text, action, next }) {
    return <Dialog fullWidth onClose={onClose} open={open}
                   PaperProps={{ style: { boxShadow: 'none', padding: 20, borderRadius: 20, textAlign: 'center' } }}>
        <div>{icon}</div>
        <br/>
        <Typography variant="subtitle2" gutterBottom>{title}</Typography>
        <Typography variant="caption" gutterBottom>{text}</Typography>
        <br/>
        <Button size="large" onClick={next} variant="contained" color="primary">{action}</Button>
    </Dialog>
}
