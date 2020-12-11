import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import {
    Box,
    Container,
    Divider,
    Tooltip,
    IconButton,
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ToggleLight from "../MainNavbar/ToggleLight/ToggleLight";
import { Link } from "react-router-dom";
import NormalButton from "../../../utils/Buttons/NormalButton";
import Profile from "../MainNavbar/Profile/Profile";

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            "&:focus": {
                outline: "none",
            },
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
            },
            marginLeft: theme.spacing(1),
        },
        title: {
            display: "flex",
            flexGrow: 1,
        },
        nav: {
            "background-color": theme.palette.background.default,
            color: theme.palette.text.primary,
        },
    })
);

const SidePageNavbar = (props) => {
    const classes = useStyles();
    return (
        <AppBar
            position="sticky"
            className={`${classes.nav} ${props.className}`}
            elevation={0}
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Tooltip title={props.backPage}>
                            <Link
                                to={{
                                    pathname: props.link,
                                    state: props.state,
                                }}
                            >
                                <IconButton
                                    className={classes.button}
                                    color="inherit"
                                >
                                    <ChevronLeftIcon />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </Typography>
                    <ToggleLight />
                    <Link
                        to={{
                            pathname: "/forums",
                        }}
                        underline="none"
                        style={{color:"inherit"}}
                    >
                        <NormalButton color="inherit" width={100}>
                            <Box fontWeight="fontWeightBold" display="inline">
                                Forums
                            </Box>
                        </NormalButton>
                    </Link>
                    <Profile />
                </Toolbar>
            </Container>
            <Divider light />
        </AppBar>
    );
};

export default SidePageNavbar;
