import React from "react";
import { Box, Typography, Grid, Paper, Container, Divider } from '@material-ui/core'
import { makeStyles, createStyles } from "@material-ui/styles";
import ResizableImage from "../../utils/ImageMachine/ResizableImage";
import FriendsCount from "./Friends/FriendsCount";

const useStyles = makeStyles((theme) => createStyles({
    profile: {
        margin: '0 auto',
    },
    profileName: {
        display: 'inline-block',
        margin: '0 auto'
    },
    friends: {
        fontSize: 15,
        margin: 5
    },
    profileSection: {
        display: 'inline-block',
    },
    container: {
        padding: '25px',
        display: 'flex',
        height: '100%',
    },
    friendsBox: {
        backgroundColor: theme.palette.type === "dark" ? "#646464" : "#EDEDED",
        boxShadow: "1px 1px 3px #464646",
        borderRadius: 5,
    },
    paper: {
        height: '100%',
        paddingTop: "15px",
        paddingBottom: "15px"
    }
}));

const ProfilePage = () => {

    const classes = useStyles();

    return (
        <Container maxWidth='xl' className={classes.container}>
            <Box width="20%" minHeight="100%" display='inline-block'>
                <Paper elevation={3} className={classes.paper}>
                    <Box overflow='hidden'>
                        <Box>
                            <ResizableImage className={classes.profile} maxWidth="100px" ImageProps={{
                                style: {
                                    borderRadius: 12,
                                },
                                className: classes.profile,
                                src: "https://img.pngio.com/minecraft-steve-head-png-group-hd-png-steve-head-png-1100_1000.jpg",
                                alt: 'PROFILE'
                            }} />
                        </Box>
                        <Box display="flex">
                            <Typography className={classes.profileName} variant="h5">CommonSenze</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.friendsBox} width="90%" margin="0 auto" marginTop="10px" overflow='hidden'>
                        <Box display="flex" justifyContent="center" paddingTop="10px">
                            <Typography className={classes.profileName} variant="h6"><Box fontWeight="bold">Friends</Box></Typography>
                        </Box>
                        <Divider style={{width: "80%", margin: '10px auto'}} />
                        <FriendsCount />
                    </Box>
                </Paper>
            </Box>
            <Box width="80%" display='inline-block' marginLeft="20px">
                <Grid container spacing={2}>
                    <Grid item sm={12}>
                        <Paper elevation={3} className={classes.paper}>
                            <Box overflow='hidden'>
                                <FriendsCount />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default ProfilePage;