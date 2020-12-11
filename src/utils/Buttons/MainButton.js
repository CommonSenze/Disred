import React from "react";
import { Button, Paper } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            "&:focus": {
                outline: "none",
            },
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
            },
            borderRadius: "13px",
            overflow: "hidden",
        },
        button: {
            "&:focus": {
                outline: "none",
            },
            "&:hover": {
                backgroundColor: "transparent",
                color: "inherit",
            },
            width: "100%",
            padding: "5px 15px",
        },
    })
);

const MainButton = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Button className={classes.button} onClick={props.onClick}>
                {props.children}
            </Button>
        </Paper>
    );
};

export default MainButton;
