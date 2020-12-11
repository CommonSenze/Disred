import React from "react";
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import { Tooltip, IconButton, } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from "../../../../utils/Redux/redux";

const useStyles = makeStyles((theme) => createStyles({
    button: {
        '&:focus': {
            outline: 'none'
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main
        },
        marginLeft: theme.spacing(1)
    },
    buttonSelected: {
        color: 'rgba(0, 136, 227, 1)'
    },
}));

const ToggleLight = (props) => {
    const classes = useStyles();
    const lightSwitch = () => {
        props.lightSwitch(!props.lightsOn);
    }
    return (
        <>
            {(props.lightsOn ?
                <Tooltip title="Toggle to Night Mode">
                    <IconButton onClick={lightSwitch} className={classes.button + ' ' + classes.buttonSelected} color="inherit">
                        <NightsStayRoundedIcon />
                    </IconButton>
                </Tooltip>
                :
                <Tooltip title="Toggle to Light Mode">
                    <IconButton onClick={lightSwitch} className={classes.button + ' ' + classes.buttonSelected} color="inherit">
                        <WbSunnyRoundedIcon />
                    </IconButton>
                </Tooltip>
            )}
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLight);