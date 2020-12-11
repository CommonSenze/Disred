import React, { useEffect, useState } from "react";
import HomePost from "./HomePost";
import { Grid, Paper, Divider } from "@material-ui/core";
import HomeForm from "./HomeForm";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../utils/Redux/redux";
import Axios from "axios";

function HomeForum(props) {
    const { isLoggedIn } = props;
    const [threads, updateThreads] = useState([]);

    useEffect(() => {
        let mounted = true
        function updateOnMount() {
            Axios.get(
                "http://localhost:8080/api/forums/list/thread/" +
                    encodeURIComponent("News And Announcements") +
                    "/name"
            ).then((response) => {
                if (mounted)
                updateThreads(response.data.reverse());
            });
        }
        updateOnMount();
        return () => { mounted = false }
    }, []);
    return (
        <Grid container>
            {isLoggedIn ? (
                <Grid item xs={12}>
                    <Paper square className="home-post">
                        <HomeForm />
                    </Paper>
                    <Divider />
                </Grid>
            ) : (
                <></>
            )}
            {threads.map((thread) => (
                <HomePost key={thread.title} thread={thread} />
            ))}
        </Grid>
    );
}

export default connect(mapStateToProps, null)(HomeForum);
