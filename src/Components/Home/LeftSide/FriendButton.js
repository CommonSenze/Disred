import React from "react";
import { Box, Typography, Divider, } from "@material-ui/core";
import BoxButton from "../../../utils/Buttons/BoxButton";
import { makeStyles, createStyles } from "@material-ui/styles";
import ResizableProfile from "../../../utils/ImageMachine/ResizableProfile";

const useStyles = makeStyles((theme) =>
    createStyles({
        customBadge: {
            backgroundColor: "#13CF00",
        },
    })
);

const FriendButton = (props) => {
    const classes = useStyles();
    const { friend } = props;
    return (
        <>
            <BoxButton
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
                    <ResizableProfile
                        custombadge={classes.customBadge}
                        variant="rounded"
                        maxwidth={"50px"}
                        profile={friend}
                        alt={friend.username}
                    />
                    <Box display="inline-block" marginLeft="10px">
                        <Box>
                            <Typography variant="body2">{friend.username}</Typography>
                        </Box>
                        <Box color="#A0A0A0">
                            <Typography variant="caption">
                                Last Online 2d ago
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </BoxButton>
            <Divider />
        </>
    );
}

export default FriendButton;
