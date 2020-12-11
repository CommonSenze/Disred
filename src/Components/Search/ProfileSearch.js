import React, { useEffect, useState } from "react";
import {
    Grid,
    Paper,
    Typography,
    Divider,
    Avatar,
    Box,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import BoxButton from "../../utils/Buttons/BoxButton";
import Axios from "axios";
import Profile from "./ProfileSearch/Profile";

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

export const ProfileRender = (search) => {
    const classes = useStyles();
    const [profiles, updateProfiles] = useState([]);
    useEffect(() => {
        let mounted = true;
        function updateOnMount() {
            Axios.post(
                "http://localhost:8080/api/profiles/search",
                search
            ).then((response) => {
                if (mounted) updateProfiles(response.data);
            });
        }
        updateOnMount();
        return () => {
            mounted = false;
        };
    }, [search]);
    console.log(profiles)
    return Array.isArray(profiles) && profiles.length ? (
        <Paper className={classes.paper}>
            <Typography variant="h5">Profiles</Typography>
            <Divider />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Box marginTop="20px">
                        <BoxButton
                            BoxStyle={{
                                overflow: "hidden",
                                borderRadius: "4px",
                                boxShadow:
                                    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                            }}
                            style={{
                                textAlign: "left",
                            }}
                        >
                            <Box
                                width="100%"
                                display="flex"
                                alignItems="center"
                            >
                                <Box className={classes.avatar}>
                                    <Avatar
                                        variant="rounded"
                                        src="https://minotar.net/avatar/4abe39261a534073af0ade59a7b5aedb"
                                    />
                                </Box>
                                <Box
                                    marginLeft="15px"
                                    className={classes.typography}
                                >
                                    <Typography variant="h6" component="div">
                                        CommonSenze
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                        Rank: Owner
                                    </Typography>
                                </Box>
                            </Box>
                        </BoxButton>
                    </Box>
                </Grid>
                {profiles.map(profile => {return <Profile key={profile.username} profile={profile} />})}
            </Grid>
        </Paper>
    ) : (
        <></>
    );
};

export async function canRenderProfiles(search) {
    return await Axios.post(
        "http://localhost:8080/api/profiles/search",
        search
    ).then((response) => Array.isArray(response.data) && response.data.length);
};
