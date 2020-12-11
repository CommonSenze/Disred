import React from "react";
import { Box, CssBaseline } from "@material-ui/core";
import LoginPage from "../../Components/Login/LoginPage";
import SidePageNavbar from "../../Components/Navbar/SidePageNavbar/SidePageNavbar";

const login = (props) => {
    const backPage = props.location.state.backPage&&props.location.state.link ? props.location.state.backPage : "Home";
    const link = props.location.state.backPage&&props.location.state.link ? props.location.state.link : "/";
    const state = props.location.state ? props.location.state.state : undefined;
    return (
        <>
            <CssBaseline />
            <Box minHeight="100vh" display="flex" flexDirection="column">
                <SidePageNavbar backPage={backPage} link={link} state={state} />
                <LoginPage link={link} state={state} />
            </Box>
        </>
    );
};

export default login;
