import React from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ProfileRender, canRenderProfiles } from "./ProfileSearch";
import { ForumsRender, canRenderForums } from "./ForumSearch";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            marginTop: "30px",
        },
        paper: {
            padding: "15px",
        },
    })
);

const SearchPage = (props) => {
    const { search } = props;
    const classes = useStyles();
    const results = canRenderProfiles(search).then(res => res&& canRenderForums(search));
    const renders = [ProfileRender(search), ForumsRender(search)];
    return (
        <Container className={classes.container}>
            <Grid container>
                {results !== false ? (
                    renders.map((render, index) => (
                        <Grid item xs={12} key={index} style={{marginBottom: '20px'}}>
                            {render}
                        </Grid>
                    ))
                ) : (
                    <Paper className={classes.paper}>No results found</Paper>
                )}
            </Grid>
        </Container>
    );
};

export default SearchPage;
