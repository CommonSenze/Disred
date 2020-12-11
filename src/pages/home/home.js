import React from 'react'
import Navbar from "../../Components/Navbar/MainNavbar/Navbar"
import { Box, CssBaseline } from "@material-ui/core"
import HomeBody from '../../Components/Home/HomeBody'
import './Home.css'

const home = () => {
    return (
        <>
            <CssBaseline />
            <Box minHeight='100vh' display='flex' flexDirection="column">
                <Navbar title="Home" />
                <HomeBody />
            </Box>
        </>
    )
}

export default home;
