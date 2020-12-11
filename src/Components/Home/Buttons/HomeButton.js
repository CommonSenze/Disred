import React from 'react'
import { Button, Box } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        '&:focus': {
            outline: 'none'
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main
        },
        borderRadius: '15px',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10
    },
}));

const HomeButton = (props) => {
    const classes = useStyles();
    return (
        <Box width={props.width} display='inline-block'>
            <Button className={clsx(classes.root, props.className)} component={props.component} color={props.color} style={props.style} onClick={props.onClick}>
                {props.children}
            </Button>
        </Box>
    )
}

export default HomeButton;

HomeButton.propTypes = {
    onClick: PropTypes.func
}