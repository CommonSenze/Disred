import React from "react";
import { Box, Typography, Divider, Grid, Container } from "@material-ui/core";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../utils/Redux/redux";
import MoreFriendsButton from "./MoreFriendsButton";
import LoginRequestButton from "./LoginRequestButton";
import NoFriendsButton from "./NoFriendsButton";
import FriendButton from "./FriendButton";

const friends = [
    {
        name: "Dorris",
    },
    {
        name: "ANALLORD111",
    },
    {
        name: "Enderman304",
    },
    {
        name: "Phluent",
    },
    {
        name: "Dorris23",
    },
    {
        name: "ANALLORD11124",
    },
    {
        name: "Enderm25n304",
    },
    {
        name: "Phlu125ent",
    },
    {
        name: "Do2346rris",
    },
    {
        name: "ANALL2347ORD111",
    },
    {
        name: "Ende746rman304",
    },
    {
        name: "Phl69675uent",
    },
    {
        name: "Dorr35is23",
    },
    {
        name: "ANALL347ORD11124",
    },
    {
        name: "Ender2623m25n304",
    },
];

const HomeFriends = (props) => {
    return (
        <Container className="my-5">
            <Grid container>
                <Grid item sm={12}>
                    <Typography variant="h5">
                        <Box marginBottom="10px" fontWeight="fontWeightBold">
                            Friends
                        </Box>
                    </Typography>
                    <Divider />
                    <Box
                        width="100%"
                        maxHeight="500px"
                        id="friendsSelection"
                        overflow="auto"
                    >
                        {props.isLoggedIn &&
                        Array.isArray(friends) &&
                        friends.length ? (
                            friends.map((f) => <FriendButton key={f.name} friend={f} />)
                        ) : props.isLoggedIn ? (
                            <NoFriendsButton />
                        ) : (
                            <LoginRequestButton backPage="Home" />
                        )}
                    </Box>
                    <Divider />
                    {props.isLoggedIn &&
                    Array.isArray(friends) &&
                    friends.length ? (
                        <MoreFriendsButton />
                    ) : (
                        <> </>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default connect(mapStateToProps, null)(HomeFriends);
