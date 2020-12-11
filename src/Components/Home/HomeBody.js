import React, { useState, useEffect } from "react";
import HomePost from "./Middle/HomePost";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../utils/Redux/redux";
import HomeSearch from "./RightSide/HomeSearch";
import HomeFriends from "./LeftSide/HomeFriends";
import HomeForum from "./Middle/HomeForum";

const HomeBody = () => {
    const [firstWidth, setFirstWidth] = useState(0);
    const [secondWidth, setSecondWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setFirstWidth(document.getElementById("overlayBox1").clientWidth);
            setSecondWidth(document.getElementById("overlayBox2").clientWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Box flex="1" display="flex" flexDirection="row">
            <Box position="relative" width="30%" id="overlayBox1">
                <Box
                    id="fixedBox1"
                    position="fixed"
                    minHeight="100%"
                    style={{ width: firstWidth + "px" }}
                >
                    <HomeFriends />
                </Box>
            </Box>
            <HomeForum />
            <Box position="relative" width="30%" id="overlayBox2">
                <Box
                    id="fixedBox2"
                    position="fixed"
                    minHeight="100%"
                    style={{ width: secondWidth + "px" }}
                >
                    <HomeSearch />
                </Box>
            </Box>
        </Box>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);
