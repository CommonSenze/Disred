import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Tooltip } from "@material-ui/core";
import RatingType from "../../../utils/Enums/RatingType";
import axios from "axios";

const Ratings = (props) => {
    const { profile } = props;
    const [sentRatings, setSentRatings] = useState({});
    const [recievedRatings, setRecievedRatings] = useState({});
    useEffect(() => {
        Object.keys(RatingType).map((type) => {
            document.getElementById(type).innerHTML =
                "<img src=" +
                RatingType[type].icon +
                " alt=" +
                type +
                ' height="18px" />';
            return <></>;
        });
    });
    useEffect(() => {
        const checkSentAmount = (type) => {
            axios
                .get(
                    "http://localhost:8080/api/forums/rating/profile/sent?sender=" +
                        profile.uniqueId
                )
                .then((response) => {
                    setSentRatings(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        const checkRecievedAmount = (type) => {
            axios
                .get(
                    "http://localhost:8080/api/forums/rating/profile/recieved?creator=" +
                        profile.uniqueId
                )
                .then((response) => {
                    setRecievedRatings(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        checkSentAmount();
        checkRecievedAmount();
    }, [profile.uniqueId]);
    return (
        <Box marginTop="10px">
            <Divider />
            <Box
                textAlign="center"
                fontWeight="bold"
                component="h6"
                marginY="5px"
            >
                Ratings
            </Box>
            <Divider />
            <Box marginY="5px">
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container wrap="nowrap">
                            <Grid item xs={4}>
                                <Box textAlign="center" marginLeft="5px">
                                    Rating
                                </Box>
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={4}>
                                <Box marginLeft="5px">Recieved</Box>
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={4}>
                                <Box marginLeft="5px">Sent</Box>
                            </Grid>
                        </Grid>
                        {Object.keys(RatingType).map((type) => {
                            return (
                                <Grid key={type} container wrap="nowrap">
                                    <Grid item xs={4}>
                                        <Box marginLeft="5px">
                                            <Tooltip
                                                arrow
                                                title={RatingType[type].name}
                                            >
                                                <Box
                                                    textAlign="center"
                                                    id={type}
                                                ></Box>
                                            </Tooltip>
                                        </Box>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs={4}>
                                        <Box marginLeft="5px">
                                            {recievedRatings[type]
                                                ? recievedRatings[type]
                                                : 0}
                                        </Box>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs={4}>
                                        <Box marginLeft="5px">
                                            {sentRatings[type]
                                                ? sentRatings[type]
                                                : 0}
                                        </Box>
                                    </Grid>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </Box>
    );
};

export default Ratings;
