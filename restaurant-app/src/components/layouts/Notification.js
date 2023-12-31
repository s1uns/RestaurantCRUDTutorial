
import React from 'react'
import { Snackbar } from '@mui/base'
import { Alert } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        top: theme.spacing(9),
        '& .MuiAlert-root': {
            backgroundColod: '#F3B33D',
            color: '#000'
        },
        '& .MuiAlert-icon': {
            color: '#000'
        }
    }
}))
export default function Notification(props) {
    
    const {notify, setNotify} = props
    const classes = useStyles()

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') {
            return
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            autoHideDuration={3000}
            className={classes.root}
            open={notify.isOpen}
            onClose={handleClose}
            >
            <Alert
            onClose={handleClose}>{notify.message}</Alert>
        </Snackbar>
    )
}
