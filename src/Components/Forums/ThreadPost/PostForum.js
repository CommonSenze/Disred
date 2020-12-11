import React, { useState } from "react";
import {
    Box,
    Grid,
    Paper,
} from "@material-ui/core";
import { withTheme, makeStyles, createStyles } from "@material-ui/core/styles";
import ResizableProfile from "../../../utils/ImageMachine/ResizableProfile";
import RichTextEditor from "../../../utils/TextEditor/RichTextEditor";
import NormalButton, {ButtonStyles} from "../../../utils/Buttons/NormalButton";
import { connect } from 'react-redux'
import { mapStateToProps } from "../../../utils/Redux/redux";

const useStyles = makeStyles((theme) => createStyles({
    button: {
        ...ButtonStyles(theme),
        '&:hover': {
            backgroundColor: "rgba(254, 153, 118, 0.8)",
            color: "rgba(219, 91, 47, 1)",
        },
        backgroundColor: "rgba(254, 153, 118, 0.4)",
    },
}));

const PostForum = (props) => {
    const classes = useStyles();
    const { profile } = props;
    const [text, setText] = useState("");
    const handleTextChange = (data) => {
        setText(data);
    };
    const colorNumber =
        props.theme.palette.type === "dark" ? "100, 100, 100" : "255, 255, 255";
    return (
        <Grid item xs={12}>
            <Paper
                style={{
                    backgroundColor: "rgba(148, 148, 148, 0.2)",
                    border: "1px solid rgba(128, 128, 128, 0.5)",
                }}
            >
                <Box padding="10px">
                    <Grid container wrap="nowrap">
                        <Grid item>
                            <Paper
                                elevation={0}
                                style={{
                                    backgroundColor:
                                        "rgba(" + colorNumber + ", 0.8)",
                                    border: "1px solid rgba(14, 14, 14, 0.3)",
                                    // color: "rgba(37, 37, 37, 0.8)"
                                }}
                            >
                                <Box
                                    padding="10px"
                                    width="150px"
                                    display="flex"
                                >
                                    <ResizableProfile
                                        variant="rounded"
                                        maxwidth="80px"
                                        profile={profile}
                                        alt={"userIMG-postForum"}
                                        badgestyle={{
                                            margin: "0 auto",
                                        }}
                                    />
                                </Box>
                                <Box
                                    padding="10px"
                                    fontSize={12}
                                    fontWeight="bold"
                                >
                                    {profile.username}
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Box marginLeft="15px">
                                <RichTextEditor
                                    value={text}
                                    onChange={handleTextChange}
                                />
                                <Box
                                    padding={1}
                                    display="flex"
                                    justifyContent="flex-end"
                                >
                                    <NormalButton overrideclass={classes.button} width={0.2}>
                                        Post
                                    </NormalButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    );
};

export default connect(mapStateToProps, null)(withTheme(PostForum));
