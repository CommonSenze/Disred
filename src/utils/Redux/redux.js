import { lightAction, loginAction, logoutAction } from "../../redux";

export const mapStateToProps = state => {
    return {
        lightsOn: state.root.lightsOn,
        profile: state.auth.profile,
        isLoggedIn: state.auth.isLoggedIn,
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        lightSwitch: value => dispatch(lightAction(value)),
        login: profile => dispatch(loginAction(profile)),
        logout: () => dispatch(logoutAction()),
    }
}