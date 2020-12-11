import React from "react";
import { Box, } from "@material-ui/core";
import BoxButton from "../../../utils/Buttons/BoxButton";

const MoreFriendsButton = () => {
    return (
        <Box>
            <BoxButton
                bold
                style={{
                    padding: "10px",
                    textAlign: "left",
                }}
            >
                See All Friends
            </BoxButton>
        </Box>
    );
};

export default MoreFriendsButton;
