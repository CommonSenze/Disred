import React from "react";
import {
    Box,
    Grid,
    Container,
    Breadcrumbs,
    Link,
    Paper,
    Typography,
} from "@material-ui/core";
import ThreadForm from "./CreateThread/ThreadForm";
import { ForumContext } from "../../pages/forums/forums";

const CreateThread = (props) => {
    const context = React.useContext(ForumContext);
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
                            <Box padding="20px">
                                <Box component="h3" margin="0">
                                    Create Thread
                                </Box>
                                <Box
                                    width={0.6}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    marginTop="20px"
                                    marginX="auto"
                                >
                                    <ThreadForm />
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CreateThread;
