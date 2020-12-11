import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Paper, Divider } from "@material-ui/core";
import HomeButton from "../Buttons/HomeButton";
import { DateConverter } from "../../../utils/Functions/DateConverter";
import { Link } from "react-router-dom";
import Axios from "axios";

const HomePost = (props) => {
    const { thread } = props;
    const { mainPost: post, title, imageURL } = thread;
    const textId = "text-" + post.uniqueId;
    var { text, creator, date } = post;
    const [subcategory, setSubcategory] = useState({});

    if (text.split(" ").length > 200) {
        text = text.split(" ").splice(0, 200).join(" ") + "...";
    }
    useEffect(() => {
        let mounted = true;
        function updateOnMount() {
            document.getElementById(textId).innerHTML = text;
            Axios.get(
                "http://localhost:8080/api/forums/subcategory/" +
                    thread.subcategoryId
            ).then((response) => {
                if (mounted)
                setSubcategory(response.data);
            });
        }
        updateOnMount();
        return () => { mounted = false}
    });
    return (
        <Grid item xs={12}>
            <Paper square className="home-post">
                <Box>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <Typography
                                variant="h6"
                                display="inline"
                                fontWeight="fontWeightBold"
                            >
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Box component="small" display="inline">
                                {DateConverter(date)}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Divider className="mx-auto my-2" width="90%" />
                {imageURL ? (
                    <Box>
                        <img alt="tester" width="100%" src={imageURL} />
                    </Box>
                ) : (
                    <></>
                )}
                <Typography
                    id={textId}
                    variant="body2"
                    className="text-component"
                ></Typography>
                <Box display="flex" alignItems="flex-end">
                    <Box className="pl-2" component="small" flexGrow={1}>
                        by {creator.username}
                    </Box>
                    <Link
                        to={{
                            pathname: (
                                "/forums/News And Announcements/" + thread.title
                            ).replaceAll(" ", "-"),
                            state: {
                                subcategory: subcategory,
                                thread: thread,
                            },
                        }}
                        style={{ color: "inherit" }}
                    >
                        <HomeButton className="home-post-button" width="150px">
                            Read More
                        </HomeButton>
                    </Link>
                </Box>
            </Paper>
            <Divider />
        </Grid>
    );
};

export default HomePost;
