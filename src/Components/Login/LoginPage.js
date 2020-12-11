import {
    Box,
    Typography,
    Paper,
} from '@material-ui/core';
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import LoginForm from './LoginForm';

const useStyles = makeStyles(theme => createStyles({
    box: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: '1 1 auto',
        borderRadius: '10px',
        width: '35%'
    },
    paper: {
        border: '1px solid ' + theme.palette.divider,
        position: 'relative',
    },
    button: {
        width: '100%',
        marginTop: '20px'
    }
}));

const LoginPage = (props) => {
    const classes = useStyles();
    const { link, state } = props;

    return (
        <Box className={classes.box}>
            <Box className={classes.content}>
                <Typography variant='h4' align='center' className='mt-4' style={{ marginBottom: '40px' }}>Your Account</Typography>
                <Paper elevation={5} className={classes.paper}>
                    <Box component='span' position='absolute' overflow='hidden' display='flex' width='100%' justifyContent='center' style={{ transform: 'translateY(-50%)' }}>
                        <Box component='span' maxWidth='100px' style={{ margin: 'auto' }}>
                            <img alt='img' width='100%' src='http://localhost:3000/logo512.png' />
                        </Box>
                    </Box>
                    <LoginForm link={link} state={state} />
                </Paper>
            </Box>
        </Box>
    )
}

export default LoginPage
