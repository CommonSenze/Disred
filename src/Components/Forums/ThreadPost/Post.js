import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography, Icon } from "@material-ui/core";
import { withTheme, makeStyles, createStyles } from "@material-ui/core/styles";
import ResizableProfile from "../../../utils/ImageMachine/ResizableProfile";
import ReportModal from "./ReportModal";
import TextButton from "../../../utils/Buttons/TextButton";
import { DateConverter } from "../../../utils/Functions/DateConverter";
import { ForumContext } from "../../../pages/forums/forums";
import PropType from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../utils/Redux/redux";
import RatingBar from "./RatingBar";

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            "&:hover": {
                color: "#F19900",
            },
        },
    })
);

const Post = (props) => {
    const context = React.useContext(ForumContext);
    const classes = useStyles();
    const { post, main, isLoggedIn } = props;
    const textId = "text-" + post.uniqueId;
    useEffect(() => {
        document.getElementById(textId).innerHTML = post.text;
    });
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const colorNumber =
        props.theme.palette.type === "dark" ? "100, 100, 100" : "255, 255, 255";

    return (
        <Grid item xs={12} style={{ marginBottom: "10px" }}>
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
                                        profile={post.creator}
                                        alt={"userIMG-" + post.uniqueId}
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
                                    {post.creator.username}
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Box marginLeft="15px">
                                <Box padding="8px">
                                    {main && context.thread.imageURL ? (
                                        <Box marginBottom="10px">
                                            <img
                                                src={context.thread.imageURL}
                                                width="100%"
                                                alt="mainPostImage"
                                            />
                                        </Box>
                                    ) : (
                                        <></>
                                    )}
                                    <Typography
                                        id={textId}
                                        variant="body2"
                                        component="div"
                                    ></Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    alignItems="flex-end"
                                    marginTop="10px"
                                >
                                    <Box
                                        paddingY="5px"
                                        flexGrow={1}
                                        fontSize={12}
                                    >
                                        {post.creator.username +
                                            ", " +
                                            DateConverter(post.date)}
                                    </Box>
                                </Box>
                                {isLoggedIn ? (
                                    <Box
                                        padding="5px"
                                        flexGrow={1}
                                        fontSize={12}
                                    >
                                        <TextButton
                                            onClick={handleOpen}
                                            className={classes.button}
                                        >
                                            <Icon
                                                className="fas fa-exclamation-triangle"
                                                style={{
                                                    display: "contents",
                                                    fontSize: "12px",
                                                }}
                                            />
                                            <Box
                                                display="inline"
                                                marginLeft="3px"
                                            >
                                                Report
                                            </Box>
                                        </TextButton>
                                        <ReportModal
                                            open={open}
                                            handleClose={handleClose}
                                        />
                                    </Box>
                                ) : (
                                    <></>
                                )}
                                <RatingBar />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    );
};

export default connect(mapStateToProps, null)(withTheme(Post));

Post.propType = {
    main: PropType.bool,
};
