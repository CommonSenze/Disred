import React, { useState } from "react";
import {
    Box,
    Divider,
    Tooltip,
    Menu,
    Avatar,
    MenuItem,
    IconButton,
    Icon,
    Badge,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NormalButton from "../../../../utils/Buttons/NormalButton";
import { mapDispatchToProps, mapStateToProps } from "../../../../utils/Redux/redux";
import { connect } from "react-redux";

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
        menuItem: {
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
        }
    })
);

const Profile = (props) => {
    const classes = useStyles();
    const [selected, setSelected] = useState(null);

    const handleClick = (e) => {
        setSelected(e.currentTarget);
    };

    const handleClose = () => {
        setSelected(null);
    };

    const handleLogout = () => {
        handleClose();
        props.logout();
    };

    return (
        <>
            {props.isLoggedIn ? (
                <>
                    <IconButton className={classes.button} color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Tooltip title={"Logged in as " + props.profile.username}>
                        <IconButton
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            className={classes.button}
                            color="inherit"
                        >
                            <Box width="25px">
                                <Avatar
                                    variant="circle"
                                    src={"https://minotar.net/avatar/"+props.profile.uniqueId}
                                />
                            </Box>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={selected}
                        keepMounted
                        open={Boolean(selected)}
                        getContentAnchorEl={null}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        PaperProps={{
                            style: {
                                width: "200px",
                                padding: 0,
                            },
                        }}
                        MenuListProps={{
                            style: {
                                padding: 0,
                            },
                        }}
                    >
                        <MenuItem className={classes.menuItem} onClick={handleClose}><Icon className="fas fa-user" style={{fontSize: 16, marginRight: "5px"}} /> <Box>Profile</Box></MenuItem>
                        {/* <MenuItem className={classes.menuItem} onClick={handleClose}><Icon className="fas fa-user" style={{fontSize: 16, marginRight: "5px"}} /> <Box>My account</Box></MenuItem> */}
                        <Divider style={{width:"80%", margin: "auto"}} />
                        <MenuItem className={classes.menuItem} onClick={handleLogout}><Icon className="fas fa-sign-out-alt" style={{fontSize: 16, marginRight: "5px"}} /> <Box>Logout</Box></MenuItem>
                    </Menu>
                </>
            ) : window.location.pathname !== "/login" ? (
                <Link
                    to={{
                        pathname: "/login",
                        state: {
                            link: window.location.pathname,
                            backPage: props.title,
                        },
                    }}
                    style={{ color: "inherit" }}
                >
                    <NormalButton color="inherit" width={100}>
                        <Box fontWeight="fontWeightBold" display="inline">
                            Login
                        </Box>
                    </NormalButton>
                </Link>
            ) : (
                <></>
            )}
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
