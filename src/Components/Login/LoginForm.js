import {
    Box,
    TextField,
    FormControl,
    Typography,
    Divider,
    Button,
    Link,
    Backdrop,
    CircularProgress,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../utils/Redux/redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) =>
    createStyles({
        box: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },
        content: {
            flex: "1 1 auto",
            borderRadius: "10px",
            width: "35%",
        },
        paper: {
            border: "1px solid " + theme.palette.divider,
            position: "relative",
        },
        button: {
            width: "100%",
            marginTop: "20px",
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
        }
    })
);

const LoginForm = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { link, state } = props;
    const classes = useStyles();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
            .post("http://localhost:8080/api/profiles/profile", {
                username: username,
                password: password,
            })
            .then((response) => {
                console.log(response);
                setLoading(false);
                if (response.data.usererror || response.data.passworderror) {
                    var username = "";
                    var password = "";
                    if (response.data.usererror) {
                        username = response.data.usererror;
                    }
                    if (response.data.passworderror) {
                        password = response.data.passworderror;
                    }
                    setErrors({ username: username, password: password });
                } else {
                    props.login(response.data);
                    history.push(link, state);
                }
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

    return (
        <Box padding={4}>
            <Typography variant="h6">Sign In</Typography>
            <Divider style={{ margin: "15px 0" }} />
            <form onSubmit={handleSubmit}>
                <FormControl variant="outlined" fullWidth className="mb-4">
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        required
                        helperText={errors.username ? errors.username : ""}
                        error={errors.username ? errors.username !== "" : false}
                        fullWidth
                        variant="outlined"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <TextField
                        type="password"
                        id="outlined-basic1"
                        label="Password"
                        required
                        helperText={errors.password ? errors.password : ""}
                        error={errors.password ? errors.password !== "" : false}
                        fullWidth
                        variant="outlined"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </FormControl>
                <Button
                    className={classes.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    <Box fontWeight="fontWeightBold">Sign In</Box>
                </Button>
            </form>
            <Divider style={{ margin: "15px 0" }} />
            <Link href="#" style={{ textDecoration: "none" }}>
                Forgot Password?
            </Link>
            <Typography variant="subtitle1" className="mt-3">
                <Box fontWeight="fontWeightBold">Not a member?</Box>
            </Typography>
            <Divider style={{ marginTop: "5px" }} />
            <Button
                className={classes.button}
                variant="outlined"
                color="primary"
            >
                <Box fontWeight="fontWeightBold">Learn How To Register</Box>
            </Button>
            <Backdrop
                className={classes.backdrop}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
