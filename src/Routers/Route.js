import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "../pages/home/home";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
// import LightTheme from "../Components/Themes/LightTheme";
// import DarkTheme from "../Components/Themes/DarkTheme";
import { LightTheme, DarkTheme } from "../utils/Themes";
import Profile from "../pages/profile/profile";
import { mapStateToProps } from "../utils/Redux/redux";
import login from "../pages/login/login";
import forums from "../pages/forums/forums";
import search from "../pages/search/search";

const Router = (props) => {
    return (
        <ThemeProvider theme={props.lightsOn ? LightTheme : DarkTheme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/forums" component={forums} />
                    <Route exact path="/forums/:subcategory" component={forums} />
                    <Route exact path="/forums/:subcategory/create-thread" component={forums} />
                    <Route
                        exact
                        path="/forums/:category/:thread"
                        component={forums}
                    />
                    <Route exact path="/" component={home} />
                    <Route exact path="/login" component={login} />
                    <Route exact path="/search" component={search} />
                    {/* <PrivateRoute exact path="/cool" isAuth={false} component={settings} /> */}
                    {/* <PrivateRoute exact path="/dashboard" isAuth={true} component={dashboard} /> */}
                    <Route
                        path="/profile/:username"
                        render={(props) => {
                            return <Profile {...props} />;
                        }}
                    />
                    {/* <Route component={fourzerofour} /> */}
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default connect(mapStateToProps, null)(Router);
