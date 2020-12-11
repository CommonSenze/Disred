import React from "react";
import ProfilePage from "../../Components/Profile/ProfilePage";
import { CssBaseline, useMediaQuery, Box } from "@material-ui/core";
import SidePageNavbar from "../../Components/Navbar/SidePageNavbar/SidePageNavbar";
import MobileProfilePage from "../../Components/Profile/MobileView/MobileProfilePage";
const Profile = () => {
    const mobileView = !useMediaQuery("(min-width: 1160px)")
    return (
        <Box display='flex' flexDirection='column' minHeight='100%'>
            <CssBaseline />
            <SidePageNavbar backPage='Home' link='/' />
            {mobileView ? <MobileProfilePage /> : <ProfilePage />}
        </Box>
    )
}

export default Profile;