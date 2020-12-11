import React from "react";
import { Box, InputBase, Paper, Divider, Grid, Avatar, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import BoxButton from "../../../utils/Buttons/BoxButton";

const HomeSearch = () => {
    const history = useHistory();
    const handleSearch = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/search',
            state: {
                search: e.target.search.value,
            }
        });
    };

    return (
        <Container className='my-5'>
            <Grid container>
                <Grid item>
                    <Box className="search icons">
                        <SearchIcon style={{ marginRight: 10 }} />
                        <form onSubmit={handleSearch}>
                            <InputBase name="search" autoComplete="off" placeholder="Search" />
                            <input type="submit" hidden />
                        </form>
                    </Box>
                    <Paper style={{ borderRadius: 10, overflow: 'hidden', marginTop: '10px' }}>
                        <Box className="text-component icons">
                            <WhatshotIcon style={{ marginRight: 10 }} />
                            <Box
                                fontWeight="fontWeightBold"
                                fontSize={15}
                                display="inline"
                            >
                                Trending
                            </Box>
                        </Box>
                        <Divider />
                        <BoxButton
                            style={{
                                padding: "10px",
                                alignItems: "flex-start",
                                textAlign: 'left',
                            }}
                        >
                            <Box width="84%">
                                <Box fontSize={8}>Staff Applications</Box>
                                <Box>New Forum Thread created by, </Box>
                            </Box>
                            <Box width="16%">
                                <Avatar
                                    variant="rounded"
                                    src="https://minotar.net/avatar/4abe39261a534073af0ade59a7b5aedb"
                                />
                            </Box>
                        </BoxButton>
                        <Divider light />
                        <BoxButton
                            style={{
                                padding: "10px",
                                alignItems: "flex-start",
                                textAlign: 'left',
                            }}
                        >
                            <Box width="84%">
                                <Box fontSize={8}>Staff Applications</Box>
                                <Box>
                                    New Forum Thread created by, CommonSenze
                                </Box>
                            </Box>
                            <Box width="16%">
                                <Avatar
                                    variant="rounded"
                                    src="https://minotar.net/avatar/4abe39261a534073af0ade59a7b5aedb"
                                />
                            </Box>
                        </BoxButton>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeSearch;
