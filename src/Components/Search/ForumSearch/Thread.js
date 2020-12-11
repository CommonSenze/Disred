import React, { useEffect } from "react";
import { Grid, Typography, Box, Tooltip } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import BoxButton from "../../../utils/Buttons/BoxButton";
import { DateConverter } from "../../../utils/Functions/DateConverter";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: "15px",
        },
        avatar: {
            width: "50px",
            display: "inline-block",
        },
        typography: {
            display: "block",
        },
    })
);

const Thread = (props) => {
    const classes = useStyles();
    const { search } = props;
    const { mainPost, creator, title: pretitle } = props.thread;
    const textId = "text-" + mainPost.uniqueId;

    var replaceMask = `<b>${search}</b>`;

    const username = creator.username.replace(search, replaceMask);
    const title = pretitle.replace(search, replaceMask);

    var arr = mainPost.text.split(" ");
    var middleIndex = arr.findIndex((ele) => ele.includes(search));

    var start =
        middleIndex === -1 ? 0 : middleIndex - 25 > 0 ? middleIndex - 25 : 0;
    var end =
        middleIndex === -1
            ? arr.length < 50 ? arr.length : 50
            : middleIndex + 24 < arr.length - 1
            ? middleIndex + 24
            : arr.length - 1;
    var text = arr.splice(start, end).join(" ").replace(search, replaceMask);

    console.log(start, middleIndex, end, arr.length, title);

    if (start > 0) text = "..." + text;
    if (end < arr.length - 1) text += "...";

    useEffect(() => {
        document.getElementById(textId).innerHTML = text;
    });
    return (
        <Grid item xs={6}>
            <Box marginTop="20px">
                <Tooltip title="Click To Read More" arrow placement="top">
                    <Box>
                        <BoxButton
                            BoxStyle={{
                                overflow: "hidden",
                                borderRadius: "4px",
                                boxShadow:
                                    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                            }}
                            style={{
                                textAlign: "left",
                            }}
                        >
                            <Box
                                width="100%"
                                display="flex"
                                alignItems="center"
                            >
                                <Box
                                    marginLeft="15px"
                                    className={classes.typography}
                                >
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        <Typography
                                            variant="h6"
                                            component="div"
                                        >
                                            {title}
                                        </Typography>
                                        <Box>
                                            {DateConverter(mainPost.date)}
                                        </Box>
                                    </Box>
                                    <small>by {username}</small>
                                    <Typography
                                        id={textId}
                                        variant="body2"
                                        component="div"
                                    ></Typography>
                                </Box>
                            </Box>
                        </BoxButton>
                    </Box>
                </Tooltip>
            </Box>
        </Grid>
    );
};

export default Thread;
