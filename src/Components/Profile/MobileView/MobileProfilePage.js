import React from "react";
import { Box, Typography, Grid, Paper, Container, Divider } from '@material-ui/core'
import { makeStyles, createStyles, withTheme } from "@material-ui/styles";
import ResizableImage from "../../../utils/ImageMachine/ResizableImage";
import FriendsCount from "../Friends/FriendsCount";

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

const MobileProfilePage = (props) => {
    const subtitleColorRGB = (props.theme.palette.type === "light" ? "rgba(0,0,0,0.4)": "rgba(255,255,255,0.4)")
    const classes = useStyles();

    return (
        <>
            <Container maxWidth='xl' className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item sm={12}>
                        <Paper elevation={3} className={classes.paper}>
                            <Box display='flex' width="90%" margin="0 auto 20px auto" overflow='hidden'>
                                <Box marginRight="20px" display='inline-block'>
                                    <Box height='100%' display='flex' alignItems='center'>
                                        <ResizableImage className={classes.profile} maxWidth="100px" ImageProps={{
                                            style: {
                                                borderRadius: 12,
                                            },
                                            className: classes.profile,
                                            src: "https://img.pngio.com/minecraft-steve-head-png-group-hd-png-steve-head-png-1100_1000.jpg",
                                            alt: 'PROFILE'
                                        }} />
                                    </Box>
                                </Box>
                                <Divider orientation="vertical" flexItem light />
                                <Box width="70%" display='inline-block'>
                                    <Box marginLeft="10px">
                                        <Typography variant="h5">CommonSenze</Typography>
                                        <Typography component='div' variant="body2"><Box color={subtitleColorRGB}>Last online 20m ago</Box></Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.friendsBox} width="90%" margin="0 auto" overflow='hidden'>
                                <Box display="flex" justifyContent="center" paddingTop="10px">
                                    <Typography className={classes.profileName} variant="h6"><Box fontWeight="bold">Friends</Box></Typography>
                                </Box>
                                <Divider style={{ width: "80%", margin: '20px auto' }} />
                                <FriendsCount />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default withTheme(MobileProfilePage);