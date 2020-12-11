import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Box, Divider, Avatar, Badge } from "@material-ui/core"
import FriendsButton from "../../../utils/Buttons/FriendsButton";
import { ExpandMore } from "@material-ui/icons"
import BoxButton from "../../../utils/Buttons/BoxButton";
const useStyles = makeStyles((theme) => createStyles({
    button: {
        display: "flex",
        justifyContent: "center",
    },
    avatar: {
        width: 30,
    },
    container: {
        display: "flex",
        justifyContent: "center"
    },
    seeMore: {
        // borderBottomLeftRadius: 16,
        // borderBottomRightRadius: 16,
        width: "100%",
        height: 40,
        fontWeight: "bold",
    }
}));

// TODO
const friends = [{
    name: "Dorris",
}, {
    name: "ANALLORD111"
}, {
    name: "Enderman304"
}, {
    name: "Phluent"
}]


const FriendsCount = (props) => {

    const classes = useStyles();

    return (
        <>
            <Box className={classes.container}>
                <Box>
                    {friends.map(f => (
                        <div key={f.name}>
                            <Badge overlap="circle" className={classes.avatar} variant="dot">
                                <Avatar className={classes.avatar} color="primary" src="https://art.pixilart.com/3bec6617ebd4abe.png" />
                            </Badge>
                            <FriendsButton color="default">{f.name}</FriendsButton>
                        </div>
                    ))}
                </Box>
            </Box>
            <Divider style={{marginTop: "10px"}} />
            <BoxButton><ExpandMore />See More</BoxButton>
        </>
    )
}

export default FriendsCount;