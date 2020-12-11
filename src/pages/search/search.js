import React from "react";
import { Box, CssBaseline } from "@material-ui/core";
import SearchPage from "../../Components/Search/SearchPage";
import SidePageNavbar from "../../Components/Navbar/SidePageNavbar/SidePageNavbar";

const search = (props) => {
    const { search } = props.location.state;
    return (
        <>
            <CssBaseline />
            <Box minHeight="100vh" display="flex" flexDirection="column">
                <SidePageNavbar backPage="Home" link="/" />
                <SearchPage search={search} />
            </Box>
        </>
    );
};

export default search;
