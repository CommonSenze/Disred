import React from "react";
import { Box, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.primary.main,
            },
            borderRadius: 0,
            width: "100%",
            textTransform: "none !important",
            outline: "none !important",
        },
        box: {
            '&:hover': {
                backgroundColor: theme.palette.primary.light,
            },
            height: "100%",
        },
        disabledBox: {
            '&:hover': {
                backgroundColor: "transparent",
            },
        }
    })
);

const BoxButton = (props) => {
    const classes = useStyles();
    return (
        <Box className={props.disabled ? classes.disabledBox : classes.box} style={props.BoxStyle} onClick={props.onClick}>
            <Button
                disabled={props.disabled}
                className={classes.button}
                style={{
                    ...props.style,
                    fontWeight: props.bold ? "bold" : "normal",
                }}
            >
                {props.children}
            </Button>
        </Box>
    );
};

export default BoxButton;
