import React from "react";
import { Box, Grid, Typography, Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import BoxButton from "../../../utils/Buttons/BoxButton";
import { Link } from "react-router-dom";
import { ForumContext } from "../../../pages/forums/forums";
import { PageContext } from "../ThreadSelection";

const TSHeader = () => {
    const context = React.useContext(ForumContext);
    const pageContext = React.useContext(PageContext);
    const subcategoryURI = context.subcategory.title.replaceAll(" ", "-");
    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box paddingX="15px" paddingY="10px">
                    <Typography variant="h4">
                        <Box fontWeight="bold">{context.subcategory.title}</Box>
                    </Typography>
                    {pageContext.totalPages-1 ? <Pagination size="small" defaultPage={pageContext.page} count={pageContext.totalPages} onChange={(event, page) => {pageContext.setPage(page)}} /> : <></>}
                </Box>
                <Box width="15%" textAlign="center" marginRight="10px">
                    <Paper
                        style={{
                            overflow: "hidden",
                            backgroundColor: "rgba(0, 94, 207, 0.3)",
                        }}
                    >
                        <Link to={{
                            pathname: "/forums/"+subcategoryURI+"/create-thread",
                            state: {
                                subcategory: context.subcategory,
                                category: context.category,
                            }
                        }}
                        style={{ color: "inherit", textDecoration: "none" }}>
                            <BoxButton>Create Thread</BoxButton>
                        </Link>
                    </Paper>
                </Box>
            </Box>
            <Box
                paddingX="15px"
                paddingY="10px"
                display="flex"
                alignItems="center"
                marginLeft="50px"
            >
                <Grid container wrap="nowrap">
                    <Grid item sm={8}>
                        <Box
                            paddingRight="15px"
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Box>Title</Box>
                            <Box>Modifications</Box>
                        </Box>
                    </Grid>
                    <Grid item sm={2}>
                        <Box
                            paddingX="30px"
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Box>Replys</Box>
                            <Box>Views</Box>
                        </Box>
                    </Grid>
                    <Grid item sm={2}>
                        <Box
                            width="100%"
                            justifyContent="flex-end"
                            display="flex"
                        >
                            <Box>Last Message</Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default TSHeader;
