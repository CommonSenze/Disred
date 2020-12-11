import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Divider, useMediaQuery, Grid } from "@material-ui/core";
import ResizableProfile from "../../../utils/ImageMachine/ResizableProfile";
import { ExpandMore } from "@material-ui/icons";
import BoxButton from "../../../utils/Buttons/BoxButton";

const useStyles = makeStyles((theme) => createStyles({
    seeMore: {
        width: "100%",
        height: 40,
        fontWeight: "bold",
    },
    customBadge: {
        backgroundColor: "#13CF00",
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
},{
    name: "Dorris23",
}, {
    name: "ANALLORD11124"
}, {
    name: "Enderm25n304"
}, {
    name: "Phlu125ent"
},{
    name: "Do2346rris",
}, {
    name: "ANALL2347ORD111"
}, {
    name: "Ende746rman304"
}, {
    name: "Phl69675uent"
},{
    name: "Dorr35is23",
}, {
    name: "ANALL347ORD11124"
}, {
    name: "Ender2623m25n304"
}]


const FriendsGrid = (props) => {
    const subiPhoneView = !useMediaQuery("(min-width: 400px)")
    const iPhoneView = !useMediaQuery("(min-width: 600px)")
    const classes = useStyles();

    return (
        <>
            <Box paddingX="20px">
                <Grid container spacing={2}>
                    {friends.map(f => (
                        <Grid item sm={3} md={4} lg={4} key={f.name}>
                            <Box width="100%">
                                <ResizableProfile custombadge={classes.customBadge} maxwidth={iPhoneView ? subiPhoneView ? "35px" : "50px" : undefined} profile={f} src="https://art.pixilart.com/3bec6617ebd4abe.png" alt={f.name} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Divider style={{ margin: "20px auto 0px auto", width: "85%" }} />
            <BoxButton><ExpandMore />See More</BoxButton>
        </>
    )
}

export default FriendsGrid;