import React, { useEffect, useState } from "react";
import {
    Grid,
    Paper,
    Typography,
    Divider,
    Box,
    Tooltip,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import BoxButton from "../../utils/Buttons/BoxButton";
import Axios from "axios";
import Thread from "./ForumSearch/Thread";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: "15px",
        },
        avatar: {
            width: "50px",
            display: "inline-block",
        },
        typography: {
            display: "block",
        },
    })
);

export const ForumsRender = (search) => {
    const classes = useStyles();
    const [threads, updateThreads] = useState([]);
    useEffect(() => {
        let mounted = true;
        function updateOnMount() {
            Axios.post(
                "http://localhost:8080/api/forums/search",
                search
            ).then((response) => {
                if (mounted) updateThreads(response.data);
            });
        }
        updateOnMount();
        return () => {
            mounted = false;
        };
    }, [search]);
    let text =
        "Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at varius vel pharetra. In vitae turpis massa sed. Quis varius quam quisque id diam vel. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Volutpat lacus laoreet non curabitur. Urna id volutpat lacus laoreet non curabitur gravida. Cras pulvinar mattis nunc sed blandit. Ut consequat semper viverra nam libero justo laoreet sit. A diam sollicitudin tempor id. Dui id ornare arcu odio ut sem nulla pharetra diam. Nunc pulvinar sapien et ligula ullamcorper. Felis imperdiet proin fermentum leo vel orci porta. <br /><br />Tellus id interdum velit laoreet id. Pulvinar sapien et ligula ullamcorper. Tellus mauris a diam maecenas sed enim ut. Dolor magna eget est lorem ipsum dolor. Enim lobortis scelerisque fermentum dui faucibus. Purus in massa tempor nec feugiat nisl pretium. Suspendisse interdum consectetur libero id faucibus. Sed lectus vestibulum mattis ullamcorper velit sed. Porttitor leo a diam sollicitudin tempor id eu nisl. Elementum facilisis leo vel fringilla. Metus vulputate eu scelerisque felis imperdiet. In fermentum posuere urna nec. Facilisis leo vel fringilla est. Pretium quam vulputate dignissim suspendisse in est. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Libero justo laoreet sit amet. Sit amet porttitor eget dolor morbi. Scelerisque in dictum non consectetur a erat nam at. <br /><br />Habitant morbi tristique senectus et netus et malesuada fames. Varius vel pharetra vel turpis nunc eget lorem. Ornare arcu dui vivamus arcu. Fusce ut placerat orci nulla pellentesque. Lorem ipsum dolor sit amet. At tellus at urna condimentum mattis pellentesque. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Morbi tincidunt ornare massa eget. Odio euismod lacinia at quis risus sed vulputate odio. Natoque penatibus et magnis dis parturient montes nascetur. Gravida arcu ac tortor dignissim convallis aenean et. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. <br /><br />In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Nisl purus in mollis nunc sed id semper risus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet nisl purus in mollis. Neque ornare aenean euismod elementum. Eget nunc scelerisque viverra mauris in. Tellus elementum sagittis vitae et leo. Consequat semper viverra nam libero justo laoreet sit amet cursus. Non consectetur a erat nam at lectus urna. At risus viverra adipiscing at in tellus integer feugiat. Tortor dignissim convallis aenean et tortor at. Ut sem viverra aliquet eget. Est ante in nibh mauris cursus mattis molestie. Dui sapien eget mi proin sed. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Fusce ut placerat orci nulla pellentesque dignissim. <br /><br />Diam maecenas sed enim ut sem viverra aliquet. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Sollicitudin tempor id eu nisl nunc. Ultrices eros in cursus turpis massa tincidunt dui ut. Leo a diam sollicitudin tempor id eu. Congue nisi vitae suscipit tellus mauris. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Commodo quis imperdiet massa tincidunt. Imperdiet massa tincidunt nunc pulvinar. Diam donec adipiscing tristique risus nec feugiat in. Eu augue ut lectus arcu bibendum at varius.";

    if (text.split(" ").length > 50) {
        let number = text.indexOf(text.split(" ")[49]);
        text = text.substring(0, number).trim() + "...";
    }
    return Array.isArray(threads) && threads.length ? (
        <Paper className={classes.paper}>
            <Typography variant="h5">Forums</Typography>
            <Divider />
            <Grid container spacing={2}>
                {threads.map(thread => { return <Thread key={thread.title} thread={thread} search={search} />})}
            </Grid>
        </Paper>
    ) : (
        <></>
    );
};

export async function canRenderForums(search) {
    return await Axios.post(
        "http://localhost:8080/api/forums/search",
        search
    ).then((response) => Array.isArray(response.data) && response.data.length);
};
