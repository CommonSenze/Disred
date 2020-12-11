import {
    Avatar,
    Box,
    Divider,
    Grid,
    Icon,
    Tooltip,
} from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import { ForumContext } from "../../../pages/forums/forums";
import { DateConverter } from "../../../utils/Functions/DateConverter";

const ThreadBox = (props) => {
    const context = React.useContext(ForumContext);
    const { thread } = props;
    const lastReply = thread.replies.length ? thread.replies[thread.replies.length-1] : thread.mainPost;
    return (
        <Box
            paddingX="15px"
            paddingY="10px"
            display="flex"
            alignItems="center"
            style={thread.sticky ? {
                backgroundColor: "rgba(59, 148, 255,0.6)",
            }:{}}
        >
            <Box maxWidth="40px">
                <Avatar
                    variant="rounded"
                    src={"https://minotar.net/avatar/"+thread.creator.uniqueId}
                    alt={thread.creator.uniqueId+thread.title}
                />
            </Box>
            <Grid container wrap="nowrap">
                <Grid item sm={8} style={{ marginLeft: 10 }}>
                    <Box
                        paddingRight="15px"
                        display="flex"
                        justifyContent="space-between"
                    >
                        <Box>
                            <Box>
                                <Link
                                    to={{
                                        pathname: ("/forums/" +
                                        context.subcategory.title +
                                        "/"+thread.title).replaceAll(" ", "-"),
                                        state: {
                                            ...context,
                                            thread: thread,
                                        },
                                    }}
                                    style={{
                                        color: "inherit",
                                    }}
                                >
                                    {thread.title}
                                </Link>
                            </Box>
                            <Box component='span' fontSize="82%">{thread.creator.username}</Box>
                            <Box
                                color={props.theme.palette.text.subtitle.color}
                                component="span"
                            >
                                <small>, {DateConverter(thread.mainPost.date)}</small>
                            </Box>
                        </Box>
                        <Box display="flex">
                            {thread.sticky ? <Box>
                                <Tooltip title="Sticky" placement="top" arrow>
                                    <Icon
                                        className="fas fa-thumbtack"
                                        style={{
                                            color: "#F4A94F",
                                            fontSize: 13,
                                        }}
                                    />
                                </Tooltip>
                            </Box> : <></>}
                            {thread.locked ? <Box marginLeft="20px">
                                <Tooltip title="Locked" placement="top" arrow>
                                    <Icon
                                        className="fas fa-lock"
                                        style={{
                                            color: "#F45E4F",
                                            fontSize: 13,
                                        }}
                                    />
                                </Tooltip>
                            </Box> : <></>}
                        </Box>
                    </Box>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid
                    item
                    sm={2}
                    style={{ alignItems: "center", display: "grid" }}
                >
                    <Box
                        paddingX="35px"
                        display="flex"
                        justifyContent="space-between"
                    >
                        <Box>
                            <Icon
                                className="far fa-comment"
                                style={{
                                    fontSize: 13,
                                    display: "contents",
                                }}
                            />
                            <Box display="inline" marginLeft="3px">
                                {thread.replies.length}
                            </Box>
                        </Box>
                        <Box>
                            <Icon
                                className="far fa-eye"
                                style={{
                                    fontSize: 13,
                                    display: "contents",
                                }}
                            />
                            <Box display="inline" marginLeft="3px">
                                {thread.views.length}
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid
                    item
                    sm={2}
                    style={{ alignItems: "center", display: "flex" }}
                >
                    <Box width="100%" justifyContent="flex-end" display="flex">
                        <Box textAlign="right">
                            <Box>{lastReply.creator.username}</Box>
                            <Box fontSize={8}>{DateConverter(lastReply.date)}</Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default withTheme(ThreadBox);
