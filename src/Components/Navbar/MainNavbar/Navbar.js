import React from "react";
import {
    Box,
    Container,
    Divider,
    Typography,
    AppBar,
    Toolbar,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ToggleLight from "./ToggleLight/ToggleLight";
import NormalButton from "../../../utils/Buttons/NormalButton";
import Profile from "./Profile/Profile";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
    createStyles({
        nav: {
            "background-color": theme.palette.background.default,
            color: theme.palette.text.primary,
        },
        title: {
            display: "flex",
            flexGrow: 1,
        },
    })
);

const Navbar = (props) => {
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
                        <Box fontWeight="fontWeightBold" display="inline">
                            {props.title}
                        </Box>
                    </Typography>
                    <ToggleLight />
                    <Link
                        to={{
                            pathname: "/forums",
                        }}
                        style={{ color: "inherit" }}
                    >
                        <NormalButton color="inherit" width={100}>
                            <Box fontWeight="fontWeightBold" display="inline">
                                Forums
                            </Box>
                        </NormalButton>
                    </Link>
                    <Profile title={props.title} />
                </Toolbar>
            </Container>
            <Divider />
        </AppBar>
    );
};

export default Navbar;
