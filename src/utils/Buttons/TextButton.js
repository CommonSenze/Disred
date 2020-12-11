import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import clsx from "clsx"

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            "&:hover": {
                backgroundColor: "transparent",
                // color: theme.palette.primary.main,
            },
            borderRadius: 0,
            padding: 0,
            textTransform: "none !important",
            outline: "none !important",
            minWidth: "auto",
        },
    })
);

const TextButton = (props) => {
    const classes = useStyles();
    return (
        <Button
            disabled={props.disabled}
            onClick={props.onClick}
            disableRipple
            className={clsx(classes.button, props.className)}
            style={{
                ...props.style,
                fontWeight: props.bold ? "bold" : "normal",
            }}
        >
            {props.children}
        </Button>
    );
};

export default TextButton;
