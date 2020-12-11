import React from "react";
import { Box, Typography, Divider, } from "@material-ui/core";
import BoxButton from "../../../utils/Buttons/BoxButton";

const NoFriendsButton = () => {
    return (
        <React.Fragment>
            <BoxButton
                disabled
                style={{
                    padding: "10px",
                    textAlign: "left",
                }}
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
                                You have no friends.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </BoxButton>
            <Divider />
        </React.Fragment>
    );
};

export default NoFriendsButton;
