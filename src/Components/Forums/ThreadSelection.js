import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Container,
    Paper,
    Breadcrumbs,
    Divider,
    Link,
    Typography,
} from "@material-ui/core";
import ThreadBox from "./ThreadSelection/ThreadBox";
import TSHeader from "./ThreadSelection/TSHeader";
import { ForumContext } from "../../pages/forums/forums";
import Axios from "axios";

export const PageContext = React.createContext({});
const PageProvider = PageContext.Provider;

const ThreadSelection = () => {
    const [page, setPage] = useState(1);
    const [threads, updateThreads] = useState([]);

    const threadsPerPage = 50;
    const startingThreadIndex = threadsPerPage*(page-1);
    const totalPages = Math.floor(threads.length/threadsPerPage)+1;
    const context = React.useContext(ForumContext);

    useEffect(() => {
        function updateOnMount() {
            Axios.get(
                "http://localhost:8080/api/forums/subcategory/" +
                    context.subcategory.uniqueId +
                    "/threads"
            ).then((response) => {
                updateThreads(response.data);
            });
        }
        updateOnMount();
    }, [context.subcategory.uniqueId]);
    return (
        <Box marginTop="40px">
            <Container>
                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <Paper>
                            <Box paddingX="15px" paddingY="10px">
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link
                                        color="inherit"
                                        href="/"
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        color="inherit"
                                        href="/forums"
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        Forums
                                    </Link>
                                    <Link
                                        color="inherit"
                                        href="/forums"
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        {context.category.title}
                                    </Link>
                                    <Typography color="textPrimary">
                                        {context.subcategory.title}
                                    </Typography>
                                </Breadcrumbs>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Paper style={{ overflow: "hidden" }}>
                            <PageProvider value={{
                                page: page,
                                totalPages: totalPages,
                                setPage: page => {setPage(page)},
                            }}>
                                <TSHeader />
                                <Divider />
                                {threads.slice(startingThreadIndex, startingThreadIndex+threadsPerPage-1).map((thread) => (
                                    <ThreadBox
                                        key={thread.title}
                                        thread={thread}
                                    />
                                ))}
                            </PageProvider>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ThreadSelection;
