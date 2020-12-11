import React from "react";
import {
    Box,
    Grid,
    Container,
    Paper,
    Breadcrumbs,
    Typography,
    Divider,
} from "@material-ui/core";
import Post from "./ThreadPost/Post";
import { Link } from "react-router-dom";
import PostForum from "./ThreadPost/PostForum";
import { ForumContext } from "../../pages/forums/forums";
import { DateConverter } from "../../utils/Functions/DateConverter";
import { connect } from "react-redux";
import { mapStateToProps } from "../../utils/Redux/redux";
import Axios from "axios";

const ThreadPost = (props) => {
    const { thread, category, subcategory } = React.useContext(ForumContext);
    const { isLoggedIn } = props;
    window.scrollTo(0, 0);
    Axios.get("https://api.ipify.org?format=json").then((response) => {
        Axios.post("http://localhost:8080/api/forums/view/" + thread.id, {
            ip: response.data.ip,
        });
    });
    return (
        <Box marginTop="40px">
            <Container>
                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <Paper>
                            <Box paddingX="15px" paddingY="10px">
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link
                                        to={{
                                            pathname: "/",
                                        }}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to={{
                                            pathname: "/forums",
                                        }}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        Forums
                                    </Link>
                                    <Link
                                        to={{
                                            pathname: "/forums",
                                        }}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        {category.title}
                                    </Link>
                                    <Link
                                        to={{
                                            pathname:
                                                "/forums/" +
                                                subcategory.title.replaceAll(
                                                    " ",
                                                    "-"
                                                ),
                                            state: {
                                                category: category,
                                                subcategory: subcategory,
                                            },
                                        }}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        {subcategory.title}
                                    </Link>
                                    <Typography color="textPrimary">
                                        {thread.title}
                                    </Typography>
                                </Breadcrumbs>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Paper style={{ overflow: "hidden" }}>
                            <Box paddingX="20px" paddingY="15px">
                                <Box>
                                    <Grid container alignItems="center">
                                        <Grid item>
                                            <Typography
                                                variant="h6"
                                                display="inline"
                                                fontWeight="fontWeightBold"
                                            >
                                                {thread.title}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Box component="small" display="inline">
                                        Discussion in '
                                        <Link
                                            to={{
                                                pathname:
                                                    "/forums/" +
                                                    subcategory.title.replaceAll(
                                                        " ",
                                                        "-"
                                                    ),
                                                state: {
                                                    category: category,
                                                    subcategory: subcategory,
                                                },
                                            }}
                                            style={{
                                                color: "inherit",
                                            }}
                                            children={subcategory.title}
                                        />
                                        ' started by {thread.creator.username},{" "}
                                        {DateConverter(thread.mainPost.date)}
                                    </Box>
                                </Box>
                                <Divider className="mx-auto my-2" width="90%" />
                                <Grid container>
                                    <Post main post={thread.mainPost} />
                                    {isLoggedIn ? <PostForum /> : <></>}
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default connect(mapStateToProps, null)(ThreadPost);
