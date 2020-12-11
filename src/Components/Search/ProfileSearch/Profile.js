import React from "react";
import { Grid, Typography, Avatar, Box } from "@material-ui/core";
import BoxButton from "../../../utils/Buttons/BoxButton";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        avatar: {
            width: "50px",
            display: "inline-block",
        },
        typography: {
            display: "block",
        },
    })
);

function Profile(props) {
    const { profile } = props;
    const classes = useStyles();
    return (
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
                    <Box width="100%" display="flex" alignItems="center">
                        <Box className={classes.avatar}>
                            <Avatar
                                variant="rounded"
                                src={"https://minotar.net/avatar/"+profile.uniqueId}
                            />
                        </Box>
                        <Box marginLeft="15px" className={classes.typography}>
                            <Typography variant="h6" component="div">
                                {profile.username}
                            </Typography>
                            <Typography variant="body2" component="div">
                                Rank: Owner
                            </Typography>
                        </Box>
                    </Box>
                </BoxButton>
            </Box>
        </Grid>
    );
}

export default Profile;
