import React from "react";
import { Box, Typography, Divider, } from "@material-ui/core";
import BoxButton from "../../../utils/Buttons/BoxButton";
import { Link } from "react-router-dom";

const LoginRequestButton = (props) => {
    return (
        <React.Fragment>
            <BoxButton
                style={{
                    padding: "10px",
                    textAlign: "left",
                }}
            >
                <Link
                    to={{
                        pathname: "/login",
                        state: {
                            link: window.location.pathname,
                            backPage: props.backPage,
                        },
                    }}
                    style={{ color: "inherit" }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        width="100%"
                        justifyContent="flex-start"
                    >
                        <Box display="inline-block" marginLeft="10px">
                            <Box>
                                <Typography variant="body2">
                                    Log in to view your friends.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Link>
            </BoxButton>
            <Divider />
        </React.Fragment>
    );
}

export default LoginRequestButton;
